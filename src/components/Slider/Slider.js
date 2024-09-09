import React from 'react';
import './Slider.css';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

function Slider(props)
{
    var items = [
        {
            name: "AN-NAHL #1",
            description: "Probably the most random thing you have ever seen!",
            img: 'https://wallpapercave.com/wp/wp5735484.jpg'
        },
        {
            name: "AN-NAHL #2",
            description: "Hello World!",
            img: 'https://wallpapercave.com/wp/wp9719231.jpg'
        },
        {
          name: "AN-NAHL #3",
          description: "Hello World!",
          img: 'https://cdn.pixabay.com/photo/2024/01/20/07/05/ai-generated-8520470_1280.png'
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
        <Paper className='carousel'>
            <img src= {props.item.img} alt= {props.item.name}/>
            <div className="img-text">
            <h2>{props.item.name}</h2>
            {/* <p>{props.item.description}</p> */}

            <Button className="CheckButton">
                Check it out!
            </Button>
            </div>           
        </Paper>
    )
}














// const Slider = () => {
//   var items = [
//     {
//         name: "Random Name #1",
//         description: "Probably the most random thing you have ever seen!"
//     },
//     {
//         name: "Random Name #2",
//         description: "Hello World!"
//     }
// ]
//   return (
//     <Carousel
//         className='carousel'
//         next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
//         prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }
//     >
//       <img src = 'https://wallpapercave.com/wp/wp5735484.jpg' alt='An-Nahl'/>  
//       <img src = 'https://wallpapercave.com/wp/wp9719231.jpg' alt='An-Nahl'/>   
//       <img src = 'https://cdn.pixabay.com/photo/2024/01/20/07/05/ai-generated-8520470_1280.png' alt='An-Nahl'/>  
//     </Carousel>
        
//     )
// }

// function Item(props)
// {
//     return (
//       <>
//       <Paper>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>            
//         </Paper>       

//       </>        
//   );
// };

export default Slider;