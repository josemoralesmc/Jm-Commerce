import React, {useState, useEffect} from 'react';
import { getFetch } from '../../helpers/products';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const productId = "2";
    
useEffect(() => {
    getFetch.then((data) => {
        setProduct(data.find(item => item.id === productId))
        
    });

}, []);

  return (
    <div>
    <ItemDetail product={product}/>
    </div>
  );
}


export default ItemDetailContainer; 