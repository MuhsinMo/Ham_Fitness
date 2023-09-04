import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { workoutOptions, fetchData, youtubeOptions} from '../utils/fetchData';
import Detail from '../components/Detail';
import WorkoutVideos from '../components/WorkoutVideos';
import SimilarWorkouts from '../components/SimilarWorkouts';

const WorkoutPlan = () => {

  const [workoutDetail, setworkoutDetail] = useState({});
  const [workoutVideos, setWorkoutVideos] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipmentWorkout, setEquipmentWorkout] = useState([]);

  const{id} = useParams(); 

  useEffect(() => {
    window.scrollTo({top:0, behavior:'smooth'});

    const fetchWorkoutData = async () => {

      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const workoutDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, workoutOptions);
      setworkoutDetail(workoutDetailData);

      const workoutVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${workoutDetailData.name}`, youtubeOptions);
      setWorkoutVideos(workoutVideoData.contents);

      const targetMuscleData = await fetchData(`${exerciseDbUrl}/exercises/target/${workoutDetailData.target}`, workoutOptions);
      setTargetMuscle(targetMuscleData);

      const equipmentWorkoutleData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${workoutDetailData.equipment}`, workoutOptions);
      setEquipmentWorkout(equipmentWorkoutleData);


    }
    fetchWorkoutData();
  }, [id]);

  if(!workoutDetail) return <div>No Data</div>
  
  return (
    <Box sx={{mt: {lg: '96px', xs:'60px'}}}>

      <Detail workoutDetail={workoutDetail} />
      <WorkoutVideos workoutVideos={workoutVideos} name={workoutDetail.name} />
      <SimilarWorkouts targetMuscle={targetMuscle} equipmentWorkout={equipmentWorkout}/>

    </Box>
  )
}

export default WorkoutPlan;