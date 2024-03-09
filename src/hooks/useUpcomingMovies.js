import React, { useEffect } from "react";
import { API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUpcomingMoviesApi();
  }, []);
  const getUpcomingMoviesApi = async () => {
    const data = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
