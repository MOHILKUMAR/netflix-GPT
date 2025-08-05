import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import React, { useEffect } from 'react'



const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMoives = async () => {
   
   const data  = await  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
   const json = await data.json();
  //  console.log(json.results);
   dispatch(addNowPlayingMovies(json.results));
  
  }
  useEffect(()=>{
   getNowPlayingMoives();
  },[]);
}

export default useNowPlayingMovies;