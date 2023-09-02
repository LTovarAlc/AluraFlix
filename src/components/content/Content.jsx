import React from "react";
import categorias from "../categorias";
import "./Content.css";
import ReactPlayer from "react-player";

const Content = ({ videoData, onDelete }) => {
  return (
    <section className="content">
      <div className="content__title">
        <h1 className="content__slogan">¿Qué vamos a ver?</h1>
      </div>
      <div className="content__category">
        {categorias.map((category) => (
          <div key={category.name} className="category">
            <h2
              className="category__name"
              style={{
                color: category.color,
                borderLeft: `10px solid ${category.color}`,
                borderBottom: `5px solid ${category.color}`,
              }}
            >
              {category.name}
            </h2>
            <div className="category__cards">
              {videoData.map(
                (video) =>
                  video.Categoria === category.name && (
                    <div key={video.id} className="video-card">
                      <img
                        src="/img/borrar.png"
                        alt="Delete"
                        className="delete"
                        onClick={() => onDelete(video.id)}
                      />
                      <ReactPlayer
                        url={video.Video}
                        controls={true}
                        width="325px"
                        height="175px"
                      />
                      <h3 className="title__video">{video.Titulo}</h3>
                    </div>
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;
