import { Facebook, WhatsApp } from '@mui/icons-material';
import { Avatar, Button, Container } from '@mui/material';
import React from 'react';

const PlaceOrder = () => {
    return (
        <Container className='aj'
            sx={{
                mx: 'auto',
                minWidth: '100%',
                textAlign: 'center',
                paddingTop: '50px',
                paddingBottom: '50px',
                backgroundColor: '#f5f5f5',

            }}
        >
            <h1 style={{color: 'black'}}> 🌹 Jajakallahu Khairan. Our Page is Under Construction 🌹</h1><h1 style={{color: 'black'}}> Please Confirm Your Order Using The Links Below </h1>
            <Avatar variant='square'
                sx={{
                    mt: 4,
                    px: 10,
                    mb: 1,
                    mx: 'auto',
                }}
            >
                <Button
                    component='a'
                    href='https://wa.me/01576583605'
                    target="_blank"
                    color='success'
                >
                    <WhatsApp color='success' sx={{mr: 1}} />
                    WhatsApp
                </Button>
            </Avatar>
            <Avatar variant='square'
                sx={{
                    px: 10,
                    mx: 'auto',
                }}
            >
                <Button
                    component='a'
                    href='https://www.facebook.com/AnNahlCalligraphy/'
                    target="_blank"
                    color='primary'
                >
                    <Facebook color='primary' sx={{mr: 1}}/>
                    Facebook
                </Button>
            </Avatar>
        </Container>
    );
};

export default PlaceOrder;