import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Content from "../components/content/Content";

const Home = ({ videoData }) => {
  //estado local para almacenar los datos recuperados del localStorage
  const [storedVideos, setStoredVideos] = useState([]);

  useEffect(() => {
    //Recuperar la lista de videos del localStorage al cargar la página
    const storedVideosData = JSON.parse(localStorage.getItem("videos")) || [];
    setStoredVideos(storedVideosData);
  }, []);

  const handleDelete = (videoId) => {
    const updateVideos = storedVideos.filter((video) => video.id !== videoId);

    setStoredVideos(updateVideos);
    localStorage.setItem("videos", JSON.stringify(updateVideos));
  };

  return (
    <>
      <Header />
      <Content videoData={storedVideos} onDelete={handleDelete} />
    </>
  );
};

export default Home;
