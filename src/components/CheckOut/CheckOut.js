import { Avatar, Box, Button, Card, Container, Divider, IconButton, Paper } from '@mui/material';
import React, { useContext, useState } from 'react';
import { addToDatabaseCart, clearLocalShoppingCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ProductData from '../../ProductData/an-nahl.json';
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    const [cartCount, setCartCount] = useContext(CartContext);
    //const [cartQty, setCartQty] = useState();
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
        let newCart = cartProducts.filter(pd => pd.id!== product.id);
        setCart(newCart);
        setCartCount(cartCount - product.quantity);
        removeFromDatabaseCart(product.id);
        //console.log('From CheckOut', product);
    }
    
    const handlePlus = (product) =>{       
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
        if(selectedProduct.quantity > 1){
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
    
    const totalAmount = cart.reduce((sum, pd)=> sum+pd.priceWithoutFrame*0.65*pd.quantity,0);
    //console.log('Total Amount', totalAmount);
    //To check the cart items in the console.

    return (
        <Box 
            component='form'
            sx={{
                display: { xs: 'block', md: 'flex' },
                mx: 2,
                mt: 17,
                gap: 2,
            }}
        >
            <Card
            sx={{
                flexGrow: 0.5,
            }}
            >
                <Container 
                sx={{
                    py: 0,
                }}>
                    <h2 style={{textAlign: 'center'}}>Your Product Details</h2><Divider />
                <Box
                sx={{
                    //border:1,
                    //borderColor: 'red',
                    display: {xs: 'block', md: 'flex'},
                    gap: 1,
                }}
                >
                    <Box
                    sx={{
                        flexGrow:0.5
                    }}
                    >
                    {                        
                        cart.map(product => {  

                           //let cartQty = product.quantity;
                            //setCartQty(cartQty);

                            return (
                            <Container disableGutters key={product.id}>
                            <Paper
                            key={product.id}
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <Avatar
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
                                <Box sx={{
                                    //border: 1,
                                    //borderColor: 'red',
                                    //mt: 1,
                                    p: 1,
                                    width: {xs: 'auto', md: '100%'},
                                }}>
                                    <Container 
                                    disableGutters 
                                    component={Link}
                                    to={`/product/${product.id}`} 
                                    sx={{
                                        pb: 0.5,
                                        textDecoration: 'none',
                                    }}
                                    >
                                        {product.name}
                                    </Container>
                                    <Container disableGutters sx={{pb: 1,fontSize: 12, opacity: 10}}>Unit Price: ৳{product.priceWithoutFrame * 0.65}</Container>
                                    <Container disableGutters sx={{pb: 0.5}}>
                                        <b>Qty:</b>&nbsp; 
                                        <IconButton
                                        onClick={() => {handleMinus(product)}}
                                         sx={{
                                            px:1, 
                                            py:0, 
                                            border: 1, 
                                            borderRight: 0, 
                                            fontSize: 12, 
                                            borderRadius: 0
                                        }}
                                        >
                                            −
                                        </IconButton>
                                        <IconButton 
                                        disableRipple 
                                        component = 'span' 
                                        sx={{
                                            border: 1, 
                                            py: 0, 
                                            cursor: 'text', 
                                            px: 1, 
                                            borderRadius: 0, 
                                            fontSize: 15
                                        }}
                                        >
                                            {product.quantity}
                                        </IconButton>
                                        <IconButton
                                        onClick={() => {handlePlus(product)}}                                       
                                         sx={{
                                            px:1, 
                                            py:0, 
                                            border: 1, 
                                            borderLeft: 0, 
                                            fontSize: 12, 
                                            borderRadius: 0
                                            }}
                                            >
                                            +
                                        </IconButton></Container>                                    
                                    <Paper
                                    sx={{
                                        display: {xs: 'block', md: 'flex'},
                                        boxShadow: 0,
                                        justifyContent: 'space-between',  
                                        //border: 1,
                                        //borderColor: 'red',                                      
                                    }}
                                    >
                                        <Box> 
                                            <Container disableGutters><b>Total:</b>&nbsp; ৳{product.priceWithoutFrame * product.quantity * 0.65}</Container>
                                        </Box>
                                        <Box>
                                            <IconButton 
                                            onClick= {()=>{handleRemove(product)}}
                                            sx={{
                                                mr: 1,
                                                p:0,
                                                fontSize: 15,
                                                borderBottom: 1,
                                                borderRadius: 0,
                                                mt: {xs: 2},
                                            }}
                                            >Remove</IconButton>
                                        </Box>
                                    </Paper>                                    
                                </Box>
                            </Paper><Divider/>  
                            </Container>
                            )

                        })
                    }
                    </Box>
                    <Box
                    sx={{
                        //minWidth: 250,
                        flexGrow: 0.5,
                        px: 2,
                        //border:1,
                        //borderColor: 'yellow',
                    }}
                    >
                        <Container component= 'h3'sx={{textAlign: 'center'}}> Sub Total </Container><Divider />
                        <h3>Total Amount: ৳{totalAmount}</h3>
                        <p> <b>Shipping Charge: <span style={{color: 'green'}}>Free</span></b></p>
                        <p><b>Payment Status: <span style={{color: 'red'}}>Pending</span></b></p>
                        <Button variant="contained"
                        component = {Link} 
                        to='/placeorder'
                        onClick={handlePlaceOrder}
                        sx={{
                            bgcolor: 'black',
                            width: '100%',
                            py: 0.5,
                            mb: 1,
                            '&:hover':{
                                bgcolor: 'black'
                            }
                        }}
                        >
                        Place Order
                        </Button>
                    </Box>
                </Box>
                </Container>
            </Card>
            <Card
                sx={{
                    flexGrow: 0.5,
                }}
            >
                <Container
                    sx={{
                        py: 0,
                    }}
                >
                    <h2 style={{textAlign: 'center'}}>Shipping Address</h2><Divider />
                    <p style={{color: 'red'}}>
                        *Shipping Section Is Updating Soon InshaAllah...
                    </p>
                </Container>
            </Card>
        </Box>
    );
};

export default CheckOut;