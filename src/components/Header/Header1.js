import React, { useContext } from 'react';
import logo from '../../img/an-nahl2.png';
import './Header.css';
import { AppBar, Toolbar, Tooltip, Divider, Badge, IconButton, Box, InputBase, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { CartContext } from '../../App';

const SearchBox = () => {
    return(
        <Paper
            component='form'
            sx={{
                display: 'flex',
                border: 1,
                borderColor: '#dd8404',
                borderRadius: 2,
                height: 0.1,
            }}
        >
            <InputBase
                placeholder='Search Here...'
                sx={{
                    px: 2,
                    width: '100%',
                    borderRight: 1,
                    borderColor: '#dd8404',
                }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
)}

const Header1 = () => {

    const handleHome =()=> {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    const [cartCount] = useContext(CartContext);

    
    return (
        <AppBar
            className='app-bar'
            //component={'nav'}
            sx={{
                bgcolor: 'black',
                //py: -1,
                //mx: 1,
            }}
        >
            <Toolbar disableGutters className='tool-bar'
            sx={{
                mx: 2,
            }}
            >
                <Box
                    className='menu-btn'
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        //border: 1,
                        //borderColor: '#dd8404'
                    }}
                >
                    <IconButton color='inherit'>
                        <Tooltip title='Menu'>
                            <MenuIcon
                                sx={{
                                    //cursor: 'pointer',
                                    color: '#dd8404',
                                    '&:hover': {
                                        color: 'white'
                                    }
                                }}
                            />
                        </Tooltip>
                    </IconButton>
                </Box>
                <Box
                    className='logo'
                    sx={{
                        flexGrow: { xs: 1, md: 0.04 },
                        //border: 1,
                        //borderColor: '#dd8404',
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <IconButton
                    onClick={handleHome}
                    >
                        <Link to='/home'>
                            <Tooltip title='Home'><img className='logo-img' src={logo} alt='logo' /></Tooltip>
                        </Link>
                    </IconButton>
                </Box>
                <Box
                    className = 'search-account-cart'
                    sx={{
                        flexGrow: { xs: 0, md: 1 },
                        display: 'flex',
                        //border: 1,
                        //borderColor: '#dd8404',
                        justifyContent: { xs: 'flex-end', md: 'space-between' },
                    }}
                >
                    <Box
                        className = 'search'
                        sx={{
                            flexGrow: { md: 0.9 },
                            display: { xs: 'none', md: 'block' },
                            //border: 1,
                            //borderColor: '#dd8404',
                            //borderRadius: 2,
                            //width: '10rem'
                            height: 0.1,
                        }}
                    >
                        <SearchBox/>
                    </Box>
                    <Box
                        className = 'account'
                        sx={{
                            //flexGrow: 0.1,
                            //border: 1,
                            //borderColor: '#dd8404',
                            //textAlign: 'center',
                        }}
                    >
                        <IconButton color='inherit'>
                            <Tooltip title='Account'>
                                <AccountCircleIcon
                                    sx={{
                                        color: '#dd8404',
                                        size: 'large',
                                        fontSize: 30,
                                        '&:hover': {
                                            color: 'white'
                                        }
                                    }}
                                />
                            </Tooltip>
                        </IconButton>
                    </Box>
                    <Box
                        className = 'cart'
                        sx={{
                            //border: 1,
                            //borderColor: '#dd8404',
                        }}
                    >
                        <Link to='/checkout'>
                        <IconButton color="inherit">
                            <Tooltip title='Cart Item'>
                                <Badge
                                    badgeContent={cartCount}
                                    color='error'
                                    sx={{
                                        '&.Mui-error': {
                                            color: 'black',
                                        }
                                    }}
                                >
                                    <ShoppingCart
                                        sx={{
                                            color: "#dd8404",
                                            fontSize: 30,
                                            '&:hover': {
                                                color: 'white'
                                            }
                                        }}
                                    />
                                </Badge>
                            </Tooltip>
                        </IconButton>
                        </Link>
                    </Box>
                </Box>
            </Toolbar>
            <Divider
                sx={{
                    //display: {xs: 'block', md: 'none'},
                    opacity: 1,
                    bgcolor: '#dd8404',
                }}
            />
            <Box
                className = 'lower-header'
                sx={{
                    //height: 0,
                    mx: 3,
                    py: {xs: 1, md: 0},
                    //border: 1,
                    //borderColor: '#dd8404',
                    //borderRadius: 2,
                    //display: {xs: 'block', md: 'none'},
                }}
            >
                <Box
                    className = 'search'
                    sx={{
                        flexGrow: 1,
                        display: { xs: 'block', md: 'none' },
                        //border: 1,
                        //borderColor: '#dd8404',
                        //borderRadius: 2,
                        //width: '10rem'
                    }}
                >
                    <SearchBox/>
                </Box>
                <Box
                className = 'menu'
                sx={{
                    display: {xs: 'none', md: 'flex'},
                }}
                >
                    <IconButton                    
                    onClick={handleHome}
                    >
                        <Link to='/home'><Tooltip title= 'Home'><HomeIcon sx={{color: '#dd8404', '&:hover':{color:'white'}}}/></Tooltip></Link>                        
                    </IconButton>
                    <Divider orientation='vertical' flexItem sx={{bgcolor: '#dd8404'}}/>
                    <IconButton><Link>WITH SINGLE FRAME</Link></IconButton>
                    <Divider orientation='vertical' flexItem sx={{bgcolor: '#dd8404'}}/>
                    <IconButton><Link>WITH DOUBLE FRAME</Link></IconButton>
                    <Divider orientation='vertical' flexItem sx={{bgcolor: '#dd8404'}}/>
                    <IconButton><Link>WITHOUT FRAME</Link></IconButton>
                    <Divider orientation='vertical' flexItem sx={{bgcolor: '#dd8404'}}/>
                    <IconButton><Link>QURAN QUOTES</Link></IconButton>
                    <Divider orientation='vertical' flexItem sx={{bgcolor: '#dd8404'}}/>
                    <IconButton><Link>HADITH QUOTES</Link></IconButton>
                    <Divider orientation='vertical' flexItem sx={{bgcolor: '#dd8404'}}/>
                    <IconButton><Link>JIKR</Link></IconButton>
                    <Divider orientation='vertical' flexItem sx={{bgcolor: '#dd8404'}}/>
                    <IconButton><Link>ARABIC PROVERS</Link></IconButton>
                    <Divider orientation='vertical' flexItem sx={{bgcolor: '#dd8404'}}/>
                    {/* <IconButton><Link>Products</Link></IconButton> */}
                </Box>
            </Box>                        
        </AppBar>
    );
};

export default Header1;