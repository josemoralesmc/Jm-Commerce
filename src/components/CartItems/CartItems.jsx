import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import CartForm from "../CartForm/CartForm";
import ClearIcon from '@mui/icons-material/Clear';
import './CartItems.css'


const CartItems = ({list, DeleteCart, totalamount, deleteitem, idOrder}) => {

 

  return (
    <div className="itemscart">
    <div>
    {list.map((product) => (
      <div>
      <li>
      {product.item.name}
       <br/> precio: {product.item.price}   <br/> cantidad:{product.quantity} <ClearIcon style={{cursor: "pointer"}} onClick={() => deleteitem(product.item.id)}/>
      </li>
      </div>
      ))}
      <p>precio total: {totalamount()}</p>
      <Button variant="outlined" onClick={() => DeleteCart()} startIcon={<DeleteIcon />}>
      Borrar todo</Button>
      </div>
      <div className="cartform">
      <CartForm idOrder={idOrder} list={list} DeleteCart={DeleteCart} totalamount={totalamount}/>
      </div>
     
    </div>
  );
};

export default CartItems;
