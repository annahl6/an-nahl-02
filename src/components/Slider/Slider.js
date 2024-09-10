import { CardMedia, CardContent, Card, Button } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import ProductData from '../../ProductData/an-nahl.json';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Slider = () => {
    const sliderProducts = ProductData.slice(0, 3);
    //console.log('From Slider', sliderProducts);
    return (
        <Carousel
            animation='slide'
            duration={550}
            sx={{
                minHeight: {xs: 200, md: 300, lg: 400}
            }}
        //NextIcon={<>}
        //PrevIcon={<>}
        >
            {
                sliderProducts.map((product) => (
                    <Container
                    key={product.id}
                    >
                        <CardContent
                            sx={{
                                fontFamily: 'Jacques Francois Shadow',
                                textTransform: 'capitalize',
                                letterSpacing: 1,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                zIndex: 1000,
                                borderBottom: 1,
                                mt: { xs: 2, md: 1, lg: 0 },
                                fontSize: { xs: 15, md: 20, lg: 25 },
                                animationName: 'example',
                                animationDuration: '4s',
                                //animationDelay: '1s',
                                animationIterationCount: 'infinite',
                                //animationTimingFunction: 'ease',
                                //animationTimingFunction: 'ease-in-out',
                                //animationTimingFunction: 'ease-in',
                                animationTimingFunction: 'ease-out-in',
                                "@keyframes example": {
                                    'from': {
                                        //bgcolor: 'white',
                                        color: 'black',
                                        transform: 'rotateY(0deg)',
                                        //transform: 'rotate(-180deg)',
                                    },
                                    '50%': {
                                        color: '#dd8404',
                                        transform: 'rotateY(90deg)',
                                    },

                                    '100%': {
                                        color: 'black',
                                        transform: 'rotateY(0deg)',
                                    }
                                }
                                //width: '50%',                        
                                //borderColor: 'red',
                                //position: 'absolute',
                                //justifyContent: 'center',
                                //right: {xs: '14%', sm: '30%', md: '25%', lg: '30%', xl: '40%'},
                                //left: {xs: '14%', sm: '30%', md: '25%', lg: '30%', xl: '40%'},
                                //left: {xs: '20%', lg: '35%'},
                                //transform: 'translate(-50%, -50%)',
                                //transform: 'translateY(-50%)',                        
                            }}
                        >
                            Assalamu Alaikum...<br />Welcome To An Nahl Calligraphy...</CardContent>
                        <Card
                            key={product.id}
                            sx={{
                                display: 'flex',
                                //bgcolor: 'red',
                                boxShadow: 0,                                
                                //mt: 2,
                                //height: {xs: 200, md: 'auto', lg: 'auto'},
                                justifyContent: 'center',

                            }}
                        >
                            <CardContent
                                component={Link}
                                to={`/product/${product.id}`}
                                sx={{
                                    width: '50%',
                                    //border: 1,
                                    p: 0,
                                    //flexDirection: 'column',
                                    //alignItems: 'center',
                                    //left: '50%', 
                                    //top: '50%',
                                    animationName: 'slideImg',
                                    animationDuration: '4s',
                                    //animationDelay: '1s',
                                    animationIterationCount: 'infinite',
                                    //animationTimingFunction: 'ease',
                                    //animationTimingFunction: 'ease-in-out',
                                    //animationTimingFunction: 'ease-in',
                                    animationTimingFunction: 'ease-out-in',
                                    "@keyframes slideImg": {
                                        'from': {
                                            //bgcolor: 'white',
                                            transform: 'translate(0%, 0%) scale(1.0)',
                                            //transform: 'rotateY(0deg)',
                                            //transform: 'rotate(-180deg)',
                                        },
                                        '50%': {
                                            transform: {xs:'translate(0%, 0%) scale(1.01)', md: 'translate(0%, 0%) scale(1.1)'},
                                            //transform: 'rotateY(90deg)',
                                        },

                                        '100%': {
                                            transform: 'translate(0%, 0%) scale(1.00)',
                                            //transform: 'rotateY(0deg)',
                                        }
                                    },
                                }}
                            >
                                <CardMedia
                                    component='img'
                                    image={product.img}
                                    sx={{
                                        //border: 1,
                                        width: { xs: 200, md: 300, lg: 400 },
                                        mx: 'auto',
                                        //mt: {xs:'10%', lg: 0},                                    

                                    }}
                                />
                            </CardContent>
                            <CardContent
                                sx={{
                                    width: '50%',
                                    m: 'auto',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: {xs: 10, md: 15, lg: 18},
                                    zIndex: 100,
                                    maxHeight: {xs: 100, md: 'auto', lg: 'auto'},
                                    //fontFamily: 'Sevillana',
                                    letterSpacing: 1,
                                    '@import url':('https://fonts.cdnfonts.com/css/arabic-calligraphy')
                                }}
                            >
                                {product.bangla} <br/> {product.ref}<br/>
                                <Button
                                    component={Link}
                                    to={`/product/${product.id}`}
                                    sx={{
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease',
                                        bgcolor: 'black',
                                        color: 'white',
                                        px: 1.5,
                                        py: 0.5,
                                        mt: 2,
                                        fontWeight: 'bold',
                                        textTransform: 'capitalize',
                                        boxShadow: 5,
                                        borderRadius: 1,
                                        animationName: 'button',
                                        animationDuration: '4s',
                                        //animationDelay: '1s',
                                        animationIterationCount: 'infinite',
                                        //animationTimingFunction: 'ease',
                                        //animationTimingFunction: 'ease-in-out',
                                        //animationTimingFunction: 'ease-in',
                                        animationTimingFunction: 'ease-out-in',
                                        "@keyframes button": {
                                            'from': {
                                                //bgcolor: 'white',
                                                transform: 'translate(0%, 0%) scale(1.0)',
                                                //transform: 'rotateY(0deg)',
                                                //transform: 'rotate(-180deg)',
                                            },
                                            '50%': {
                                                transform: 'translate(0%, 0%) scale(1.1)',
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
                                >See Details >></Button>
                            </CardContent>
                        </Card>
                    </Container>
                ))
            }
        </Carousel>
    );
};

export default Slider;