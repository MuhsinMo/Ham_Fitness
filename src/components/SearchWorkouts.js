import React from 'react';
import { Box, Stack, Typography, Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { workoutOptions,fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchWorkouts = ( {setWorkouts, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchWorkoutData = async () => {
      const bodyPartsData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', workoutOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchWorkoutData();
  },[]);


  const handleSearch = async () => {

    if(search)
    {
      const workoutData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', workoutOptions);
      
      const searchedWorkouts = workoutData.filter(
        (item) => item.name.toLowerCase().includes(search)
        ||item.target.toLowerCase().includes(search)
        ||item.equipment.toLowerCase().includes(search)
        ||item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      
      setSearch('');
      setWorkouts(searchedWorkouts);
    }
  };


  return(
    <Stack alignItems="center" mt="38px" justifyContent="center" p="20px">
      
      <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs:'30px' }}} mb="49px" textAlign="center" color="#6EAD5C"> Search or Select the body part you <br/>would like to work on.</Typography>

      <Box position="relative" mb="72px">
        <TextField type="text" placeholder="Search Workouts...." height="72px"  value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}
          sx={{ input:{fontWeight: '700', border: 'none', borderRadius: '40px'}, width:{lg:'1170px', xs:'350px'}}}
        />
        <Button className="search-btn" 
          sx={{backgroundColor: '#4ECCA3', color:'black', textTransform:'none', width:{lg: '173px', xs:'80px'},
          height:'56px', position: 'absolute', right:'0', fontSize:{lg:'20px', xs:'14px'}}}
          onClick={handleSearch}
        >Search</Button>
      </Box>

      <Box sx= {{ position:'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart}/>
      </Box>
    </Stack>
  );
};
  
export default SearchWorkouts;