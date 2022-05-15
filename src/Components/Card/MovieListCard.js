import React from "react";
import "./MovieListCard.css";
const MovieListCard = (props) => {
  function onUnLiked() {
    props.onUnLiked(props.id);
  }

  function onLiked() {
    props.onLiked(props.id);
  }

  function onBlock() {
    props.onBlock(props.id);
  }

  return (
    <>
      <div key={props.id} className="m-3 movie_card">
        <div className="movie_card-container">
          <img
            className="movie_card-poster"
            src={"https://image.tmdb.org/t/p/w300" + props.image}
            alt="movie-poster"
          ></img>
          <div className="movie_card-info">
            <h3>{props.title}</h3>
            <span className="green">{props.rate}</span>
          </div>
          <div className="movie_card_button">
            {props.liked? (
              <button
                className="movie_card_button-like"
                onClick={onUnLiked}
              >
                liked
              </button>
            ) : (
              <button
                className="movie_card_button-like"
                onClick={onLiked}
              >
                like
              </button>
            )}

            <button
              className="movie_card_button-block"
              onClick={() => {
                onBlock();
              }}
            >
              Block
            </button>
          </div>
          <div className="movie_card-releaseDate">
            <h6>Released Date:{props.release_date}</h6>
          </div>
          <div className="movie_card-releaseDate">
            <h6>MovieCount:{props.vote_count}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieListCard;
