import React from "react";
import ReactPlayer from "react-player";
import "./ContentVP.css";

const ContentVP = ({ selectedVideo }) => {
  return (
    <section className="contentVP">
      <div className="video__comments">
        <div className="video__container">
          <ReactPlayer
            url={selectedVideo.VideoUrl}
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="comments__container"></div>
      </div>
      <div className="information__video">
        {selectedVideo && <h1 className="titleVP">{selectedVideo.Titulo}</h1>}
        <button className="like">
          <img src="./img/favorito.png" alt="Like" className="like__icon" />
        </button>
      </div>
    </section>
  );
};

export default ContentVP;
