import React from "react";
import { useParams } from "react-router-dom";
import HeaderVP from "../components/Header/HeaderVP";
import ContentVP from "../components/ContentVP/ContentVP";

const PlayVideo = ({ videoData }) => {
  const { id } = useParams();
  const selectedVideo = videoData.find((video) => video.id === id);

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
