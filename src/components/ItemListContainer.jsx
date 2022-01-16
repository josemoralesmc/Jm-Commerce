import React from 'react'


const style = {
    h1: {
        textAlign: "center",
        verticalAlign: "center"
    }
}

const ItemListContainer = ( {greetings} ) => {
  return (
    <div >
     <h1 style={style.h1}>{ greetings}</h1> 
    </div>
  )
}

export default ItemListContainer
