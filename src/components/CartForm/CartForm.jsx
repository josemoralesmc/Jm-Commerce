import React from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Timestamp } from "@firebase/firestore";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import "./CartForm.css";
import { useEffect } from "react";

const CartForm = ({ list, DeleteCart, totalamount, idOrder }) => {
  const [disabled, setDisabled] = useState(true)
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });
  let noteDate = Timestamp.fromDate(new Date());

  useEffect(() => {
    form.emailRepeat === form.email ?  setDisabled(false) :  setDisabled(true);
  }, [form])


  const Orderpurchase = async (e) => {

    
    let order = {};
    
    order.buyer = form;
    
    order.total = totalamount();
    order.state = "generada";
    order.date = noteDate;
    order.items = list.map((list) => {
      let id = list.item.id;
      let name = list.item.name;
      let price = list.item.price;
      let quantity = list.quantity;
      return {
        id,
        name,
        price,
        quantity,
      };
    });
    const db = getFirestore();
    const ordersColecction = collection(db, "orders");
    await addDoc(ordersColecction, order)
      .then((res) => idOrder(res.id))
      .finally(DeleteCart());
  };

  function handleChange(formData) {
    setForm({
      ...form,
      [formData.target.name]: formData.target.value,  
    })
   
  }




  return (
      <div className="form">
        <form>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Nombre</InputLabel>
            <Input required id="component-simple" name="name" onChange={handleChange} />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Apellido</InputLabel>
            <Input required id="component-simple" name="lastname" onChange={handleChange} />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Telefono</InputLabel>
            <Input required id="component-simple" name="phone" type="number" onChange={handleChange} />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Email</InputLabel>
            <Input required id="component-simple" name="email" type="email"  onChange={handleChange} />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Email</InputLabel>
            <Input required id="component-simple" name="emailRepeat" type="email"  onChange={handleChange} />
          </FormControl>

          <Button variant="contained"  onClick={() => Orderpurchase()} disabled={disabled} >Ordenar compra</Button>
        </form>
      </div>
  );
};

export default CartForm;
