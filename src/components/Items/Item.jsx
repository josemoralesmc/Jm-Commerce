import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"



export default function Item({products}) {


  return (
    <>    
    <Card  style={{margin: "2rem"}}>
     <Card.Img variant="top" style={{width: "18rem", height: "17rem"}} src={products.image} />
     <Card.Body style={{width: "18rem"}}>
       <Card.Title>{products.name}</Card.Title>
       <h3>${products.price}</h3>
      <Link to={`/item/${products.id}`}>
       <Button variant="primary">Ver Mas</Button>
       </Link>
     </Card.Body>
   </Card>
    </>
  );
}
