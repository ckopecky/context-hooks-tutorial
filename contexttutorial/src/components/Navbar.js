import React, { useContext } from 'react';
import { ThemeContext} from '../context/ThemeContext';
import { AuthContext} from '../context/AuthContext';
import ToggleButton from "./ToggleButton";
import ToggleAuth from './ToggleAuth';

class Navbar extends React.Component {
    render() {
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { theme } = themeContext;
                    return (
                        <nav style={{background: theme.ui, color: theme.text}}>
                            <div className="navbar">
                                <h1>Context App</h1>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                            <ToggleButton />
                            <ToggleAuth 
                                theme={theme}
                                loggedIn={authContext.isAuth} 
                                toggleAuth={authContext.toggleAuth}
                            />
                        </nav>
                    );
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        );
    };
}

export default Navbar;