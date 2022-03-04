import React, { useState } from "react";
import { useContextCart } from "../Context/CartContext";
import CartEmpty from "../CartEmpty/CartEmpty";
import CartItems from "../CartItems/CartItems";
import MoldaForm from "../ModalForm/ModalForm";

const CartComponent = () => {
  const { list, DeleteCart, deleteitem, totalamount, idOrder, id, handleClose,open } = useContextCart();

  

  return (
    <>
      {id !== '' && <MoldaForm id={id} handleClose={handleClose} open={open}/>}
      {list.length === 0 ? (
        <CartEmpty/>
      ) : (
       <CartItems idOrder={idOrder} list={list} DeleteCart={DeleteCart} totalamount={totalamount} deleteitem={deleteitem}/>
      )}
    </>
  );
};

export default CartComponent;
