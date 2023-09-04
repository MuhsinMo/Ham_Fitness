import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const Workoutcard = ({workout}) => {
  return (
    <Link className= "exercise-card" to={`workout/${workout.id}`}>
        <img src={workout.gifUrl} alt={workout.name} loading="lazy"/>
        <Stack direction="row">
          <Button className= "wrk-btn" sx={{ml: '21px', color:'#fff', background:'#4ECCA3', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
            {workout.bodyPart}

          </Button>
          <Button className= "wrk-btn" sx={{ml: '21px', color:'#fff', background:'orange', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
            {workout.target}

          </Button>
          
        </Stack>
        <Typography fontSize="20px" ml="21px"  mt= "10px" pb= "8px" color="black" textTransform= "capitalize">
              {workout.name}
        </Typography>
    </Link>

  )
}

export default Workoutcard