import React from 'react';
import { useState } from 'react';
import {Box} from '@mui/material';
import Banner from '../components/Banner';
import SearchWorkouts from '../components/SearchWorkouts';
import Workouts from '../components/Workouts';


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [workouts, setWorkouts] = useState([]);

  return (
    <Box>
      <Banner />
      <SearchWorkouts setWorkouts={setWorkouts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Workouts setWorkouts={setWorkouts} workouts={workouts} bodyPart={bodyPart} />

    </Box>
  )
}

export default Home;