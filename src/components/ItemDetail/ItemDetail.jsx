import React from "react";
import ItemCount from "../ItemCount.js/ItemCount";

const ItemDetail = ({ product }) => {
  function onAdd(cant) {
    console.log(cant);
  }

  console.log(product);
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
