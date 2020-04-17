import React, { useContext } from 'react';
import { ThemeContext} from '../context/ThemeContext';
import ToggleButton from "./ToggleButton";
import ToggleAuth from './ToggleAuth';


const Navbar = (props) => {
    const { theme } = useContext(ThemeContext);

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
            <ToggleButton name={theme.name}/>
            <ToggleAuth theme={theme}/>
        </nav>
    );
};

export default Navbar;