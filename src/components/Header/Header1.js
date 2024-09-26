import React, { useContext, useState } from 'react';
import logo from '../../img/Convert to PNG project (9).png';
import './Header.css';
import { AppBar, Tooltip, Divider, Badge, Box, Menu, MenuItem, Fade, Button, Avatar, LinearProgress, Snackbar, SnackbarContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { Handshake, ShoppingCart } from '@mui/icons-material';
import { CartContext } from '../../App';
import { MenuList, SearchBox } from './Funtions';
import Drawer from '@mui/material/Drawer';
import { closeSnackbar, SnackbarProvider, useSnackbar } from 'notistack';

const handleHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
};

const Header1 = () => {
    const [cartCount] = useContext(CartContext);

    const [menu, setMenu] = useState(false);

    const handleMenuToggle = () => {
        setMenu(!menu);
    };

    const MenuDrawer = () => {
        return (
            <Box className='drawer'
                onClick={handleMenuToggle}
                sx={{
                    width: 300,
                    textIndent: 15,
                }}
            >
                <Box sx={{ display: 'flex', bgcolor: 'black', justifyContent: 'space-between' }}>
                    <Box className='logo'>
                        <Link to='/home'>
                            <Tooltip title='Home'>
                                <img onClick={handleHome} className='logo-img' src={logo} alt='logo' />
                            </Tooltip>
                        </Link>
                    </Box>
                    <Box sx={{ color: 'white', mr: 2, cursor: 'pointer', my: 'auto' }}><b>X</b></Box>
                </Box>
                <Divider sx={{ mb: 1 }} />
                <MenuList />
            </Box>
        )
    };



    const CartSnackbar = () => {
        const { enqueueSnackbar, closeSnackbar } = useSnackbar();       

        const handleCart = () => {
            if (cartCount === 0) {
                enqueueSnackbar('Cart is Empty', {variant: 'warning'});                
            }
        }     
        return (
            <ShoppingCart onClick={handleCart} sx={{ color: "#9b6827", fontSize: 30 }} />
        )
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };    


    return (
        <AppBar className='app-bar' sx={{ bgcolor: 'white' }}>
            <Box className='upper-header' sx={{ display: 'flex', mx: { xs: 3, lg: 0 }, justifyContent: { xs: 'space-between', lg: 'space-around' } }}>
                <Box className='menu-btn' sx={{ display: { xs: 'block', md: 'none' }, my: 'auto', cursor: 'pointer' }}>
                    <Tooltip title='Menu'>
                        <MenuIcon onClick={handleMenuToggle} sx={{ color: '#9b6827' }} />
                    </Tooltip>
                </Box>
                <Box className='logo' sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Link to='/home'>
                        <Tooltip title='Home'>
                            <img onClick={handleHome} className='logo-img' src={logo} alt='logo' />
                        </Tooltip>
                    </Link>
                </Box>
                <Box className='search'
                    sx={{
                        my: 'auto',
                        flexGrow: { md: 0.7 },
                        display: { xs: 'none', md: 'block' },
                    }}
                >
                    <SearchBox />
                </Box>
                <Box className='account' sx={{ my: 'auto', mb: 0.5, display: { xs: 'block', lg: 'block' } }}>
                    <Box
                        className='account-icon'
                        //id="basic-button"
                        //aria-controls={open ? 'basic-menu' : undefined}
                        //aria-haspopup="true"
                        //aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Tooltip title='Account'>
                            <Avatar sx={{ bgcolor: '#9b6827', width: 30, height: 30, cursor: 'pointer' }} />
                        </Tooltip>
                    </Box>
                    <Menu
                        disableAutoFocusItem
                        //id="basic-menu"
                        anchorEl={anchorEl}
                        elevation={10}
                        open={open}
                        onClose={handleClose}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    // MenuListProps={{
                    //     'aria-labelledby': 'basic-button',
                    // }}
                    >
                        <Box className='account-box'>
                            <Button onClick={handleClose}>Sign In</Button><br />
                            <Box sx={{ textAlign: 'center', color: '#9b6827' }}>New Member? <span role="img" aria-label="Snowman">
                                &#x21d3;</span></Box>
                            <Button onClick={handleClose}>Sign Up</Button>
                        </Box>
                    </Menu>
                    <Link onClick={handleClick}>Sign in</Link>
                </Box>
                <Box className='cart' sx={{ my: 'auto' }}>
                    <Link to={cartCount > 0 && '/checkout'}>
                        <Tooltip title='Cart Item'>
                            <Badge badgeContent={cartCount} color='warning'>
                                <SnackbarProvider
                                    autoHideDuration={3000}
                                    className='snack-bar'
                                    maxSnack={8}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    <CartSnackbar />
                                </SnackbarProvider>                                
                            </Badge>
                        </Tooltip>
                    </Link>
                </Box>
            </Box>
            <Divider sx={{ bgcolor: '#9b6827' }} />
            <Box className='lower-header' sx={{ px: 3, py: { xs: 1, md: 0 } }}>
                <Box className='search' sx={{ display: { xs: 'block', md: 'none' } }}>
                    <SearchBox />
                </Box>
                <Box className='menu' sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <MenuList />
                </Box>
            </Box>
            <Drawer
                className='drawer'
                variant='temporary'
                open={menu}
                onClose={handleMenuToggle}
                sx={{
                    display: { xs: 'block', lg: 'none' },
                }}



            >
                <MenuDrawer />
            </Drawer>
            <Divider sx={{ bgcolor: '#9b6827' }} />
        </AppBar>
    );
};
export default Header1;