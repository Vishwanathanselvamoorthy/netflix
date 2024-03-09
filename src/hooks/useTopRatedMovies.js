import { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_MOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMoviesApi();
  }, []);
  const getTopRatedMoviesApi = async () => {
    const data = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);

    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;
