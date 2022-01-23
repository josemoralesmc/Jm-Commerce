import { useState } from "react";
import './ItemCount.css'

function ItemCount({initial, stock, onAdd}) {
  const [contador, setcontador] = useState(initial);

  const handleAumentar=()=>{
    if (contador < stock) {
      setcontador(contador + 1)
    }
  }
  
  const handlerRestar=()=>{    
    if (contador > initial) {
      setcontador(contador - 1)
    }
  }

  const agregar=()=>{
    onAdd(contador)
  }

  return (
      <div className="ctn">
        <button className="btn btn-outline-primary button"  onClick={handleAumentar}> + </button>
        { contador }
        <button className="btn btn-outline-primary" onClick={handlerRestar}> - </button><br/>
        <button className="btn btn-outline-primary btn-block buttonRest" onClick={agregar} >Agregar al carrito</button>
      </div>
  )
}

export default ItemCount;
