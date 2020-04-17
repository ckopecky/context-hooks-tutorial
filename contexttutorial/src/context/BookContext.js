import React, { useState, createContext } from 'react';

export const BookContext = createContext();

export const BookContextProvider = ({children}) => {
    const initialState = [
        {title: 'Gone With the Wind', author: 'Margaret Mitchell', id: 1},
        {title: 'Legend', author: 'Marie Lu', id: 2},
        {title: 'Sideways Stories From Wayside School', author: 'Louis Sachar', id: 3}
    ]

    const [ books, setBooks ] = useState(initialState);


    return (
        <BookContext.Provider value={{books}}>
            {children}
        </BookContext.Provider>
    );
};

