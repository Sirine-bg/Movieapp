import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {movies.map((movie, index) => (<Link to={`/Trailer${index+1}`}>
        <MovieCard movie={movie} key={index}/>
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
