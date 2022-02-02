import React from "react";
import ItemListContainer from "./components/Items/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Navbar/NavBar";
import ItemDetailContainer from "./components/ItemDetails/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />
        <Routes>
         <Route path="/" element={<ItemListContainer/>} />
         <Route exact path="/categoria/:category" element={<ItemListContainer/>}/>
         <Route exact path="/item/:idProducto" element={<ItemDetailContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
