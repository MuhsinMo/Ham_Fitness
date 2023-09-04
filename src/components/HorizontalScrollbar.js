
import React from 'react';
import WorkoutCard from './WorkoutCard';
import BodyPart from './BodyPart';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const slideLeft = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft - 500;
};

const slideRight = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft + 500;
};

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, bodyParts}) => {
  return(
    <div style={{position:'relative', display:'flex', alignItems:'center'}}>
      <ChevronLeftIcon onClick={slideLeft} size={50} sx={{cursor: 'pointer', color:'#4ECCA3'}}/>
      <div id='slider' style={{overflowX:'scroll',scrollMargin:'scroll', whiteSpace:'nowrap', position:'relative', display:'flex', alignItems:'center', padding:'5px'}}>

          {data.map((item) => (
            <div
              key={item.id || item}
              itemID={item.id || item}
              title={item.id || item}
              m="0 40px"
            >
              { bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> :<WorkoutCard workout={item} /> }
            </div>
          ))}

      </div>
      <ChevronRightIcon onClick={slideRight} size={50} sx={{cursor: 'pointer', color:'#4ECCA3'}}/>

    </div>
  )
};

export default HorizontalScrollbar;