import React from "react";
import './BlockedMovieListCard.css'


export default function BlockedMovieListCard(props){
  const imgUrl = 'https://image.tmdb.org/t/p/original'

  function handleUnBlock(){
    props.addUnBlock(props.id)
  }
  function handleLike(){
    props.addLike(props.id)
  }

  return (
    <div className="Blocked">
      <img src= {imgUrl + props.poster_path} />
      {/* <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7edsari1arpt91inta3aqqaDEPV.jpg" /> */}
      <div className="buttons">
        <button onClick={handleUnBlock}>UnBlock</button>
        <button onClick={handleLike}>Like</button>
      </div>
    </div>
  )

}