import { Box } from "@mui/material";
import React from "react";
import Item from "./Item";

export default function ItemList({ products, loading }) {
  return (
    <>
      {loading ? (
        <Box sx={{ display: 'flex' }}>
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
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
