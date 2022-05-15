import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  like,
  unlike,
  block,
  update,
} from "../../features/movieList/AllInOneSlice";
import MovieListCard from "../../Components/Card/MovieListCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import "./MovieList.css";

const MovieList = () => {
  const dispatch = useDispatch();
  const fetchurl =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=86114ad4ef0d64d69fc3890cc82c2f14&language=en-US&page=";
  const [curpage, setCurpage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState("None");
  const [realData, setRealdata] = useState([]);
  const movieinfos = useSelector((state) => state.movieList.movieInfo);
  const liked = useSelector((state) => state.movieList.liked);
  const blocked = useSelector((state) => state.movieList.blocked);

  /* update data when first render and page changed */
  useEffect(() => {
    if (movieinfos.length < curpage * 20) {
      fetch(fetchurl + curpage)
        .then((response) => response.json())
        .then((data) => {
          const movieThisPage = data.results;
          dispatch(update(movieThisPage));
          setMovies(movieThisPage);
          setSortBy("None");
        });
    } else {
      const movieThisPage = movieinfos.slice(
        (curpage - 1) * 20,
        curpage * 20 + 1
      );
      setMovies(movieThisPage);
      setSortBy("None");
    }
  }, [curpage]);

  /* update data when filter changed */
  useEffect(() => {
    let toSort = [...movies];
    if (sortBy === "Title") {
      setMovies(
        toSort.sort((a, b) => {
          return b.title.localeCompare(a.title);
        })
      );
    } else if (sortBy === "VoteAverage") {
      setMovies(
        toSort.sort((a, b) => {
          return b.vote_average - a.vote_average;
        })
      );
    } else if (sortBy === "VoteCount") {
      setMovies(
        toSort.sort((a, b) => {
          return b.vote_count - a.vote_count;
        })
      );
    } else if (sortBy === "ReleaseDate") {
      setMovies(
        toSort.sort((a, b) => {
          return new Date(b.release_date) - new Date(a.release_date);
        })
      );
    } else {
      setMovies((pre) => pre);
    }
  }, [sortBy]);

  /* update data when liked/blocked/movies changed */
  useEffect(() => {
    let cur = [...movies];
    cur = cur.filter((movie) => {
      return !blocked.includes(movie.id);
    });
    const torender = cur.map((movie) => {
      let likedStatus = false;
      if (liked.includes(movie.id)) {
        likedStatus = true;
      }
      return (
        <MovieListCard
          key={uuidv4()}
          liked={likedStatus}
          id={movie.id}
          image={movie.poster_path}
          title={movie.title}
          rate={movie.vote_average}
          release_date={movie.release_date}
          vote_count={movie.vote_count}
          onUnLiked={unlikeMovie}
          onLiked={likeMovie}
          onBlock={blockMovie}
        />
      );
    });
    setRealdata(torender);
  }, [liked, blocked, movies]);

  function pageUp() {
    setCurpage((prev) => {
      return prev + 1;
    });
  }

  function pageDown() {
    setCurpage((prev) => {
      return prev - 1;
    });
  }

  function fileterTitle() {
    if (sortBy === "Title") {
      let newlist = [...movies];
      setMovies(newlist.reverse());
    } else {
      setSortBy("Title");
    }
  }

  function fileterVoteAverage() {
    if (sortBy === "VoteAverage") {
      let newlist = [...movies];
      setMovies(newlist.reverse());
    } else {
      setSortBy("VoteAverage");
    }
  }

  function fileterReleaseDate() {
    if (sortBy === "ReleaseDate") {
      let newlist = [...movies];
      setMovies(newlist.reverse());
    } else {
      setSortBy("ReleaseDate");
    }
  }

  function filterVoteCount() {
    if (sortBy === "VoteCount") {
      let newlist = [...movies];
      setMovies(newlist.reverse());
    } else {
      setSortBy("VoteCount");
    }
  }

  function blockMovie(id) {
    dispatch(unlike(id));
    dispatch(block(id));
  }

  function likeMovie(id) {
    dispatch(like(id));
  }

  function unlikeMovie(id) {
    dispatch(unlike(id));
  }

  return (
    <div>
      <div>
        {curpage === 1 ? (
          <button disabled>-</button>
        ) : (
          <button className="page-button" onClick={pageDown}>
            -
          </button>
        )}
        <span className="curpage">{curpage}/1000 page</span>
        {curpage === 1000 ? (
          <button disabled>+</button>
        ) : (
          <button className="page-button" onClick={pageUp}>
            +
          </button>
        )}
      </div>
      <div className="mt-3">
        <button className="filter-button" onClick={fileterTitle}>
          Title
        </button>
        <button className="filter-button" onClick={fileterVoteAverage}>
          Vote Average
        </button>
        <button className="filter-button" onClick={fileterReleaseDate}>
          Release Date
        </button>
        <button className="filter-button" onClick={filterVoteCount}>
          Vote Count
        </button>
      </div>
      <div
        className={
          "container-fluid d-flex flex-wrap justify-content-center mt-3"
        }
      >
        {realData}
      </div>
    </div>
  );
};

export default MovieList;
