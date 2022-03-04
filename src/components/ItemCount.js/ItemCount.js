import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./ItemCount.css";

function ItemCount({ initial, stock, onAdd }) {
  const [contador, setcontador] = useState(initial);
  const [button, setButton] = useState("button");

  const handleAumentar = () => {
    if (contador < stock) {
      setcontador(contador + 1);
    }
  };

  const handlerRestar = () => {
    if (contador > initial) {
      setcontador(contador - 1);
    }
  };

  const agregar = () => {
    onAdd(contador);
    setButton("ButtonGocCart");
  };

  return (
    <>
      {button === "button" ? (
        <div className="ctn">
          <Button
            variant="contained"
            className="btn btn-outline-primary button"
            onClick={handleAumentar}
          >
            {" "}
            +{" "}
          </Button>
          {contador}
          <Button
            variant="contained"
            className="btn btn-outline-primary"
            onClick={handlerRestar}
          >
            
          </Button>
          <br />
          <Button
            variant="contained"
            className="btn btn-outline-primary btn-block buttonRest"
            onClick={agregar}
          >
            Agregar al carrito
          </Button>
        </div>
      ) : (
        <Link to="/cart">
          
          <Button
          style={{marginLeft: "45%",
            marginTop: "20%"}}
            className="ctn"
            variant="contained"
          >
            Finalizar compra
          </Button>
        </Link>
      )}
    </>
  );
}

export default ItemCount;
