import { useEffect, useState } from "react"
import ItemCount from "./ItemCount.js/ItemCount"

function ItemListContainer() { 

    function onAdd(cant) {
        console.log(cant)
    }

    
    return (
        <div>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer
