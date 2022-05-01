import React from "react";
import { ChangeHandler, FieldError, RegisterOptions } from "react-hook-form";

// type RegisterOptions = {
//   ref?: React.Ref<any>;
//   required?: boolean | string;
//   maxLength?: number;
//   minLength?: number;
//   max?: number;
//   min?: number;
//   pattern?: RegExp;
//   validate?: Function | Object;
//   valueAsNumber?: boolean;
//   valueAsDate?: boolean;
//   setValueAs?: <T>(value: any) => T;
//   disabled?: boolean;
//   onChange?: ChangeHandler;
//   onBlur?: ChangeHandler;
//   value?: any;
//   shouldUnregister?: boolean;
//   deps?: string | string[];
// };

type InputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder: string;
  error: FieldError | undefined;
  register: Function;
  autoComplete?: string;
  options?: RegisterOptions;
};

const Input = ({
  name,
  label,
  type = "text",
  placeholder = "",
  error,
  register,
  autoComplete,
  options
}: InputProps) => {
  return (
    <div className="w-full col-start-start pt-2 relative">
      {label ? <label className="mb-1.5 text-sm">{label}</label> : null}
      <input
        className={`h-9 w-full box-border rounded bg-white border border-grey px-2.5 text-sm mb-4 ${
          error ? "input-error-state" : ""
        }`}
        // className={error ? styles.error : ""}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name, options)}
      />
      {error ? (
        <p
          className="my-px text-xs text-left text-error absolute	bottom-0 left-0"
          role="alert"
        >
          {error.message}
        </p>
      ) : null}
    </div>
  );
};

export default React.memo(Input);
