import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { getFetch } from "../../helpers/products"
import { useParams } from "react-router-dom"

function ItemListContainer() { 


  const [productos, setProductos] = useState ([])
  const [loading, setloading] = useState(true)

  let { category } = useParams();


 

  useEffect(() => {
    getFetch
    .then(res => setProductos(category ? res.filter( item => item.categoria === category) : 
    res))
    .catch(err => console.log(err))
    .finally(()=> setloading(false)) 
}, [category])


    
    return (
          <div className="d-flex justify-content-center">
            <ItemList productos={productos} loading={loading} />
          </div>
    )
}

export default ItemListContainer
