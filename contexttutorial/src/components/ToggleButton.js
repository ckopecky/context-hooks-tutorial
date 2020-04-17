import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class ToggleButton extends Component {
    static contextType = ThemeContext;
    render() {
        const { theme, toggle } = this.context;
        return (
            <button style={{background: theme.button, borderRadius: '20px', color: theme.text}} onClick={toggle}>
                {theme.name}
            </button>
        );
    }
}

export default ToggleButton;