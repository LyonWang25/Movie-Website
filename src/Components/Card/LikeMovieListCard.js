import React from "react";
import './LikeMovieListCard.css'


export default function LikeMovieListCard(props){
  const imgUrl = 'https://image.tmdb.org/t/p/original'

  function handleUnlike(){
    props.addUnlike(props.id)
  }
  function handleBlock(){
    props.addBlock(props.id)
  }

  return (
    <div className="Liked">
      <img src= {imgUrl + props.poster_path} />
      {/* <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7edsari1arpt91inta3aqqaDEPV.jpg" /> */}
      <div className="buttons">
        <button onClick={handleUnlike}>Unlike</button>
        <button onClick={handleBlock}>Block</button>
      </div>
    </div>
  )

}
