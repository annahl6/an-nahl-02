import { CardMedia, CardContent, Card, Button, Box, Divider } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import ProductData from '../../ProductData/an-nahl.json';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../../index.css';
import './Slider.css';
const Slider = () => {
    const sliderProducts = ProductData.slice(0, 3);
    return (
        <Box>
            <Box className='welcome-msg'
                sx={{
                    width: '100%',
                    fontSize: { xs: 15, md: 20, lg: 25 },
                    //fontFamily: 'Lobster',
                    py: { xs: 3, md: 2, lg: 1 },
                    animationName: 'welcome',
                    animationDuration: '6s',                    
                    animationIterationCount: 'infinite',
                    animationDelay: '1s',                    
                    animationTimingFunction: 'ease',
                    //animationTimingFunction: 'ease-in-out',
                    //animationTimingFunction: 'ease-in',
                    //animationTimingFunction: 'ease-out-in',
                    "@keyframes welcome": {
                        'from': {
                            //bgcolor: 'white',
                            //transform: 'translate(0%, 0%) scale(1.0)',
                            transform: 'rotateY(0deg)',
                            //transform: 'rotate(-180deg)',
                        },
                        '25%': {
                            //transform: 'translate(0%, 0%) scale(1.2)',
                            transform: 'rotateY(0deg)',
                        },
                        '50%': {
                            transform: 'rotateY(90deg)',
                        },
                        '75%': {
                            transform: 'rotateY(0deg)',                            
                        },

                        '100%': {
                            //transform: 'translate(0%, 0%) scale(1.00)',
                            transform: 'rotateY(0deg)',
                        }
                    },
                }}
            >Assalamu Alaikum...<br/>Welcome To <span className='brand-name'>An-Nahl Calligraphy</span>...<Divider sx={{bgcolor: '#9b6827', mt: 1}}/></Box>
            <Carousel
                animation='slide'
                duration={550}
            >
                {
                    sliderProducts.map((product) => (
                        <Container key={product.id}
                        >
                            <Card sx={{
                                display: 'flex',
                                //minHeight: { xs: 100, md: 200, lg: 300 },
                                //width : { xs: 120, md: 300, lg: 400 },
                                maxHeight: { xs: 90, md: 225, lg: 300 },
                                minHeight: { xs: 90, md: 225, lg: 300 },
                                pb: 0,
                                bgcolor: 'white',
                                borderRadius: 0,
                                boxShadow: 0,
                                //flexDirection: 'row',
                                //alignItems: 'center', 
                                //background: 'rgb(0,0,0)',
                                //background: 'radial-gradient(circle, rgba(0,0,0,1) 89%, rgba(221,132,4,1) 90%, rgba(221,132,4,1) 100%)',
                            }}>
                                <Box
                                    component={Link}
                                    to={`/product/${product.id}`}
                                    sx={{
                                        width: '48%',
                                        //bgcolor: 'red'                                    
                                    }}
                                >
                                
                                    <CardMedia
                                        component='img'
                                        image={product.img}
                                        sx={{
                                            // border: 1,
                                            width: { xs: 120, md: 300, lg: 400 },
                                            //mx: 'auto',
                                            position: 'relative',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',


                                            //mx : {xs: 0, lg: 'auto'},
                                            // mt: {xs:'10%', lg: 0},
                                        }}
                                    />                                    
                                </Box>
                                <CardContent
                                    sx={{
                                        width: '48%',
                                        //bgcolor: 'green',                                             
                                    }}
                                >
                                    <Box
                                        sx={{
                                            // width: {xs: '40%', lg: '25%'},
                                            // py: {xs: 4.5, sm: 7, md: 10, lg: 13, xl:15},                                    
                                            //bgcolor: 'black',
                                            fontFamily: 'Li Mahfuz Himadri ANSI V2',
                                            fontWeight: 'bold',
                                            fontSize: { xs: 10, md: 16, lg: 20 },
                                            //zIndex: 100, 
                                            //flexDirection: 'column',
                                            //alignContent: 'center',                                   
                                            //minHeight: { xs: 100, md: 200, lg: 300 },
                                            // fontFamily: 'CharuChandan3D',
                                            // letterSpacing: 1,
                                            // maxHeight: {xs: 100, md: 'auto', lg: 'auto'},
                                            position: 'relative',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: { xs: 120, md: 300, lg: 400 },
                                            height: { xs: 90, md: 225, lg: 300 },
                                            //lineHeight: { xs: 150, md: 225, lg: 300},
                                            textAlign: 'center',
                                            // mt: {xs:'10%', lg: 0},
                                            // mb: {xs: 0, md: 1},
                                            // bgcolor: 'black',
                                            //p: 'auto',
                                            // fontFamily: 'CharuChandan3D',
                                            // letterSpacing: 1,
                                            // maxHeight: {xs: 100, md: 'auto', lg: 'auto'}, 
                                            color: 'white',
                                        }}

                                    >
                                        <Box
                                            sx={{
                                                color: 'black',
                                                position: 'relative',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        > "{product.bangla}"<br /> {product.ref}<br />
                                            <Button
                                                component={Link}
                                                to={`/product/${product.id}`}
                                                sx={{
                                                    textAlign: 'center',
                                                    transition: 'all 0.3s ease',
                                                    bgcolor: '#9b6827',
                                                    color: 'white',
                                                    px: { xs: 0.5, md: 1, lg: 1.5 },
                                                    py: 0.5,
                                                    mt: {xs: 1, lg: 2},
                                                    //mx: 'auto',
                                                    justifyContent: 'center',
                                                    fontWeight: 'bold',
                                                    textTransform: 'capitalize',
                                                    boxShadow: 5,
                                                    borderRadius: 1,
                                                    animationName: 'button',
                                                    animationDuration: '4s',
                                                    //animationDelay: '1s',
                                                    animationIterationCount: 'infinite',
                                                    animationTimingFunction: 'ease',
                                                    //animationTimingFunction: 'ease-in-out',
                                                    //animationTimingFunction: 'ease-in',
                                                    //animationTimingFunction: 'ease-out-in',
                                                    "@keyframes button": {
                                                        'from': {
                                                            //bgcolor: 'white',
                                                            transform: 'translate(0%, 0%) scale(1.0)',
                                                            //transform: 'rotateY(0deg)',
                                                            //transform: 'rotate(-180deg)',
                                                        },
                                                        '50%': {
                                                            transform: 'translate(0%, 0%) scale(1.2)',
                                                            //transform: 'rotateY(90deg)',
                                                        },

                                                        '100%': {
                                                            transform: 'translate(0%, 0%) scale(1.00)',
                                                            //transform: 'rotateY(0deg)',
                                                        }
                                                    },
                                                    '&:hover': {
                                                        bgcolor: 'black',
                                                        color: 'white',
                                                    }
                                                }}
                                            >See Details &gt;&gt;</Button></Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Container>
                    ))
                }
            </Carousel>
        </Box>
    );
};

export default Slider;