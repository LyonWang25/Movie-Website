import React from "react";
import BlockedMovieListCard from '../../Components/Card/BlockedMovieListCard'
import './BlockedMovieList.css'
import { useSelector, useDispatch } from 'react-redux';
import {unblock, blockedToLiked} from '../../features/movieList/AllInOneSlice.js'
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';

export default function BlockedMovieList(){

  const dispatch = useDispatch();
  const movieInfo = useSelector((state)=> state.movieList.movieInfo)

  var blockedIds = useSelector((state) => state.movieList.blocked)
  var blockedInfo = movieInfo.filter(m => blockedIds.includes(m.id)) 
  const [blokedMovies, setBlockedMovies] = React.useState(blockedInfo)

  function UnblockMovie(id){
    dispatch(unblock(id))
    setBlockedMovies(prevMovies =>{return prevMovies.filter(m=>m.id !==id)})
  }

  function LikeMovie(id){
    dispatch(blockedToLiked(id))
    setBlockedMovies(prevMovies =>{return prevMovies.filter(m=>m.id !==id)})
  }

  
  return (
    <div>
      <div>BlockedMovieList</div>
      <div className="container-fluid d-flex flex-wrap justify-content-center">
        {blokedMovies.map(item =>{
          return (
            <BlockedMovieListCard 
            key={uuidv4()}
            poster_path={item.poster_path}
            id = {item.id}
            addUnBlock={UnblockMovie}
            addLike={LikeMovie}
            />
          );
        })}
      </div>
    </div>
  
  )
}