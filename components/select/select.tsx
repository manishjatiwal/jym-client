import useOnClickOutside from '@hooks/useOnCLickOutside';
import useScroll from '@hooks/useScroll';
import useWindowResize from '@hooks/useWindowResize';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './select.css';

type SelectProps = {
  options: any[];
  onChange: (...event: any[]) => void;
  label?: string;
  allowSearch?: boolean;
  returnKey: string;
  showKey: string;
};

type Coordinates = {
  width?: number;
  left?: number;
  top?: number;
  height?: number;
};

export default function Select({ label, options, allowSearch, onChange, returnKey, showKey }: SelectProps) {
  const [visible, setvisible] = useState(false);
  const [coordinates, setcoordinates] = useState<Coordinates>({});
  const [top, setTop] = useState<number | undefined>(0);
  const [value, setValue] = useState<string>('');
  const [sortedOptions, setSortedOptions] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  const selectBoxRef = useRef<HTMLDivElement>(null);
  const selectDropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(selectDropdownRef, () => {
    setvisible(false);
  });

  useEffect(() => {
    if (searchText) {
      setSortedOptions(options.filter((option) => option[showKey].includes(searchText)));
    } else if (options) {
      setSortedOptions([...options]);
    }
  }, [options, searchText]);

  const positionHandler = () => {
    if (selectDropdownRef.current && selectBoxRef.current) {
      if (
        selectBoxRef.current.getBoundingClientRect().top + selectDropdownRef.current.getBoundingClientRect().height + selectBoxRef.current.getBoundingClientRect().height >=
        (window.innerHeight || document.documentElement.clientHeight)
      ) {
        setTop(selectBoxRef.current.getBoundingClientRect().top + window.scrollY - selectDropdownRef.current.getBoundingClientRect().height);
      } else {
        setTop(selectBoxRef.current.getBoundingClientRect().top + window.scrollY + selectBoxRef.current.getBoundingClientRect().height);
      }
    }
  };

  useEffect(() => {
    setSelectBoxDimensions();
  }, [selectBoxRef.current]);

  const setSelectBoxDimensions = (allowSettingTop: boolean = true) => {
    if (selectBoxRef.current) {
      setcoordinates({
        width: selectBoxRef.current.getBoundingClientRect().width,
        left: selectBoxRef.current.getBoundingClientRect().left,
        top: selectBoxRef.current.getBoundingClientRect().top,
        height: selectBoxRef.current.getBoundingClientRect().height
      });
      if (allowSettingTop) setTop(selectBoxRef.current.getBoundingClientRect().top);
    }
  };

  useScroll(positionHandler);

  useWindowResize(() => {
    setSelectBoxDimensions(false);
    positionHandler();
  });

  const toggle = () => {
    setSearchText('');
    setvisible(!visible);
  };

  const setSelectValue = (e: any) => {
    if (e) {
      setValue(e[showKey]);
      onChange(e[returnKey]);
      setvisible(false);
    }
  };

  useEffect(() => {
    positionHandler();
  }, [visible]);

  return (
    <div>
      <label className="required fw-bold fs-6 mb-2">{label}</label>

      <div
        onClick={() => toggle()}
        ref={selectBoxRef}
        className="select2 select2-container select2-container--bootstrap5 select2-container--below select2-container--open"
        dir="ltr"
        data-select2-id="select2-data-11-xiew"
      >
        <span className="selection">
          <span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="true" aria-disabled="false">
            <span className="select2-selection__rendered" id="select2-currnecy-f8-container" role="textbox" aria-readonly="true" title="Select currency">
              {value || <span className="select2-selection__placeholder">Select</span>}
            </span>
            <span className="select2-selection__arrow" role="presentation">
              <b role="presentation"></b>
            </span>
          </span>
        </span>
        <span className="dropdown-wrapper" aria-hidden="true"></span>
      </div>

      {visible &&
        createPortal(
          <div ref={selectDropdownRef} className="select-dropdown-container" style={{ position: 'absolute', top: top, left: coordinates.left, width: coordinates.width }}>
            {allowSearch && (
              <span className="select-search-wrap">
                <input autoFocus onChange={(e) => setSearchText(e.target.value)} value={searchText} className="select-search" />
              </span>
            )}
            <div>
              <ul className="select-dropdown-list">
                {sortedOptions.map((option, index) => (
                  <li onClick={() => setSelectValue(option)} key={index} className="select-dropdown-list-item">
                    {option[showKey]}
                  </li>
                ))}
                {sortedOptions.length === 0 && (
                  <li onClick={(e) => e.stopPropagation()} className="no-result">
                    No results found
                  </li>
                )}
              </ul>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
