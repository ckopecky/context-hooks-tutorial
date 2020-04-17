import React, { useState, useEffect } from 'react';


export const useToggle = (state) => {

    const [ stateApp, setStateApp ] = useState(state);

    useEffect(() => {
        setStateApp(!stateApp);
    }, [stateApp]);

    return stateApp;
};

