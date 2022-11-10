//Imports
import React, { useState, createContext } from 'react';

//Exports
export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [token, setToken] = useState('null');

    return <SessionContext.Provider value={{ token, setToken }}>{children}</SessionContext.Provider>;
};
