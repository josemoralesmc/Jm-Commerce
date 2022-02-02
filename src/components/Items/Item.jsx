import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"



export default function Item({productos}) {


  return (
    <>    
    <Card>
     <Card.Img variant="top" src={productos.foto} />
     <Card.Body>
       <Card.Title>{productos.name}</Card.Title>
      <Link to={`/item/${productos.id}`}>
       <Button variant="primary">{productos.price}</Button>
       </Link>
     </Card.Body>
   </Card>
    </>
  );
}
