import React from "react";
import { useParams } from "react-router-dom";
import HeaderVP from "../components/Header/HeaderVP";
import ContentVP from "../components/ContentVP/ContentVP";

const PlayVideo = ({ videoData }) => {
  const { videoUrl } = useParams();
  const selectedVideo = videoData.find((video) => video.VideoUrl === videoUrl);

  return (
    <>
      <HeaderVP />
      {selectedVideo ? (
        <ContentVP selectedVideo={selectedVideo} />
      ) : (
        <p>Video no encontrado</p>
      )}
    </>
  );
};

export default PlayVideo;
