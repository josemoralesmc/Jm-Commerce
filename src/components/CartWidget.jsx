import React from 'react'

import auto from '../img/auto2.jpg'

const styles = {
    car: {
        width: "9em",
        heigth: "7em"
    }
}


function Icon() 
{
    return ( 
        
        <img src={auto} alt="logo" style={styles.car} />
        
     );
}

export default Icon