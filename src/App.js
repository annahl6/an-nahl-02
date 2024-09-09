import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Header1 from './components/Header/Header1';
import { getDatabaseCart } from './utilities/databaseManager';
import CheckOut from './components/CheckOut/CheckOut';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
export const CartContext = createContext();

const App = () => {

  const dataBaseCart = getDatabaseCart();
  const cartQts = Object.values(dataBaseCart);
  const totalQts = cartQts.reduce((sum, qty) => sum + qty, 0);
  const [cartCount, setCartCount] = useState(totalQts);
  //console.log('From App', cartCount); //SUCCESS
  return (
    <CartContext.Provider value={[cartCount, setCartCount]}>
    <BrowserRouter>
      <Header1/>           
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/blog" element={''} />
        <Route path="/product/:productId" element={<ProductDetails/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/placeorder" element={<PlaceOrder/>} />
        <Route path="/*" element={<h1>Not Found: 404</h1>} />
      </Routes>         
    </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;