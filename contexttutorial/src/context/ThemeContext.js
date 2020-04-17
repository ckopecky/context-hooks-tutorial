import React, { Component, createContext } from 'react';


export const ThemeContext = createContext();


export class ThemeContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLightTheme: true,
            light: {
                name: 'dark',
                text: '#555',
                ui: '#ddd',
                bg: '#eee',
                button: '#fafafa'
            },
            dark: {
                name: 'light',
                text: '#ddd',
                ui: '#333',
                bg: '#555',
                button: '#444'
            }
        }

    }

    toggle = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }

    render() {
        const { isLightTheme, light, dark } = this.state;
        let theme =  isLightTheme ? light : dark;

        return (
            <ThemeContext.Provider value={{ theme , toggle: this.toggle}}>
                { this.props.children }
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContext;
