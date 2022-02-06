import { useState } from "react";
import { Link } from "react-router-dom";
import './ItemCount.css'

function ItemCount({initial, stock, onAdd}) {
  const [contador, setcontador] = useState(initial);
  const [button, setButton] = useState("button")

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

  const agregar = () =>{
    onAdd(contador)
    setButton("ButtonGocCart")
  }

  return (
    <>
    { button === "button" ? <div className="ctn">
    <button className="btn btn-outline-primary button"  onClick={handleAumentar}> + </button>
    { contador }
    <button className="btn btn-outline-primary" onClick={handlerRestar}> - </button><br/>
    <button className="btn btn-outline-primary btn-block buttonRest" onClick={agregar} >Agregar al carrito</button>
    </div> 
    :  <Link to="/cart"> <button className="btn btn-outline-primary btn-block buttonRest ctn"  >Finalizar compra</button> </Link>}
    
    
    </>
    )
}

export default ItemCount;
