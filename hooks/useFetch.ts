import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosError, AxiosRequestHeaders, Method } from 'axios';
import { accessTokenAtom } from './useStore';
import { useAtom } from 'jotai';

type Options = {
  method?: Method;
  data?: object;
  headers?: AxiosRequestHeaders;
  includeToken?: boolean;
};

// axios.defaults.baseURL = 'https://server-o8g6.onrender.com/';
axios.defaults.baseURL = 'http://localhost:4002/';

// axios.interceptors.response.use((response) => {
//   if (response.data.message === 'Invalid Token') {
//     logout();
//   }
// });

const useFetch = (url: string) => {
  const [response, setResponse] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [options, setOptions] = useState<Options | undefined>({});
  const [token] = useAtom(accessTokenAtom);
  const doFetch = useCallback((options?: Options) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const fetchData = async () => {
      try {
        if (options) {
          options.headers = { ...options.headers, Authorization: `Bearer ${token}` };
        }
        const res = await axios(url, options);
        setResponse(res.data);
      } catch (err: any) {
        if (err) {
          if (err.response.data.errorMessage === 'Invalid Token') {
            // logout user
          }
          const data = err.response?.data || 'Server error';
          setError(data);
        }
      }
      setIsLoading(false);
    };
    fetchData();
  }, [isLoading, options, url]);

  return { response, error, isLoading, doFetch };
};

export default useFetch;
