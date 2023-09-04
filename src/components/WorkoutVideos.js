import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';

const WorkoutVideos = ({workoutVideos, name}) => {

  if (!workoutVideos.length) return <Loader />;

  return (

    <Box p="20px" sx={{ marginTop: {lg: '200px', xs:'20px'}}}>
      <Typography variant="h3" mb= "33px" fontSize="40px">
      Watch <span style={{color: '#4ECCA3', textTransform:'capitalize'}}>{name} </span> workout Videos
      </Typography>
      <Stack
        justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{ flexDirection:{lg:"row"}, gap:{lg:'50px', xs: '0'}}}
      >
        {workoutVideos?.slice(0, 6)?.map((item, index) => ( 
          <a 
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{borderRadius:'10%'}} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant= "h5" color="black">
                {item.video.title}
              </Typography>
              <Typography variant= "h7" color="black">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>

        ))}
      </Stack>
    </Box>
  )
}

export default WorkoutVideos;
