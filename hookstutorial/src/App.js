import React from 'react';
import Navbar from './components/Navbar';
import Songlist from './components/Songlist';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Songlist />
        </div>
    );
};

export default App;