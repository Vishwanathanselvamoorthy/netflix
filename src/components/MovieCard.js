import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-64 ">
      <img
        className="rounded-xl h-64 w-60"
        src={IMG_CDN + posterPath}
        alt="moviePoster"
      />
    </div>
  );
};

export default MovieCard;
