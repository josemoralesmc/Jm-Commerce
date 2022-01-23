import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from "react"
import { getFetch } from "../helpers/products"


export default function Item({id}) {

    const [productos, setProductos] = useState ([])
    const [loading, setloading] = useState(true)


    useEffect(() => {
      getFetch
      .then(res => setProductos(res))
      .catch(err => console.log(err))
      .finally(()=> setloading(false)) 
  }, [])

  return (
    <>
   {loading ? <div class="d-flex justify-content-center">
   <div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div> : productos.map( productos => 
<Card key={productos.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={productos.foto} />
    <Card.Body>
      <Card.Title>{productos.name}</Card.Title>
      <Button variant="primary">{productos.price}</Button>
    </Card.Body>
  </Card>
   )}

    
    </>
  );
}
