import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ToggleAuth = (props) => {
    const { loggedIn, toggle} = useContext(AuthContext);
    return (
        <button style={{background: props.theme.button, borderRadius: '20px', color: props.theme.text}} onClick={toggle}>
            {loggedIn}
        </button>
    );
}

export default ToggleAuth;