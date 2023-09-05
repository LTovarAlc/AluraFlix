import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider/Slider.css";
import "./content/Content.css";

const CategorySlider = ({ videos, onDelete }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <div className="category-slider">
      <Slider {...sliderSettings}>
        {videos.map((video) => (
          <Link to={"/VideoPlay"}>
              <div key={video.id} className="video__card">
            <img
              src="/img/borrar.png"
              alt="Delete"
              className="delete"
              onClick={() => onDelete(video.id)}
            />
            <div className="video-info">
              <img
                src={video.Miniatura} // Miniatura del video
                alt={video.Titulo} // Titulo como alt
                className="miniatura"
              />
              <h3 className="title__video">{video.Titulo}</h3>
            </div>
          </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
