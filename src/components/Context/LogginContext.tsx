/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

export interface LogginContextType{
  isLog:boolean;
  idLog:string;
}

export const LogginContext = createContext<[LogginContextType, React.Dispatch<React.SetStateAction<LogginContextType>>]>(
  [{ isLog: false, idLog: '' }, () => {}],
);
