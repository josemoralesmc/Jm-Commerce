import React from 'react'
import ItemListContainer from './components/Items/ItemListContainer';
import { BrowserRouter} from 'react-router-dom'
import Menu from './components/Navbar/NavBar';
import ItemDetailContainer from './components/ItemDetails/ItemDetailContainer';


function App() {
  return (
      <div>
        <Menu/>
        <ItemDetailContainer/>
      </div>
    );
}

export default App;
