import React from 'react';
import { Divider, IconButton, InputBase, Paper, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';


const handleHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}


export const MenuList = () => {
    return (
        <>
            <IconButton disableRipple onClick={handleHome} sx={{display: {xs: 'none', lg: 'block'}}}>
                <Link to='/home'>
                    <Tooltip title='Home'><HomeIcon sx={{ color: '#9b6827', '&:hover': { color: '#9b6827' } }} /></Tooltip>
                </Link>
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
        </>
    );
};
export const SearchBox = () => {
    return (
        <Paper
            component='form'
            sx={{
                display: 'flex',
                border: 1,
                borderColor: '#9b6827',
                borderRadius: 2,
                //boxShadow: 5,
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
