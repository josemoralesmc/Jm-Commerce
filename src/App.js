import React from "react";
import ItemListContainer from "./components/Items/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Navbar/NavBar";
import ItemDetailContainer from "./components/ItemDetails/ItemDetailContainer";
import CartContext from "./components/Context/CartContext";
import CartComponent from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:category"
              element={<ItemListContainer />}
            />
            <Route
              path="/item/:idProducto"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<CartComponent/>} />
          </Routes>
        </div>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
