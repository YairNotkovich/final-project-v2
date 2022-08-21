import * as React from 'react';
import List from '@mui/material/List';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';




const PopUpDialog = ({children,title, onClose, selectedValue, open}) => {

  const handleClose = () => {
    onClose(selectedValue);
  };



  return (
    <Dialog onClose={handleClose} open={open}>
    <DialogTitle>{title}</DialogTitle>
    <List sx={{ pt: 0 }}>
    {children}
   
    </List>
  </Dialog>
  )
}

export default PopUpDialog

