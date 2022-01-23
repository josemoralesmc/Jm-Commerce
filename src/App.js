import React from 'react'
import ItemListC from './components/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemCount from './components/ItemCount.js/ItemCount';
import Menu from './components/Navbar/NavBar';


function App() {
  return (
    <div>
    <Menu/>
    <ItemListC/>
    </div>
  );
}

export default App;
