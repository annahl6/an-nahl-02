import * as React from 'react';
import './Header.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
//import Container from '@mui/material/Container';
//import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
//import AdbIcon from '@mui/icons-material/Adb';
import { AppBar } from '@mui/material';
import logo from '../../img/an-nahl2.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function ResponsiveAppBar() {
  const pages = ['Products', 'Pricing', 'Blog'];
  const settings = ['Login', 'Sign Up'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (    
    <AppBar sx={{ 
      px: { xs: 1, md: 4},
      bgcolor: 'green'
      }}>        
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            //variant="h6"
            //noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },                            
            }}
          >
          <img src={logo} alt='logo' width= '120' height= '60'/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              //id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              //keepMounted
              aria-haspopup="true"
              transformOrigin={{                
                vertical: 'bottom',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                my: -2,
                mx: -2,
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                key={page} 
                onClick={handleCloseNavMenu}
                sx={{                    
                  px: 4,
                  display: 'block',
                  borderBottom: 1,
                  borderColor: '#dd8404',
                }}
                >
                  <Typography 
                  sx={{                    
                    textAlign: 'left',
                    my: 0.5
                  }}                  
                  >
                  {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            //variant="h5"
            //noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: 'flex', md: 'none'},
              flexGrow: 1,              
            }}
          >
          <img src={logo} alt='logo' width= '120' height= '60'/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  px: 4, 
                  my: 2, 
                  mx: 0.5, 
                  color: 'white', 
                  display: 'block', 
                  border: 1, 
                  borderColor: '#dd8404',
                  boxShadow: 10,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
              {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>              
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton> */}
              <AccountCircleIcon 
              src="/static/images/avatar/2.jpg" 
              onClick={handleOpenUserMenu} 
              sx={{ 
                p: 1, 
                fontSize: 40, 
                color: '#dd8404', 
                cursor: 'pointer',                 
                //'&:hover':{}
                }}
              />
            </Tooltip>
            <Menu
              sx={{ 
                mt: {xs: '46px', md: '60px'},
                m: -4,                
                //display: { xs: 'none', md: 'flex' },
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem 
                key={setting} 
                onClick={handleCloseUserMenu} 
                sx={{
                  px: 4,
                  py: 2,
                  display: 'block',
                  borderBottom: 1,
                  borderColor: '#dd8404',                  
                }}                
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem className='menuItem'
                //onClick={handleCloseUserMenu}
                sx={{
                  px: 15,
                  my: 1, 
                  //py: 0, 
                  mx: 2,
                  color: 'black',
                  fontWeight: 'bold',
                  //borderBottom: 1, 
                  bgcolor: '#dd8404',  
                  borderRadius: 1,
                  boxShadow: 6,                
                  '&:hover': {
                    bgcolor: '#dd8404',
                    color: 'white',
                  }
                }}       
                //key={setting}                                
                >
                {settings[0]}                 
              </MenuItem>              
              <MenuItem
                //onClick={handleCloseUserMenu}
                sx={{
                  px: 15, 
                  //py: 0, 
                  mx: 2,
                  my: 1,
                  color: 'white',
                  fontWeight: 'bold',
                  //borderBottom: 1, 
                  bgcolor: 'black',
                  borderRadius: 1,                 
                  '&:hover': {
                    bgcolor: 'black',
                  }
                }}       
                //key={setting}                                
                >                 
                {settings[1]}                  
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
    </AppBar>  
  );
}
export default ResponsiveAppBar;