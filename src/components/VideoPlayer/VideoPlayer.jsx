import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoData }) => {
  const { videoId } = useParams();
  const selectedVideo = videoData.find((video) => video.VideoId === videoId);

  if (!selectedVideo) {
    return <div>No se encontró el video.</div>;
  }

  return (
    <div>
      <h1>{selectedVideo.Titulo}</h1>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls={true} />
    </div>
  );
};

export default VideoPlayer;
