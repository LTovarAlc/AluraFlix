import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Content from "../components/content/Content";
import axios from "axios";

const Home = () => {
  // Estado local para almacenar los datos de los videos
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET al servidor JSON para obtener la lista de videos
    axios.get("http://localhost:5000/videos")
      .then((response) => {
        // Almacena los datos de los videos en el estado local
        setVideoData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de videos: ", error);
      });
  }, []);

  const handleDelete = (videoId) => {
    // Realiza una solicitud DELETE al servidor JSON para eliminar un video
    axios.delete(`http://localhost:5000/videos/${videoId}`)
      .then(() => {
        // Actualiza el estado local para reflejar la eliminación del video
        setVideoData(videoData.filter((video) => video.id !== videoId));
      })
      .catch((error) => {
        console.error("Error al eliminar el video: ", error);
      });
  };

  return (
    <>
      <Header />
      <Content videoData={videoData} onDelete={handleDelete} />
    </>
  );
};

export default Home;
