import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Menu.css";

const Menu = () => {
  return (
    <header className={classes.header}>
      <h1>Our Top Rated Movies List</h1>
      <nav>
        <ul>
          <li>
            <NavLink className={classes.active} to="/Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.active} to="/MovieList">
              Movie List
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.active} to="/MovieList/LikeMovieList">
              Like Movie List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classes.active}
              to="/MovieList/BlockedMovieList"
            >
              Blocked Movie List
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
