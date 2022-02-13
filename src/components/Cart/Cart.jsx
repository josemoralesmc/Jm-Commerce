import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { useContextCart } from "../Context/CartContext";

const CartComponent = () => {

  const { list, DeleteCart, deleteitem, totalamount } = useContextCart();

  const [loading, setloading] = useState(true)



  return (
    <>
      {
        list.length === 0 ? <div>
        <h1>Tu carro de compras esta vacio, vuelve a la tienda y realiza una compra</h1> 
        <Link to="/"> <button className="btn btn-outline-primary btn-block buttonRest ctn">Ir a comprar</button></Link>
        </div>
        : <div>
        {list.map((product) => <div>
          <li>{product.name}, precio: {product.price}, cantidad: {product.quantity}</li>
          <button onClick={() => deleteitem(product.id)}>X</button>
          </div>)}
            <p>precio total: {totalamount()}</p>
          <button onClick={() => DeleteCart()}>Borrar todo</button>
          </div>
      }
    </>
  )
}

export default CartComponent
