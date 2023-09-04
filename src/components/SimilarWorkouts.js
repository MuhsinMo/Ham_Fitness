import React from 'react';
import { Typography, Stack} from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarWorkouts = ({targetMuscle, equipmentWorkout}) => {

  return (
    <Stack sx={{marginTop:{lg: '100px', xs: '0', padding:'20px'}}}>

      <Typography variant="h3" mb="20px">Workouts that target the same muscle group.</Typography>
      <div style={{position: 'relative'}}>
        {targetMuscle.length !==0 ? <HorizontalScrollbar data={targetMuscle} />: <Loader/>}
      </div>
    </Stack>

  )
  
}

export default SimilarWorkouts;