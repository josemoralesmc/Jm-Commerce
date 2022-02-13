import React from 'react'
import icon from '../../img/controller-1784573_640.png'

const styles = {
    car: {
        width: "5em",
        heigth: "3em"
    }
}

   
function Icon() 
{
    return ( 
        
        
        <img src={icon} alt="logo" style={styles.car} />
        
     );
}

export default Icon