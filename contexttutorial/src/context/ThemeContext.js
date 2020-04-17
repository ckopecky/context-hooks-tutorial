import React, { useState, createContext } from 'react';


export const ThemeContext = createContext();


export const ThemeContextProvider = ({children}) => {

    const light = {
        name: 'dark',
        text: '#555',
        ui: '#ddd',
        bg: '#eee',
        button: '#fafafa'
    };
    const dark = {
        name: 'light',
        text: '#ddd',
        ui: '#333',
        bg: '#555',
        button: '#444'
    };

    const [ isLightTheme, setIsLightTheme ] = useState(true);


    const toggle = () => {
        setIsLightTheme(!isLightTheme)
    }

    let theme =  isLightTheme ? light : dark;

    console.log(isLightTheme, theme)
    
    return (
        <ThemeContext.Provider value={{ theme , toggle}}>
            { children }
        </ThemeContext.Provider>
    );
};

export default ThemeContext;

