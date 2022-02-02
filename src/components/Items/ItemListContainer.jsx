import { useEffect, useState } from "react"
import ItemCount from "../ItemCount.js/ItemCount"
import ItemList from "./ItemList"
import { getFetch } from "../../helpers/products"
import { useParams } from "react-router-dom"

function ItemListContainer() { 


  const [productos, setProductos] = useState ([])
  const [loading, setloading] = useState(true)

  let { category } = useParams();

  console.log(category);


  useEffect(() => {
    getFetch
    .then(res => setProductos(category ? res.filter( item => item.categoria === category) : 
    res))
    .catch(err => console.log(err))
    .finally(()=> setloading(false)) 
}, [category])

    function onAdd(cant) {
        console.log(cant)
    }

    
    return (
        <div>
          <div className="d-flex justify-content-center">
            <ItemList productos={productos} loading={loading} />
          </div>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer
