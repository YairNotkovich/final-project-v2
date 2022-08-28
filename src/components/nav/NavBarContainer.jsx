
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

const NavBarContainer = ({child}) => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor:'primary.contrastText'}}>
        <Container maxWidth="xl" >
        <Toolbar disableGutters >
        {child}
        </Toolbar>
        </Container>
    </AppBar>
  )
}

export default NavBarContainer