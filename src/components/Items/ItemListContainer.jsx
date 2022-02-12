import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom"

function ItemListContainer() { 


  const [products, setProducts] = useState ([])
  const [loading, setloading] = useState(true)

  let { category } = useParams();


 

  useEffect(() => {
    if(category){
      const db = getFirestore();
      const querycollection = collection(db, 'products')
      const queryfilter = query(querycollection,
        where('category', '==', category ))
      getDocs(queryfilter)
      .then( res => setProducts(res.docs.map(item => ({id: item.id, ...item.data()}))))
      .catch(err => console.log(err))
      .finally(() => setloading(false))

    }else{
      
      const db = getFirestore()
      const querycollection = collection(db ,'products')
      getDocs(querycollection)
      .then(res => setProducts(res.docs.map(item => ({ id: item.id, ...item.data() })  )))
      .catch(err => console.log(err))
      .finally(() => setloading(false))
    }


    /* .then(res => setProductos(category ? res.filter( item => item.categoria === category) : 
    res))
    .catch(err => console.log(err))
    .finally(()=> setloading(false))  */
}, [category])


    
    return (
          <div className="d-flex justify-content-center">
            <ItemList products={products} loading={loading} />
          </div>
    )
}

export default ItemListContainer
