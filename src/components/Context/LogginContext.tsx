/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */

import { createContext } from 'react';

export const LogginContext = createContext({
  isLogged: false,
  setIsLogged: (log:boolean) => {},
});
