import React, { useState, createContext, useContext } from "react"



const contextCart = createContext(null)


export function useContextCart() { return useContext(contextCart) }


function CartContext({children}) {

    const [list, setList] = useState({})

    function CartProduct(product) {
        setList([...list, product ])
    }

    function DeleteCart() {
        setList([])
    }

    return (
       <contextCart.Provider value={
           list,
           CartProduct,
           DeleteCart
       }>
       
        {children}

       </contextCart.Provider>
      )
}


export default CartContext
