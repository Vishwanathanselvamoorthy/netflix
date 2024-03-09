import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoDetails = ({ title, movieDescription }) => {
  return (
    <div className=" w-screen aspect-video absolute pt-[10%] px-24 text-white bg-gradient-to-r from-black/50">
      <h1 className="text-8xl  w-[30%] font-bold font-sans my-5 ">{title}</h1>
      <h2 className="font-semibold text-lg text-gray-300 w-1/2 my-5 ">
        {movieDescription}
      </h2>
      <div className="flex gap-10">
        <button className="bg-white/100 px-10 text-black py-2  font-bold text-lg flex items-center gap-2 rounded-lg">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="bg-gray-600/70 px-10  py-2 font-semibold flex items-center gap-2  text-lg  rounded-lg">
          <FontAwesomeIcon icon={faCircleInfo} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoDetails;
