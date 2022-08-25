import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Outlet, Link, useNavigate } from 'react-router-dom'
import Typography from "@mui/material/Typography";
import NavContainer from '../components/nav/NavBarContainer';
// import AdbIcon from '@mui/icons-material/Adb';
import Logo from '../components/logo/Logo';
import AvatarMenu from '../components/nav/AvatarMenu';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../context/user/userSlice';
import { showPopUp, selectAuth,LoginAsync } from '../context/auth/authSlice';
import SignInPopUp from '../components/sign in popup/SigninPopup';
import { getAvatarAndRole } from '../context/user/userSlice';
import { NavLink } from 'react-router-dom';


const anonPages = [
  { name: 'Far away', to: '/', icon: '' },
  { name: 'Places', to: '/Places', icon: '' },
  { name: 'Find a flight', to: '/flights', icon: '' },
  // { name: 'About', to: 'test', icon: '' }
];

const customerPages = [
  ...anonPages,
  { name: 'Account', to: '/account', icon: '' },
  //noah.smith@example.com
];

const airlinePages = [
  ...anonPages,
  { name: 'Account', to: '/account', icon: '' },
];

const adminPages = [
  ...anonPages,
  { name: 'Admin', to: '/admin', icon: '' },
];

const EscAppBar = () => {

  const dispatch = useDispatch()

  const { avatar, role, username } = useSelector(selectUser)
  const { PopupState, authenticated ,signInRedirect} = useSelector(selectAuth)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [pages, setPages] = React.useState([])
  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const defPages = () => {
    if (role === 0) {
      return anonPages
    }
    if (role === 2) {
      return customerPages
    }
    if (role === 3) {
      return airlinePages
    }
    if (role === 1) {
      return adminPages
    }
  }

  React.useEffect(() => {
    dispatch(getAvatarAndRole());
  }, [authenticated])

  React.useEffect(() => {
    setPages(defPages())
  } // eslint-disable-next-line
    , [role])

    React.useEffect(()=>{
      console.log(signInRedirect)
      if(signInRedirect){
          dispatch(LoginAsync())}
  },[PopupState])

  return (
    <>
      <NavContainer  >
        <Link to="/">
          <Logo />
        </Link>

        {/* small or mobile - hamburger */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          {/*hamburger */}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="primary"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem 
                key={page.name} onClick={() => { navigate(page.to); handleCloseNavMenu() }} >

                <Typography color='primary' textAlign="center">{page.name}</Typography>

              </MenuItem>

            ))}
          </Menu>
        </Box>

        {/* full size */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button sx={{ color: 'primary' }}

              key={page.name}
              onClick={() => { navigate(page.to); handleCloseNavMenu() }}
            // sx={{ my: 2, color: 'primary', display: 'block' }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
        {/* Avatar + profile menu */}

        <Box sx={{ flexGrow: 0 }}>

          {authenticated ?
            (<Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={username.toUpperCase()} src={avatar} />
              </IconButton>
            </Tooltip>) :

            <Button sx={{ my: 2, color: 'primary', display: 'block' }} onClick={() => dispatch(showPopUp())}>Sign In</Button>}

          <AvatarMenu
            anchorElUser={anchorElUser}
            handleCloseUserMenu={handleCloseUserMenu}
          />
        </Box>

      </NavContainer >
      {PopupState && <SignInPopUp />}
      <Outlet />
    </>
  );
};
export default EscAppBar;
