import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const userDataAtom = atomWithStorage('userData',null);
export const accessTokenAtom = atomWithStorage('accessToken',null);

const useStore = useAtom;
export default useStore;
