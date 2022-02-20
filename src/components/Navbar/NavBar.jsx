import { useContextCart } from "../Context/CartContext";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Icon from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom"
import '../Navbar/NavBar.css'




function Menu() {
  const {amount} = useContextCart();
  return (
    <Navbar className="Nav" bg="light" variant="light">
      <Container>
        <NavLink to="/">
          <Icon />
        </NavLink>
        <Nav className="me-auto">
          <Link className="ItemNav" to="/category/PcEscritorio">PC DE ESCRITORIO</Link>
          <Link className="ItemNav" to="/category/Notebook">NOTEBOOKS</Link>
          <Link className="ItemNav" to="/category/Monitor">MONITORES</Link>
          <Link className="ItemNav" to="/category/PlacadeVideo">PLACAS DE VIDEO</Link>
        </Nav>
        <Nav>
        <Link className="Cart" to="/cart">
          
        {amount() !== 0 && amount()}
        <BsCart2 className="IconCart" />
          MI CARRITO</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
