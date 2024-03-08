import React from "react";

const VideoDetails = ({ title, movieDescription }) => {
  return (
    <div className=" w-screen aspect-video absolute pt-[20%] px-24 text-white bg-gradient-to-r from-black/50">
      <h1 className="text-5xl font-bold font-sans my-5 ">{title}</h1>
      <h2 className="font-semibold w-1/2 my-5 ">{movieDescription}</h2>
      <div className="flex justify-between w-44">
        <button className="bg-gray-600/100 px-4 py-2 font-semibold  rounded-lg">
          Play
        </button>
        <button className="bg-gray-600/70 px-4 py-2 font-semibold  rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoDetails;
