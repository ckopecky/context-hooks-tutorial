import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const ToggleButton = () => {
    const {theme, toggle} = useContext(ThemeContext);
    console.log(theme, toggle)

    return (
        <button onClick={toggle} style={{background: theme.bg, color: theme.text, borderRadius: '20px'}}>
            {theme.name}
        </button>
    );
};

export default ToggleButton;