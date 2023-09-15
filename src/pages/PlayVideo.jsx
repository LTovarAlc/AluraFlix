import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderVP from "../components/Header/HeaderVP";
import ContentVP from "../components/ContentVP/ContentVP";
import axios from "axios";

const PlayVideo = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null); // Usar useState para el video seleccionado

  useEffect(() => {
    // Realiza una solicitud GET al servidor para obtener el video por su ID
    axios
      .get(`https://fake-api-alura-flix.vercel.app/videos/${id}`)
      .then((response) => {
        // Almacena el video correspondiente en el estado local
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
