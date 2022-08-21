
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

const NavBarContainer = ({children}) => {
  return (
    <AppBar position="static"sx={{ backgroundColor: 'common.white', }}>
        <Container maxWidth="xl" >
        <Toolbar disableGutters >
        {children}
        </Toolbar>
        </Container>
    </AppBar>
  )
}

export default NavBarContainer