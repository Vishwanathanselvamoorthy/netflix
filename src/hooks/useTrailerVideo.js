import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (videoId) => {
  const dispatch = useDispatch();
  // const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    getTrailerApi();
  }, []);
  const getTrailerApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterTrailer = json.results.filter(
      (trailer) => trailer.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  return <div></div>;
};

export default useTrailerVideo;
