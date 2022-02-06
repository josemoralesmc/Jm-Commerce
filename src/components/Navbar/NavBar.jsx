import React from "react";
import { BsCart2 } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Icon from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom"

const styles = {
  Cart: {
    width: "1em",
  },
};

function Menu() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <NavLink to="/">
          <Icon />
        </NavLink>
        <Nav className="me-auto">
          <Link style={{padding:"10px"}} to="/categoria/Hyundai">HYUNDAI</Link>
          <Link style={{padding:"10px"}} to="/categoria/Kia">KIA</Link>
          <Link style={{padding:"10px"}} to="/categoria/Ford">FORD</Link>
          <Link style={{padding:"10px"}} to="/categoria/Peugeot">PEUGEOT</Link>
        </Nav>
        <Nav>
          <BsCart2 style={styles.Cart} />
          <Link  to="/cart">MI CARRITO</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
