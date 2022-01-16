import React from 'react'
import ItemListC from './components/ItemListContainer';
import Menu from './components/NavBar';
function App() {
  return (
    <div>
    <Menu/>
    <ItemListC greetings="Hola Mundo!" />
    </div>
  );
}

export default App;
