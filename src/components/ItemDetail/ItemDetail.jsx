import React from "react";
import Navbar from 'react-bootstrap/Navbar'

const ItemDetail = ({ product }) => {
  console.log(product);
  return (
    <div>
      <div className="d-flex justify-content-center">
          <img src={product.foto} alt="" />
        <div>
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
        </div>
      </div>
      <p  style={{width:"25em", textAlign:"center", margin:"auto"}}>{product.detail}</p>
    </div>  
  );
};

export default ItemDetail;
