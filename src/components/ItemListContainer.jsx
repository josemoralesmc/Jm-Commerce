import { useEffect, useState } from "react"
import ItemCount from "./ItemCount.js/ItemCount"
import ItemList from "./ItemList"

function ItemListContainer() { 


    function onAdd(cant) {
        console.log(cant)
    }

    
    return (
        <div>
          <div className="d-flex justify-content-center">
            <ItemList />
          </div>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer
