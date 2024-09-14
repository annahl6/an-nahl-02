import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductData from '../../ProductData/an-nahl.json';
import './ProductDetails.css';
import { Box, Button, Card, CardContent, CardMedia, Divider } from '@mui/material';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { CartContext } from '../../App';
const ProductDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [cartCount, setCartCount] = useContext(CartContext);
    const { productId } = useParams();
    const selectedProduct = ProductData.find(product => product.id === productId);
    //console.log(selectedProduct);
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
    },[])

    const handleAddtoCart = (product) => {
        setCartCount(cartCount + 1);
        //console.log('From Product Details', product);
        let newCart;
        const selectedProducts = cart.find(cartProduct => cartProduct.id === product.id);
        if(selectedProducts){
            selectedProducts.quantity += 1;
            const otherProducts = cart.filter(pd => pd.id!== product.id);
            newCart = [...otherProducts, selectedProducts];
            setCart(newCart);
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
            setCart(newCart);
        }
        addToDatabaseCart(product.id, product.quantity);
    }
    return (
        <>
        <Box
            className = 'image-details'
            sx={{
                mt: {xs: 19, lg: 17},
                mx: 2,
                display: {xs: 'block', md: 'flex'},
                //border: 1,
                //borderColor: '#9b6827',
                boxShadow: 5,
                p: 2,               
            }}
        >
            {/* <hr/> */}
            <Box
                className='image'
                sx={{
                    flexGrow: 0.5,
                    //boxShadow: 5,
                    //height: 'auto',
                    //my: 'auto',
                    //border: 1,
                    //mt: 0,
                }}
            >
                <CardMedia
                    component='img'
                    image={selectedProduct.img}
                    alt={selectedProduct.name}
                    // border = '1'                                              
                />
            </Box>
            <Box
                className='details-btn'
                sx={{
                    flexGrow: 0.5,
                    width: {xs:'100%', md: '50%'},
                    //boxShadow: 5,
                }}
            >
                <Box
                    className = 'details'
                    sx={{
                        //border: 1,
                        position: 'relative',
                        left: {md:'50%'},
                        top: '50%',
                        transform: {md: 'translate(-50%, -50%)'},
                    }}
                >
                    <h2>{selectedProduct.name} || {selectedProduct.title} || {selectedProduct.size} || {selectedProduct.color} Paint</h2>
                    <h4>SKU: <span className='normal-text'>{selectedProduct.id}</span></h4>
                    <Divider />
                    <p><s>৳{selectedProduct.price}</s>&nbsp;<span style={{ fontWeight: 'bold', fontSize: 25, color: 'red' }}>৳{selectedProduct.priceTen}</span></p>
                    <h4>Brand:&nbsp; <span className='normal-text'>An Nahl</span></h4>
                    {/* <h4>Art By: &nbsp;<span className='normal-text'>{selectedProduct.artist}</span></h4> */}
                    <h4>Status: &nbsp;<span style={{color: 'green'}}>In Stock</span></h4>
                    <Divider />
                <Box 
                    className = 'btn'
                    sx={{
                        mt: 2,
                        display: 'flex',
                        gap: 2,
                }}
                >
                <Button
                    className = 'cart-buy-btn'
                    onClick={() => { handleAddtoCart(selectedProduct) }}
                    sx={{                        
                        bgcolor: '#9b6827',
                        color: 'white',                        
                        py: 1.5,                        
                        '&:hover': {
                            color: 'white',
                            bgcolor: '#9b6827'
                        }                       
                    }}
                >
                    Add To Cart
                </Button>      
                <Button
                    className = 'cart-buy-btn'
                    component = {Link}
                    to = '/checkout'
                    onClick={() => { handleAddtoCart(selectedProduct) }}
                    sx={{  
                        bgcolor: 'black',
                        color: 'white',
                        py: 1.5,
                        '&:hover': {
                            color: 'white',
                            bgcolor: 'black'
                        }
                    }}
                >
                Buy Now
                </Button>
                </Box>
                </Box>
                
            </Box>
        </Box>
        <Box
        sx={{
            mx: 2,
            mt: 2,
            boxShadow: 5,
        }}
        >
            <Card>
                <CardContent>  
                    <h2>Product Details</h2> 
                    <Divider/>                 
                    <h4>Calligraphy Of:&nbsp; <span className='normal-text'>{selectedProduct.arabic}</span></h4>
                    <h4>Bangla Translation:&nbsp; <span className='normal-text'>{selectedProduct.bangla}</span></h4>
                    <h4>English Translation:&nbsp; <span className='normal-text'>{selectedProduct.english}</span></h4>
                    <h4>Reference:&nbsp; <span className='normal-text'>{selectedProduct.ref}&nbsp;</span>({selectedProduct.type})</h4>
                    <h4>Size:&nbsp; <span className='normal-text'>{selectedProduct.size}</span></h4>
                    <h4>Color Type:&nbsp; <span className='normal-text'>{selectedProduct.color}</span></h4>
                    <h4>Material:&nbsp; <span className='normal-text'>{selectedProduct.materials}</span></h4>                    
                </CardContent>
            </Card>
        </Box>
        </>
    );
};

export default ProductDetails;