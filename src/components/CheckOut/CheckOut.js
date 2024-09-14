import { Avatar, Box, Button, Container, Divider, IconButton, Paper } from '@mui/material';
import './CheckOut.css';
import React, { useContext, useState, useEffect } from 'react';
import { addToDatabaseCart, clearLocalShoppingCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ProductData from '../../ProductData/an-nahl.json';
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    //Show the top When page opened
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // Normal JS 
    const [cartCount, setCartCount] = useContext(CartContext);
    const dataBaseCart = getDatabaseCart();
    const cartIds = Object.keys(dataBaseCart);
    //console.log('Cart From Cart Details', cartIds);
    const cartProducts = cartIds.map(id => {
        const products = ProductData.find(pd => pd.id === id);
        products.quantity = dataBaseCart[id];
        return products;
    }
    )
    const [cart, setCart] = useState(cartProducts);
    //console.log('Cart Products', cartProducts); 
    //console.log('Cart', cart);

    const handleRemove = (product) => {
        let newCart = cartProducts.filter(pd => pd.id !== product.id);
        setCart(newCart);
        setCartCount(cartCount - product.quantity);
        removeFromDatabaseCart(product.id);
        //console.log('From CheckOut', product);
    }

    const handlePlus = (product) => {
        const selectedProduct = cart.find(pd => pd.id === product.id);
        selectedProduct.quantity += 1;
        //console.log("From Handle Plus (Selcted Product After Quantity Added)", selectedProduct); 
        setCart(cart);
        //console.log("Cart Products after quantity added", cart);
        addToDatabaseCart(product.id, product.quantity);
        setCartCount(cartCount + 1);
    }

    const handleMinus = (product) => {
        const selectedProduct = cart.find(pd => pd.id === product.id);
        if (selectedProduct.quantity > 1) {
            selectedProduct.quantity -= 1;
            //console.log("From Handle Minus (Selcted Product After Quantity Subtracted)", selectedProduct); 
            setCart(cart);
            //console.log("Cart Products after quantity subtracted", cart);
            addToDatabaseCart(product.id, product.quantity);
            setCartCount(cartCount - 1);
        }
    }

    const handlePlaceOrder = () => {
        clearLocalShoppingCart(cart);
        setCart([]);
        setCartCount(0);
    }
    let shippingCharge;
    const totalAmount = cart.reduce((sum, pd) => sum + pd.priceTen * pd.quantity, 0);
    if (totalAmount > 0 && totalAmount < 1000) {
        shippingCharge = 109;
    }
    else if (totalAmount >= 1500) {
        shippingCharge = 0;
    }

    //console.log('Total Amount', totalAmount);
    //To check the cart items in the console.

    return (
        <Box
            className='main-box'
            component='form'
            sx={{
                display: { xs: 'block', md: 'flex' },
                mt: { xs: 19, lg: 17 },
                mx: { xs: 1, sm: 1.5, md: 2, lg: 2.5 }
            }}
        >
            <Box className='left-box' sx={{ flexGrow: 0.5 }}>
                <h2 style={{ textAlign: 'center' }}>Your Product Details:</h2>
                <Box
                    className='cart-products-sub-total'
                    sx={{
                        display: { xs: 'block', lg: 'flex' },
                        gap: 1,
                    }}
                >
                    <Box className='cart-products' sx={{ flexGrow: 0.5 }}>
                        {
                            cart.map(product => {
                                return (
                                    <Paper
                                        className='img-icon-product-details'
                                        key={product.id}
                                        sx={{
                                            display: 'flex',
                                        }}
                                    >
                                        <Avatar
                                            className='img-icon'
                                            component={Link}
                                            to={`/product/${product.id}`}
                                            src={product.img}
                                            variant='square'
                                            sx={{
                                                height: 100,
                                                width: 'auto',
                                                my: 'auto',
                                            }}
                                        />
                                        <Box
                                            className='product-details'
                                            sx={{
                                                p: 1,
                                                width: { xs: 'auto', md: '100%' },
                                            }}
                                        >
                                            <Box
                                                className='product-name'
                                                component={Link}
                                                to={`/product/${product.id}`}
                                                sx={{
                                                    pb: 0.5,
                                                    textDecoration: 'none',
                                                    color: 'black',
                                                }}
                                            >
                                                {product.name}
                                            </Box>
                                            <Box
                                                className='unit-price'
                                                sx={{
                                                    pb: 1,
                                                    fontSize: 12,
                                                    opacity: 10
                                                }}
                                            >
                                                Unit Price:&nbsp; ৳{product.priceTen}
                                            </Box>
                                            <Box className='quantity' sx={{ pb: 0.5 }}>
                                                <b>Qty:</b>&nbsp;
                                                <IconButton
                                                    onClick={() => { handleMinus(product) }}
                                                    sx={{
                                                        fontSize: { xs: 12, sm: 13, md: 14, lg: 15 },
                                                    }}
                                                >
                                                    −
                                                </IconButton>
                                                <IconButton
                                                    disableRipple
                                                    sx={{
                                                        cursor: 'text',
                                                        fontSize: { xs: 15, sm: 16, md: 17, lg: 18 },
                                                        width: 30,
                                                    }}
                                                >
                                                    {product.quantity}
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => { handlePlus(product) }}
                                                    sx={{
                                                        fontSize: { xs: 12, sm: 13, md: 14, lg: 15 },
                                                    }}
                                                >
                                                    +
                                                </IconButton>
                                            </Box>
                                            <Box
                                                className='total-remove'
                                                sx={{
                                                    display: { xs: 'block', md: 'flex' },
                                                    justifyContent: 'space-between',
                                                }}
                                            >
                                                <Box className='total'><b>Total:</b>&nbsp; ৳{product.priceTen * product.quantity}</Box>
                                                <Box className='remove'>
                                                    <IconButton
                                                        onClick={() => { handleRemove(product) }}
                                                        sx={{
                                                            mr: 1,
                                                            p: 0,
                                                            fontSize: 15,
                                                            borderBottom: 1,
                                                            borderRadius: 0,
                                                            mt: { xs: 2 },
                                                        }}
                                                    >Remove</IconButton>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Paper>
                                )
                            })
                        }
                    </Box>
                    <Box
                        className='cart-summary'
                        sx={{
                            flexGrow: 0.5,
                            px: 2,
                        }}
                    >
                        <h3>Total Amount: &nbsp; ৳{totalAmount}</h3>
                        <p> <b>Shipping Charge: &nbsp; <span style={{ color: 'green' }}>৳{shippingCharge || 0}</span></b></p>
                        <p><b>Payment Status: &nbsp; <span style={{ color: 'red' }}>Pending</span></b></p>
                        <Divider />
                        <Box component='h3' sx={{ textAlign: 'center' }}>
                            Sub Total: &nbsp; ৳{totalAmount + shippingCharge || 0}
                        </Box>
                        <Button variant="contained"
                            component={Link}
                            to='/placeorder'
                            onClick={handlePlaceOrder}
                            sx={{
                                bgcolor: 'black',
                                width: '100%',
                                py: 1,
                                mb: 1,
                                boxShadow: 5,
                                '&:hover': {
                                    bgcolor: 'black'
                                }
                            }}
                        >
                            Place Order
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box
                className='right-box'
                sx={{
                    flexGrow: 0.5,
                }}
            >
                <Container
                    sx={{
                        py: 0,
                    }}
                >
                    <h2 style={{ textAlign: 'center' }}>Shipping Address</h2><Divider />
                    <p style={{ color: 'red' }}>
                        *Shipping Section Is Updating Soon InshaAllah...
                    </p>
                </Container>
            </Box>
        </Box>
    );
};

export default CheckOut;