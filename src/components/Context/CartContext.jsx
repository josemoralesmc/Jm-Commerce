import React, { useState, createContext, useContext } from "react"



const contextCart = createContext(null)


export function useContextCart() { return useContext(contextCart) }


function CartContext({children}) {
    const [id, setId] = useState('')
    const [list, setList] = useState([])
    const [open, setOpen] = useState(false);

    function CartProduct(product) {
        setList( [...list, product ] )
    }

    function DeleteCart() {
        setList([])
    }

    function totalamount() {
        return list.reduce((acum, prod) =>  acum= acum + (prod.item.price * prod.quantity)  ,0)
    }

    function amount() {
        return list.reduce((acum, prod) =>  acum += prod.quantity  ,0)
    }
   
    function deleteitem(id) {
        setList( list.filter( prod => prod.item.id !== id ) )
    }
  
    const handleClose = () => setOpen(false);

    function idOrder(id) {
        setId(id)
        setOpen(true);
      }

    return (
       <contextCart.Provider value={{

           list,
           id,
           open,
           setList,
           handleClose,
           CartProduct,
           DeleteCart,
           deleteitem,
           amount,
           idOrder,
           totalamount
        }
       }>
       
        {children}

       </contextCart.Provider>
      )
}


export default CartContext
