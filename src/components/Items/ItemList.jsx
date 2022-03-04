import { Box } from "@mui/material";
import React from "react";
import Item from "./Item";
import { Loader } from 'rsuite';
import "./Item.css"
export default function ItemList({ products, loading }) {
  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItmes: "center" }}>
        <div id="loaderInverseWrapper" className="loader">
        <Loader content="Cargando..."/>
      </div>
        </Box>
      
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
