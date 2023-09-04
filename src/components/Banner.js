import React from 'react'
import { Typography, Box, Button } from '@mui/material';
import cover from '../media/images/cv.png';

const Banner = () => (

    <Box sx={{ mt:{lg:'212px', xs:'70px'}, ml:{sm:'50px'}}}  position="relative" p="20px">

      <Typography color="#4ECCA3" fontWeight={700} fontSize="26px" >Fitness Warrior</Typography>
      <Typography pr="5px" fontWeight={700} sx={{fontSize:{lg: '35px', xs: '30px'}, fontFamily:'fantasy', color:'#6EAD5C'}} mb="23px" mt="30px">Unlock Your Potential:<br/> Where Dedication <br/>Meets Transformation and<br/>Sweat Becomes Strength.</Typography>
      <Typography marginBottom={4} sx={{fontFamily:'initial'}}>Find the most effective workout for you by searching<br/>
                                    the body part you would like to workout, the equipment<br/>
                                    you would like to use or the name of the workout you<br/>
                                    would like to perform.
      </Typography>
      <Button variant="contained" sx={{backgroundColor: '#4ECCA3', color:'black', textAlign:'center', borderRadius: '30px', fontFamily:'initial'}} href="#workouts" p={2}>Find Work Plans</Button>
      <Typography fontWeight={500} color="#4ECCA3" sx={{opacity: 0.2, display:{lg: 'block', xs:'none'}, padding:'10px'}} fontSize="200px" >Workouts</Typography>
      <img src={cover} alt="banner" className='banner-img' style={{paddingLeft:'5px'}} />


    </Box>
  

)


export default Banner;