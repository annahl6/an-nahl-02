import React, { useContext, useEffect, useState } from 'react';
import './Products.css';
import { Button, Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductData from '../../ProductData/an-nahl.json';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { CartContext } from '../../App';

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
    
    const handleAddtoCart =(product) =>{
        setCartCount( cartCount + 1 );
        //console.log('Product Clicked', product);
        let newCart;        
        const selectedProducts = cart.find(cartProduct => cartProduct.id === product.id);
        //console.log("From Products (Selected Products)", selectedProducts);  //Alhamdulillah
        if(selectedProducts){            
            selectedProducts.quantity += 1; 
            const otherProducts = cart.filter(pd => pd.id !== product.id);
            //console.log("From Products (Other Products)", otherProducts);  //Alhamdulillah
            newCart = [...otherProducts, selectedProducts];
            setCart(newCart);
            //debugger;
        } 
        else{            
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
        <Typography align="center" sx={{ mt: 0 }}>ARABIC CALLIGRAPHY</Typography>
        <Grid container
        sx={{
            //display: 'flex',
            justifyContent: 'center',
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
                        <Card
                        key={product.id}
                        sx={{   
                            maxWidth: {xs: '44%', sm: '30%', md: '23%'},                         
                            //width: {xs: 159, sm:  238, md: 280, lg: 318},
                            borderRadius: 0,
                            m: 1,
                            border: 1,
                            borderColor: 'transparent',
                            boxShadow: 10,
                            '&:hover': {
                                            border: 1,
                                            borderColor: '#dd8404',                                            
                                        }
                        }}
                        >
                            <Link
                            to = {'/product/' + product.id}
                            style={{
                                textDecoration: 'none',
                                color: 'black',                                
                            }}
                            >
                            <CardMedia
                                component='img'
                                image={product.img}
                                height="200"
                                width= 'auto'
                                alt= {product.name}
                            />
                            </Link>
                            <CardContent
                            sx={{
                            }}
                            >
                            <Container disableGutters
                            sx={{
                                minHeight: {xs: 95, lg: 57},
                                maxHeight: {xs: 95, lg: 'auto'}
                            }}
                            >
                            <Link
                            to = {'/product/' + product.id}
                            style={{
                                textDecoration: 'none',
                                //minHeight: 400,
                                //color: 'black',                                
                            }}>
                            {product.name} || {product.title} || {product.size} || {product.color} Paint 
                            </Link>
                            </Container>
                            <br/>
                            <b>৳ {product.priceWithoutFrame*0.65}</b> <s>৳ {product.priceWithoutFrame}</s> 
                            </CardContent>
                            <Paper sx={{
                                display: {xs: 'block', lg: 'flex',},
                                mb: 0.5,
                                mx: 0.5,
                                boxShadow: 0,
                                gap: 0.5,
                            }}>               
                            <Button
                                onClick= {()=>{handleAddtoCart(product)}}
                                sx={{                                    
                                    bgcolor: '#dd8404',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    py: 1,
                                    //ml: {xs: 0, lg: 1},
                                    mb: {xs: 0.5, lg: 0},
                                    width: '100%',
                                    justifyContent: 'center',
                                    borderRadius: 1,
                                    boxShadow: 5,
                                    flexGrow: {xs: 1, lg: 0.5},
                                    //border: 1,
                                    //borderColor: 'red',
                                    '&:hover': {
                                            color: 'white',
                                            bgcolor: '#dd8404',
                                            boxShadow: 0,
                                        }                                    
                                }}
                            >                               
                            ADD TO CART
                            </Button>
                            <Button
                             component = {Link}
                             to = '/checkout'
                                onClick= {()=>{handleAddtoCart(product)}}
                                sx={{                                    
                                    bgcolor: 'black',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    py: 1,
                                    //mx: {xs:0, lg: 1},
                                    width: '100%',
                                    justifyContent: 'center',
                                    borderRadius: 1,
                                    boxShadow: 5,
                                    flexGrow: 0.5,
                                    //border: 1,
                                    //borderColor: 'red',
                                    '&:hover': {
                                            bgcolor: 'black',
                                            color: 'white',
                                            boxShadow: 0,
                                        }                                    
                                }}
                            >                               
                            Buy Now
                            </Button> 
                            </Paper>     
                        </Card>                    
                ))
            }
        </Grid>
        </> 
    );
}
export default Products;