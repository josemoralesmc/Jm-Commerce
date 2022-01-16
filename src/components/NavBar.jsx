import React from 'react';
import CartWidget from './CartWidget';
import { BsCart2 } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const styles = {
  Cart: {
    width: "1em",
    marginTop: 10
  }
}



function Menu() {
  return (
    
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home"><CartWidget/></Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="#HYUNDAI">HYUNDAI</Nav.Link>
    <Nav.Link href="#KIA">KIA</Nav.Link>
    <Nav.Link href="#FORD">FORD</Nav.Link>
    <Nav.Link href="#PEUGEOT">PEUGEOT</Nav.Link>
    <Nav.Link href="#FIAT">FIAT</Nav.Link>

    </Nav>
    <Nav>
    <BsCart2 style={styles.Cart}/>
    <Nav.Link href="#CARRO">MI CARRITO</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
    
  );
}

export default Menu;
