import { useContextCart } from "../Context/CartContext";
import React from "react";
import Icon from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../Navbar/NavBar.css";

export default function Menu() {
  const { amount } = useContextCart();
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar className="Appbar" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <NavLink to="/">
              <Icon />
            </NavLink>
          </IconButton>
          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            <Link className="ItemNav" to="/category/PcEscritorio">
              PC DE ESCRITORIO
            </Link>
            <Link className="ItemNav" to="/category/Notebook">
              NOTEBOOKS
            </Link>
            <Link className="ItemNav" to="/category/Monitor">
              MONITORES
            </Link>
            <Link className="ItemNav" to="/category/PlacadeVideo">
              PLACAS DE VIDEO
            </Link>
          </Typography>
          <Link className="CartColor Cart" to="/cart">
            {amount() !== 0 && amount()}
            <ShoppingCartIcon className="IconCart CartColor"/>
            MI CARRITO
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
