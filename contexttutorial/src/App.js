import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import { BookContextProvider } from './context/BookContext';

function App() {  
  return (
    <div className="App">
        <Navbar />
        <BookContextProvider>
          <Booklist />
        </BookContextProvider>
      
    </div>
  );
}

export default App;
