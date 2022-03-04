import { Box } from "@mui/material";
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
  return CartProduct( { item:{  ...product}  , quantity: cant });
  }


  const DuplicateProducts = (id) => list.find((e) =>  e.id === id) 

  
  return (
    <div>
      <div>
        <Box sx={{display: "flex", flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} >
          <img style={{width: "18rem", height: "17rem"}} src={product.image} alt="" />
          <Box style={{width: "18rem"}}>
            <h3>{product.name}</h3>
            <h5>${product.price}</h5>
          </Box>
        </Box>
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
