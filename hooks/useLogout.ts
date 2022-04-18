import React, { useEffect } from 'react';
import useStore, { accessTokenAtom, userDataAtom } from './useStore';

function useLogout(handler?: () => void) {
  // const [, setUserData] = useStore(userDataAtom);
  // const [, setAccesToken] = useStore(accessTokenAtom);
  
  // const navigate = useNavigate();

  return () => {
    // setUserData(null);
    // setAccesToken(null);
    if (handler) handler();
    console.log(8888);
    // navigate('/login');
  };
}

export default useLogout;
