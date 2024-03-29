import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  // const popularMovies = useSelector((state) => state.movies);
  return (
    <div className="bg-black ">
      {/* <div className="-mt-96 relative z-20"> */}
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular Movies" movies={movies.popularMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      {/* </div> */}
    </div>
  );
};

export default SecondaryContainer;
