import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import bodyImage from '../media/icons/body.png';
import targetImage from '../media/icons/target.png';
import equipmentImage from '../media/icons/equipment.png';

const Detail = ({workoutDetail}) => {

  const {bodyPart, gifUrl, name, target, equipment}= workoutDetail;

  const extraDetail =[
    {
      icon: bodyImage,
      name: bodyPart,
    },
    {
      icon: targetImage,
      name: target,
    },
    {
      icon: equipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center'}}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack sx={{gap: {lg:'35px', xs: '20px' }}}>
        <Typography textTransform="capitalize" color="#6EAD5C" sx={{fontSize: {lg:'64px', xs:'18px' }}} fontWeight={700}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
          Regular exercise improves physical health by enhancing cardiovascular fitness, 
          increasing muscle strength, and supporting weight management. Additionally, it positively impacts 
          mental well-being by reducing stress, boosting mood through the release of endorphins,
          enhancing cognitive function.<span style={{textTransform:'capitalize'}}>{name} </span> is considered one of the best {target} workouts available.
        </Typography>
        {extraDetail?.map((item) => (
        <Stack key={item.name} direction="row" gap="24px" alignItems="center"> 
        <Button sx={{backgroundColor: '#fff2db', borderEndRadius: '50%', width:'100px', height:'100px'}}>
          <img src ={item.icon} alt={bodyPart} style={{height: '100px', weight:'100px'}}/>
        </Button>
        <Typography sx={{fontSize:{lg: '30px', xs:'20px'}}} textTransform="capitalize">
          {item.name}
        </Typography>
        </Stack>
      ))}
      </Stack>
    </Stack>
  )
}

export default Detail;
