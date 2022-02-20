import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContextCart } from "../Context/CartContext";

const CartComponent = () => {
  const { list, DeleteCart, deleteitem, totalamount } = useContextCart();

  const [loading, setloading] = useState(true);

  const Orderpurchase = async () => {
    let order = {}

    order.buyer = {name: "Jose", phone: 3517533747, email: "jose@morales" };
    order.total = totalamount();
    order.items = list.map(list =>{
      let id = list.item.id;
      let name = list.item.name;
      let price = list.item.price;
      return {
        id,
        name,
        price
      }
      
    })
    const db = getFirestore();
    const ordersColecction = collection(db, 'orders');
    await addDoc(ordersColecction, order)
    .then(res => console.log(`Su id de orden de compra es ${res.id} `))
    .finally(
    DeleteCart()
    )
  }

  return (
    <>
      {list.length === 0 ? (
        <div>
          <div
            class="alert alert-primary d-flex align-items-center"
            role="alert"
          >
          <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
 
          <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
          </symbol>
          
        </svg>
            <div>An example alert with an icon</div>
          </div>
          <Link to="/">
            {" "}
            <button className="btn btn-outline-primary btn-block buttonRest ctn">
              Ir a comprar
            </button>
          </Link>
        </div>
      ) : (
        <div>
          {list.map((product) => (
            <div>
              <li>
                {product.item.name}, precio: {product.item.price}, cantidad:{" "}
                {product.quantity}
              </li>
              <button onClick={() => deleteitem(product.item.id)}>X</button>
            </div>
          ))}
          <p>precio total: {totalamount()}</p>
          <button onClick={() => DeleteCart()}>Borrar todo</button>
          <button onClick={() => Orderpurchase()}>Ordenar compra</button>
        </div>
      )}
    </>
  );
};

export default CartComponent;



