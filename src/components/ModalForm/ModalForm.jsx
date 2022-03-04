import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';




const MoldaForm = ({ handleClose, open, id}) => {
    
  return (
    <>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <Box className="Form">
    <Typography id="modal-modal-title" variant="h6" component="h2">
    GRACIAS POR SU COMPRA!
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    SU ID DE COMPRA ES: {id}
    </Typography>
    <Button onClick={handleClose}>ACEPTAR</Button>
    </Box>
    </Modal>
    </>
  )
}

export default MoldaForm
