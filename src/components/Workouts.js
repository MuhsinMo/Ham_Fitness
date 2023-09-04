import React from 'react';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import {Box, Stack, Typography} from '@mui/material';
import {workoutOptions, fetchData} from '../utils/fetchData';
import Loader from './Loader';

import WorkoutCard from '../components/WorkoutCard';

const Workouts = ({ workouts, setWorkouts, bodyPart }) => {

  const [currentPage, setCurrentPage]=useState(1);
  const [workoutsPerPage] = useState(6);

  //pagination
  const indexOfLastExercise = currentPage*workoutsPerPage;
  const indexOfFirstExercise = indexOfLastExercise-workoutsPerPage;
  const currentWorkout = workouts?.slice(indexOfFirstExercise, indexOfLastExercise);



  useEffect(() =>{
    const fetchWorkoutData =async () => {
      let workoutData = [];

      if(bodyPart === 'all')
      {
        workoutData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', workoutOptions)
      }
      else
      {
        workoutData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, workoutOptions);
      }
      
      setWorkouts(workoutData);
    
    }
    fetchWorkoutData();
  },[bodyPart]);

  const paginate =(event, value) => {
    setCurrentPage(value);
    window.scrollTo({top: 1800, behavior:'smooth'})
  };


  if (!currentWorkout?.length) return <Loader />;

  return (
    <Box id="workouts" mt="50px" p="20px"
      sx={{ mt: {lg:'110px'}}}
    >
      <Typography variant="h3" mb="46px" color="#6EAD5C">The Best Workouts Available</Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center"
          sx={{ gap: {lg: '110px', xs:'50px'}}}
      >
        {currentWorkout.map((workout, index) => (
          <WorkoutCard key={index} workout={workout}/>
        ))}
      </Stack>

      <Stack mt="100px">
        {workouts.length > 10 && (
          <Pagination
            color="standard" shape="circular" size="large"
            defaultPage={1} page={currentPage}
            count={Math.ceil(workouts.length/workoutsPerPage)} onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  )
}

export default Workouts