import React from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider/Slider.css";
import "./content/Content.css"

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
              width="100%"
              height="100%"
            />
            <h3 className="title__video">{video.Titulo}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
