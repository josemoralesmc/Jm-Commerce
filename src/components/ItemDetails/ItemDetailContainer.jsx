import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { Loader } from 'rsuite';
import { Box } from "@mui/material";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    

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
    .finally(setLoading(false))
  } catch (error) {
    console.log(error)
  }
   
      
  
 
}, []);

  return (
    <>
    { loading ? ( <Box sx={{ display: "flex", justifyContent: "center", alignItmes: "center" }}>
    <div id="loaderInverseWrapper" className="loader">
    <Loader content="Cargando..."/>
    </div>
    </Box> ): ( <div>
      <ItemDetail product={product}/>
      </div> )}
      
      </>
  );
}


export default ItemDetailContainer; 