import React from 'react';
import Item from './Item';


export default function ItemList({ productos, loading}) {


  return (
    <>
    {loading ? <div className="d-flex justify-content-center">
    <div className="spinner-grow" role="status">
   <span className="visually-hidden">Loading...</span>
 </div></div> : productos.map( productos => 
  <Item key={productos.id} productos={productos} style={{ width: '18rem' }}/>)}
    </>
  );
}
