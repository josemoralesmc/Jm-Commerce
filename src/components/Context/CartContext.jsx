import React, { useState, createContext, useContext } from "react"



const contextCart = createContext(null)


export function useContextCart() { return useContext(contextCart) }


function CartContext({children}) {

    const [list, setList] = useState([])

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
   
    console.log(list);

    return (
       <contextCart.Provider value={{

           list,
           setList,
           CartProduct,
           DeleteCart,
           deleteitem,
           amount,
           totalamount
        }
       }>
       
        {children}

       </contextCart.Provider>
      )
}


export default CartContext
