import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

   const {idProducto} = useParams()

   
   useEffect(() => {
  const db = getFirestore()
  const item = doc(db, 'products', idProducto)
    getDoc(item)
    .then((res) => {
      setProduct({id: res.id, ...res.data()})
    });
      
  
  // .then((data) => {
        // setProduct(data.find(item => item.id === idProducto)) 
        
    //});

}, []);

  return (
    <div>
    <ItemDetail product={product}/>
    </div>
  );
}


export default ItemDetailContainer; 