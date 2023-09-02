import React from "react";
import categorias from "../categorias";
import "./Content.css";
import CategorySlider from "../Slider";

const Content = ({ videoData, onDelete}) => {
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
            <CategorySlider 
                videos={videoData.filter((video)=> video.Categoria === category.name)} //los filtra por categorias
                onDelete={onDelete} //icono para borrar videos
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;
