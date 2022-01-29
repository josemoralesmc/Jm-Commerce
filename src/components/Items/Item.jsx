import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



export default function Item({productos}) {


  return (
    <>    
    <Card>
     <Card.Img variant="top" src={productos.foto} />
     <Card.Body>
       <Card.Title>{productos.name}</Card.Title>
       <Button variant="primary">{productos.price}</Button>
     </Card.Body>
   </Card>
    </>
  );
}
