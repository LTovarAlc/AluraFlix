import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider/Slider.css";
import "./content/Content.css";

const CategorySlider = ({ videos, onDelete }) => {

  const isTablet = useMediaQuery({
    query: "(min-width: 820px) and (max-width: 1180px)",
  });

  const isSmallScreen = useMediaQuery({
    query: "(min-width: 390px) and (max-width: 819px)",
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: isSmallScreen ? 1 : (isTablet ? 3 : 4),
    slidesToScroll: isSmallScreen ? 1 : (isTablet ? 3 : 4),
  };

  return (
    <div className="category-slider">
      <Slider {...sliderSettings}>
        {videos.map((video) => (
          <Link to={`/VideoPlay/${video.id}`} key={video.id}>
            <div className="video__card">
              <img
                src="/img/borrar.png"
                alt="Delete"
                className="delete"
                onClick={(e) => {
                  e.preventDefault();
                  onDelete(video.id);
                }}
              />
              <div className="video-info">
                <img
                  src={video.Miniatura}
                  alt={video.Titulo}
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
