import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   console.log(movies?.title);
  return (
    <div className="px-6 bg-transparent">
      <h1 className="text-2xl font-bold my-5 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
