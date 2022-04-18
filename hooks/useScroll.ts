import { useEffect } from 'react';

type Event = globalThis.Event;

const useScroll = (handler: (event: Event) => void) => {
  useEffect(() => {
    const listener = (event: Event) => {
      handler(event);
    };

    document.addEventListener('scroll', listener);

    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [handler]);
};

export default useScroll;
