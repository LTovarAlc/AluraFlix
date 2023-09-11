import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderVP from "../components/Header/HeaderVP";
import ContentVP from "../components/ContentVP/ContentVP";
import axios from "axios"; // Importa axios

const PlayVideo = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    // Realiza una solicitud GET al servidor para obtener los datos del video por ID
    axios
      .get(`http://localhost:5000/videos/${id}`)
      .then((response) => {
        // Almacena los datos del video en el estado local
        setSelectedVideo(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener el video: ", error);
      });
  }, [id]);

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
