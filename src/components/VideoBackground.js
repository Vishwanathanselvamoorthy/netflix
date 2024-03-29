import { useSelector } from "react-redux";

import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ videoId }) => {
  useTrailerVideo(videoId);
  const trailerKey = useSelector((state) => state.movies.trailerVideo);

  return (
    <div className="w-full h-screen ">
      <iframe
        className="w-[100%] aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
