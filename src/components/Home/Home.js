import React, { useEffect } from 'react';
import './Home.css';
import Slider from '../Slider/Slider';
import Products from '../Products/Products';
import ProductData from '../../ProductData/an-nahl.json';

const Home = () => {    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])    
    return (
        <div className='aj'>            
            <Slider/> 
            <Products productData = {ProductData}/>
        </div>
    );
};

export default Home;