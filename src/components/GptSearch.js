import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { NETFLIX_BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className=" absolute -z-10">
        <img src={NETFLIX_BG_IMG} alt="bg-img" />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestions />
    </div>
  );
};

export default GptSearch;
