import React, { useState, createContext } from 'react';

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    
    const [ isAuth, setIsAuth ] = useState(false);

    const toggle = () => {
        setIsAuth(!isAuth);
    }

    let loggedIn = isAuth ? "Logged In": "Logged Out"

    return (
        <AuthContext.Provider value={{loggedIn, toggle}}>
            {children}
        </AuthContext.Provider>
    );
}

