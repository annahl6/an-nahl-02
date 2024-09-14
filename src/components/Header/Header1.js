import React, { useContext } from 'react';
import logo from '../../img/Convert to PNG project (9).png';
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
    return (
        <Paper
            component='form'
            sx={{
                display: 'flex',
                border: 1,
                borderColor: '#9b6827',
                borderRadius: 2,
                height: 0.1,
                boxShadow: 5,
            }}
        >
            <InputBase
                placeholder='Search Here...'
                sx={{
                    px: 2,
                    width: '100%',
                    borderRight: 1,
                    borderColor: '#9b6827',
                }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

const Header1 = () => {

    const handleHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const [cartCount] = useContext(CartContext);


    return (
        <AppBar className='app-bar' sx={{ bgcolor: 'white', boxShadow: 0 }}>
            <Toolbar disableGutters className='tool-bar'
                sx={{
                    mx: { xs: 2, lg: 3 },
                }}
            >
                <Box
                    className='menu-btn'
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        //border: 1,
                        //borderColor: '#9b6827'
                    }}
                >
                    <IconButton color='inherit'
                        sx={{
                            '&:hover': {
                                color: 'white'
                            }
                        }}
                    >
                        <Tooltip title='Menu'>
                            <MenuIcon
                                sx={{
                                    //cursor: 'pointer',
                                    color: '#9b6827',
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
                        //borderColor: '#9b6827',
                        textAlign: { xs: 'center', md: 'left' },
                    }}
                >
                    <IconButton
                        onClick={handleHome}
                        sx={{
                            '&:hover': {
                                bgcolor: 'white'
                            }
                        }}
                    >
                        <Link to='/home'>
                            <Tooltip title='Home'><img className='logo-img' src={logo} alt='logo' /></Tooltip>
                        </Link>
                    </IconButton>
                </Box>
                <Box
                    className='search-account-cart'
                    sx={{
                        flexGrow: { xs: 0, md: 1 },
                        display: 'flex',
                        //border: 1,
                        //borderColor: '#9b6827',
                        justifyContent: { xs: 'flex-end', md: 'space-between' },
                    }}
                >
                    <Box
                        className='search'
                        sx={{
                            flexGrow: { md: 0.9 },
                            display: { xs: 'none', md: 'block' },
                            height: 0.1,
                        }}
                    >
                        <SearchBox />
                    </Box>
                    <Box
                        className='account'
                        sx={{
                            '&:hover': {
                                color: 'white'
                            }
                        }}
                    >
                        <IconButton
                            sx={{
                                '&:hover': {
                                    bgcolor: 'white'
                                }
                            }}
                        >
                            <Tooltip title='Account'>
                                <AccountCircleIcon
                                    sx={{
                                        color: '#9b6827',
                                        size: 'large',
                                        fontSize: 30,
                                    }}
                                />
                            </Tooltip>
                        </IconButton>
                    </Box>
                    <Box
                        className='cart'
                        sx={{
                            //border: 1,
                            //borderColor: '#9b6827',
                        }}
                    >
                        <Link to='/checkout'>
                            <IconButton
                                sx={{
                                    //boxShadow: 5,
                                    '&:hover': {
                                        bgcolor: 'white'
                                    }
                                }}
                            >
                                <Tooltip title='Cart Item'>
                                    <Badge
                                        badgeContent={cartCount}
                                        color='warning'
                                        sx={{
                                            //bgcolor: 'black',
                                            color: 'red',
                                            fontSize: 20,
                                        }}
                                    >
                                        <ShoppingCart
                                            sx={{
                                                color: "#9b6827",
                                                fontSize: 30,
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
                    bgcolor: '#9b6827',
                }}
            />
            <Box
                className='lower-header'
                sx={{
                    px: 3,
                    py: { xs: 1, md: 0 },
                    bgcolor: 'white',
                }}
            >
                <Box
                    className='search'
                    sx={{
                        flexGrow: 1,
                        display: { xs: 'block', md: 'none' },
                        //border: 1,
                        //borderColor: '#9b6827',
                        //borderRadius: 2,
                        //width: '10rem'
                    }}
                >
                    <SearchBox />
                </Box>
                <Box
                    className='menu'
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        //boxShadow: 5,                        
                    }}
                >
                    <IconButton disableRipple
                        onClick={handleHome}
                    >
                        <Link to='/home'><Tooltip title='Home'><HomeIcon sx={{ color: '#9b6827', '&:hover': { color: '#9b6827' } }} /></Tooltip></Link>
                    </IconButton>
                    <Divider orientation='vertical' flexItem sx={{ bgcolor: '#9b6827' }} />
                    <IconButton disableRipple><Link>WITH SINGLE FRAME</Link></IconButton>
                    <Divider orientation='vertical' flexItem sx={{ bgcolor: '#9b6827' }} />
                    <IconButton disableRipple><Link>WITH DOUBLE FRAME</Link></IconButton>
                    <Divider orientation='vertical' flexItem sx={{ bgcolor: '#9b6827' }} />
                    <IconButton disableRipple><Link>WITHOUT FRAME</Link></IconButton>
                    <Divider orientation='vertical' flexItem sx={{ bgcolor: '#9b6827' }} />
                    <IconButton disableRipple><Link>QURAN QUOTES</Link></IconButton>
                    <Divider orientation='vertical' flexItem sx={{ bgcolor: '#9b6827' }} />
                    <IconButton disableRipple><Link>HADITH QUOTES</Link></IconButton>
                    <Divider orientation='vertical' flexItem sx={{ bgcolor: '#9b6827' }} />
                    <IconButton disableRipple><Link>JIKR</Link></IconButton>
                    <Divider orientation='vertical' flexItem sx={{ bgcolor: '#9b6827' }} />
                    <IconButton disableRipple><Link>ARABIC PROVERS</Link></IconButton>
                    <Divider orientation='vertical' flexItem sx={{ bgcolor: '#9b6827' }} />
                    {/* <IconButton><Link>Products</Link></IconButton> */}
                </Box>
            </Box>
            <Divider sx={{bgcolor: '#9b6827'}}/>
        </AppBar>
    );
};

export default Header1;