import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  NOW_PLAYING_API,
  API_OPTIONS,
  POPULAR_MOVIES,
  POPULAR_MOVIES_API,
} from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularMoviesApi();
  }, []);

  const getPopularMoviesApi = async () => {
    const data = await fetch(POPULAR_MOVIES_API, API_OPTIONS);

    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
};
export default usePopularMovies;
