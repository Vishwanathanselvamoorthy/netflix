import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { NOW_PLAYING_API, API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingApi();
  }, []);

  const getNowPlayingApi = async () => {
    const data = await fetch(NOW_PLAYING_API, API_OPTIONS);

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };
};
export default useNowPlayingMovies;
