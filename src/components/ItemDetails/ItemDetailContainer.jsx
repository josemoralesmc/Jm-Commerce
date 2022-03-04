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
  try {
     getDoc(item)
    .then((res) => {
      if (!res.data()) {
       return alert(`El producto con id: ${idProducto} no existe`)
      }
      setProduct({id: res.id, ...res.data()});
    })
  } catch (error) {
    console.log(error)
  }
   
      
  
 
}, []);

  return (
    <div>
    <ItemDetail product={product}/>
    </div>
  );
}


export default ItemDetailContainer; 