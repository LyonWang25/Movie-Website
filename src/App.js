import React from "react";
import "./App.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import MovieList from "./containers/Pages/MovieList";
import LikeMovieList from "./containers/Pages/LikeMovieList";
import BlockedMovieList from "./containers/Pages/BlockedMovieList";
import NotFound from "./containers/Pages/NotFound";
import Menu from "./Components/Menu/Menu";
import Home from "./containers/Pages/Home";

function App() {
  return (
    <div>
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/MovieList" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/MovieList" element={<MovieList />} />
          <Route path="/MovieList/LikeMovieList" element={<LikeMovieList />} />
          <Route
            path="/MovieList/BlockedMovieList"
            element={<BlockedMovieList />}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
