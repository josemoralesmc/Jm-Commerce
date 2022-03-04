import React from 'react';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import './CartEmpty.css'
import { Button } from '@mui/material';
import { Box } from '@mui/system';

export default function CartEmpty() {
  return (
    <>

    <Alert className='ContentAlert Alert' severity="warning">EL CARRITO SE ENCUENTRA VACIO, AGREGUE PRODUCTOS!</Alert>
          <Link sx={{display: "flex", flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} to="/">
            <Box sx={{display: "flex", flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button variant="contained" >
            Ir a comprar
            </Button>
            </Box> 
          </Link>
    </>
  );
}
