import { useEffect } from 'react';

const useWindowResize = (handler: () => void) => {
  useEffect(() => {
    const listener = () => {
      handler(); // Call the handler
    };
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [handler]); // Reload only if ref or handler changes
};

export default useWindowResize;
