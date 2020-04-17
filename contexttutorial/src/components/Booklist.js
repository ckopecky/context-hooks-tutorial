import React, { Component } from 'react';
import ThemeContext from '../context/ThemeContext';

class Booklist extends Component {
    static contextType = ThemeContext;

    render() {
        const { theme } = this.context;
        return (
            <div className="book-list" style={{background: theme.bg, color: theme.text}}>
                <ul>
                    <li style={{background: theme.ui}}>Margaret Mitchell:  Gone With the Wind</li>
                    <li style={{background: theme.ui}}>Ernest Cline:  Ready Player One</li>
                    <li style={{background: theme.ui}}>Marie Lu:  Legend</li>
                </ul>
                
            </div>
        );
    }
}

export default Booklist;