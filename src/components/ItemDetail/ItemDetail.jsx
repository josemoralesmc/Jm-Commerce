import React from "react";
import { useContextCart } from "../Context/CartContext";
import ItemCount from "../ItemCount.js/ItemCount";

const ItemDetail = ({ product }) => {

const { list, CartProduct } = useContextCart();


function onAdd(cant) {
   if (DuplicateProducts(product.name)) {
   /*  const liste = [...list]
     liste.forEach((e)=>{
       
      if (e.name === product.name) {
        cant += e.quantity
      }

    })
 */
    return console.log("Se repite");
    }

    return CartProduct( { ...product  , quantity: cant });
  }


  const DuplicateProducts = (element) => {

    const findProd = list.find((e) => {
     return e.name === element})
    return findProd
  }

console.log(list);
  
  return (
    <div>
      <div>
        <div className="d-flex justify-content-center">
          <img src={product.foto} alt="" />
          <div>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
          </div>
        </div>
        <p style={{ width: "25em", textAlign: "center", margin: "auto" }}>
          {product.detail}
        </p>
      </div>
      <div>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
