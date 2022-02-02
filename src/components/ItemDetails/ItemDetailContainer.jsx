import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/products';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

   const {idProducto} = useParams()
    
useEffect(() => {
    getFetch
        .then((data) => {
        setProduct(data.find(item => item.id === idProducto))
        
    });

}, []);

  return (
    <div>
    <ItemDetail product={product}/>
    </div>
  );
}


export default ItemDetailContainer; 