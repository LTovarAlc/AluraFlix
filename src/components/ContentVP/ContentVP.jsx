import React from "react";
import YouTube from "react-youtube";
import "./ContentVP.css";

const ContentVP = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <p>Video no encontrado</p>;
  }

  return (
    <section className="contentVP">
      <div className="video__comments">
        <div className="video__container">
          {selectedVideo.VideoUrl && (
            <YouTube videoId={selectedVideo.VideoUrl.split("v=")[1]} />
          )}
        </div>
        <div className="comments__container"></div>
      </div>
      <div className="information__video">
        {selectedVideo.Titulo && (
          <h1 className="titleVP">{selectedVideo.Titulo}</h1>
        )}
        <button className="like">
          <img src="./img/favorito.png" alt="Like" className="like__icon" />
        </button>
      </div>
    </section>
  );
};

export default ContentVP;
