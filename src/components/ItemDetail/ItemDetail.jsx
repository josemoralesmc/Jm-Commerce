import React from "react";
import { useContextCart } from "../Context/CartContext";
import ItemCount from "../ItemCount.js/ItemCount";

const ItemDetail = ({ product }) => {

const { list, setList, CartProduct } = useContextCart();


function onAdd(cant) {
   if (DuplicateProducts(product.id)) {
     const liste = [...list]
     liste.forEach((e)=>{
       
      if (e.id === product.id) {
       e.quantity += cant
      }
    })
    return setList(liste); 
  }
  return CartProduct( { ...product  , quantity: cant });
  }


  const DuplicateProducts = (id) => list.find((e) =>  e.id === id) 

  
  return (
    <div>
      <div>
        <div className="d-flex justify-content-center align-items-sm-center">
          <img style={{width: "18rem", height: "17rem"}} src={product.image} alt="" />
          <div  style={{width: "18rem"}}>
            <h3>{product.name}</h3>
            <h5>${product.price}</h5>
          </div>
        </div>
        <p style={{ width: "35em", textAlign: "center", margin: "auto" }}>
          {product.description}
        </p>
      </div>
      <div>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
