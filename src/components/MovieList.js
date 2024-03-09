import React from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles


const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 bg-transparent relative z-10 -top-40">
      <h1 className="text-2xl font-semibold my-5 text-white ">{title}</h1>
      <div className="flex">
        <Swiper
          spaceBetween={30}
          slidesPerView={6}
          // Example loop property
        >
          {movies && movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard posterPath={movie.poster_path} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;


