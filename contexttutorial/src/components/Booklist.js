import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { BookContext } from '../context/BookContext';


const Booklist = (props) => {
    const { theme } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    return (
        <div style={{background: theme.bg}} className="book-list">
            { books.map(book => {
                return (
                    <li style={{background: theme.ui, color: theme.text}}>
                        <span>{ book.author }: </span>
                        <span>{ book.title }</span>
                    </li>
                )
            })}
        </div>
    );
};

export default Booklist;