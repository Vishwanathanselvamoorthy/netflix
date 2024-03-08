import React from "react";
import VideoDetails from "./VideoDetails";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  if (nowPlayingMovies === null) return;
  const movieDetails = nowPlayingMovies[0];

  const { overview, original_title, id } = movieDetails;
  return (
    <div className="">
      <VideoDetails title={original_title} movieDescription={overview} />
      <VideoBackground videoId={id} />
    </div>
  );
};

export default MainContainer;
