import React, { useContext, useEffect, useState } from 'react';
import './Products.css';
import { Box, Button, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductData from '../../ProductData/an-nahl.json';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { CartContext } from '../../App';
import ScrollToTop from 'react-scroll-to-top';

const Products = (props) => {

    const [cartCount, setCartCount] = useContext(CartContext);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const dataBaseCart = getDatabaseCart();
        const dataBaseCartIds = Object.keys(dataBaseCart);
        const addQuantity = dataBaseCartIds.map(id => {
            const cartProducts = ProductData.find(product => product.id === id);
            cartProducts.quantity = dataBaseCart[id];
            return cartProducts;
        })
        setCart(addQuantity);
    }, [])

    const handleAddtoCart = (product) => {
        setCartCount(cartCount + 1);
        //console.log('Product Clicked', product);
        let newCart;
        const selectedProducts = cart.find(cartProduct => cartProduct.id === product.id);
        //console.log("From Products (Selected Products)", selectedProducts);  //Alhamdulillah
        if (selectedProducts) {
            selectedProducts.quantity += 1;
            const otherProducts = cart.filter(pd => pd.id !== product.id);
            //console.log("From Products (Other Products)", otherProducts);  //Alhamdulillah
            newCart = [...otherProducts, selectedProducts];
            setCart(newCart);
            //debugger;
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
            setCart(newCart);
            //debugger;
        }
        addToDatabaseCart(product.id, product.quantity);
        //debugger;        
    }
    //console.log("From Products", cartCount); //Alhamdulillah
    //console.log('Cart', cart);
    return (
        <>
            <Typography align="left" sx={{ ml: { xs: '1.9%', sm: '1.6%', lg: '1.5%' }, fontWeight: 450, fontSize: { xs: 15, md: 20, lg: 25 }, my: 0.5 }}>Wall Frame Of Arabic Calligraphy:</Typography>
            <Grid container
                sx={{
                    maxWidth: '98.8%',
                    ml: { xs: '1.8%', sm: '1.5%', lg: '1.2%' },
                    mr: 0,
                    //mr: { xs: '1.33333333333333333333%', sm: '1%', lg: '0.8%' },
                    gap: { xs: '1.33333333333333333333%', sm: '1%', lg: '0.8%' },
                    //ml: {xs: 3, lg: 5}
                    //display: 'flex',
                    //justifyContent: 'center',
                    // justifyContent: 'space-stretch',
                    // justifyContent: 'space-evenly',
                    // justifyContent: 'space-around',            
                    // justifyContent: 'space-between',
                    // justifyContent: 'space-evenly',
                    //flexWrap: 'wrap',
                }}
            >
                {
                    props.productData.map((product) => (
                        <Grid
                            key={product.id}
                            size={2}
                            sx={{
                                maxWidth: { xs: '48%', sm: '32%', lg: '24%' },
                                //width: {xs: 159, sm:  238, md: 280, lg: 318},
                                borderRadius: 0,
                                my: 0.5,
                                border: 1,
                                borderColor: 'transparent',
                                boxShadow: 3,
                                '&:hover': {
                                    border: 1,
                                    borderColor: '#9b6827',
                                }
                            }}
                        >
                            <Link
                                to={`/product/${product.id}`}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <Box
                                    sx={{
                                        zIndex: 1,
                                        position: 'absolute',
                                        //left: '10%',
                                        //right: '90%',
                                        //left: {xs: '50%', sm: '40%', md: '30%',  lg: '23%'},
                                        transform: 'translate(0%, 10%)',
                                        px: 1,
                                        py: 0.5,
                                        boxShadow: 5,
                                        textAlign: 'left',
                                        bgcolor: '#9b6827',
                                        color: 'white',
                                        fontSize: 15,
                                        fontWeight: 500,
                                    }}
                                >10% OFF</Box>
                                <CardMedia
                                    component='img'
                                    image={product.img}
                                    alt={product.name}
                                    sx={{ position: 'relative' }}
                                />

                            </Link>
                            <CardContent
                                sx={{
                                }}
                            >
                                <Container disableGutters
                                    component={Link}
                                    to={`/product/${product.id}`}
                                    sx={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        minHeight: { xs: 60, sm: 'auto', md: 'auto', lg: 'auto' },
                                        //maxHeight: {xs: 80, lg: 'auto'}
                                    }}
                                >
                                    {product.title} || {product.size}
                                </Container>
                                <br />
                                <b>৳{product.priceTen}</b> <s style={{ color: 'rgba(0, 0, 0, 0.5)' }}>৳{product.price}</s>
                            </CardContent>
                            <Box 
                            sx={{
                                display: { xs: 'block', lg: 'flex', },
                                mb: 0.5,
                                mx: 0.5,
                                gap: 0.5,
                            }}
                            >
                                <Button
                                    className='cart-buy-btn'
                                    onClick={() => { handleAddtoCart(product) }}
                                    sx={{
                                        //bgcolor: 'white',
                                        color: 'black',                                        
                                        //ml: {xs: 0, lg: 1},
                                        mb: { xs: 0.5, lg: 0 },
                                        //width: '100%',
                                        border: 1,
                                        borderColor: '#9b6827',
                                        textTransform: 'capitalize',
                                        boxShadow: {xs: 2, sm: 3.5, lg: 5},
                                        flexGrow: { xs: 1, lg: 0.5 },
                                        //borderColor: 'red',
                                        '&:hover': {
                                            color: 'black',
                                            bgcolor: 'white',
                                            boxShadow: 0,
                                        },
                                    }}
                                >
                                    Add To Cart
                                </Button>
                                <Button
                                    className='cart-buy-btn'
                                    component={Link}
                                    to='/checkout'
                                    onClick={() => { handleAddtoCart(product) }}
                                    sx={{
                                        //bgcolor: 'white',
                                        color: 'black',                                        
                                        //mx: {xs:0, lg: 1},
                                        //width: '100%',
                                        textTransform: 'capitalize',
                                        borderRadius: 1,
                                        boxShadow: {xs: 2, sm: 3.5, lg: 5},
                                        flexGrow: 0.5,
                                        border: 1,
                                        borderColor: '#9b6827',
                                        //borderColor: 'red',
                                        '&:hover': {
                                            bgcolor: 'white',
                                            color: 'black',
                                            boxShadow: 1,
                                        }
                                    }}
                                >
                                    Buy Now
                                </Button>
                            </Box>
                        </Grid>
                    ))
                }
                <ScrollToTop smooth />
            </Grid>
        </>
    );
}
export default Products;