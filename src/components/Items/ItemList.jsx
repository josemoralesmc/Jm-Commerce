import React from "react";
import Item from "./Item";

export default function ItemList({ products, loading }) {
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        products.map((products) => (
          <Item
            key={products.id}
            products={products}
            style={{ width: "18rem" }}
          />
        ))
      )}
    </>
  );
}
