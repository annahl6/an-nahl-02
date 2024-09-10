import React from 'react';
//import './Slider.css';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, CardMedia, Container } from '@mui/material';

function Slider(props){
    var items = [
        {
            name: "AN-NAHL #1",
            description: "Probably the most random thing you have ever seen!",
            img: 'https://cdn.pixabay.com/photo/2017/10/07/01/50/shopping-2825247_1280.png'
        },
        {
            name: "AN-NAHL #2",
            description: "Hello World!",
            img: 'https://cdn.pixabay.com/photo/2017/05/10/12/03/online-shop-2300686_1280.jpg'
        },
        {
          name: "AN-NAHL #3",
          description: "Hello World!",
          img: 'https://plus.unsplash.com/premium_photo-1683288295814-84a199da83d9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper 
        className='carousel'
        sx={{
            //position: 'relative',
            //textAlign: 'center',
            display: 'flex',
        }}
        >
            <CardMedia
            component='img'
            image={props.item.img}
            alt={props.item.name}
            sx={{
                height: {xs: 300, lg: 400},
                width: '50%',
            }}
            />
            <Container disableGutters className="img-text"
            sx={{
                //position: 'absolute',
               // top: '50%',
               // left: '50%',
               // transform: 'translate(-50%, -50%)',
                //p: 2,
                color: 'black',
                //backgroundColor: 'rgba(0, 0, 0, 0.4)',
                //borderRadius: 5,
                fontWeight: 'bold',
                //cursor: 'text',
                //zIndex: 1000,
                width: '50%',
                //maxWidth: 500,
                //boxShadow: 5,
                transition: 'all 0.3s ease',
                // '&:hover': {
                //     transform: 'translate(-50%, -50%) scale(1.05)',
                // }
            }}
            >
            <h2>{props.item.name}</h2>
            <Button className="CheckButton">
                Check it out!
            </Button>
            </Container>           
        </Paper>
    )
}
export default Slider;