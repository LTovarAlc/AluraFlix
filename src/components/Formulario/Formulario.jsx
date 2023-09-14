import React, { useState } from "react";
import "./Formulario.css";
import categorias from "../categorias";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Formulario = ({ setVideoData }) => {
  const [titulo, setTitulo] = useState("");
  const [urlVideo, setUrlVideo] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const [tituloError, setTituloError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [categoriaError, setCategoriaError] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Valids
    let hasErrors = false;

    if (titulo.length > 200) {
      setTituloError("El título no puede exceder los 200 caracteres");
      hasErrors = true;
    } else {
      setTituloError("");
    }

    if (!urlVideo.includes("www.youtube.com")) {
      setUrlError("El URL debe ser de un video de YouTube");
      hasErrors = true;
    } else {
      setUrlError("");
    }

    if (categorySelected === "") {
      setCategoriaError("Debes seleccionar una categoría");
      hasErrors = true;
    } else {
      setCategoriaError("");
    }

    if (!hasErrors) {
      try {
        // Extraer el ID del video de YouTube desde la URL
        const videoId = urlVideo.match(/v=([^&]+)/)[1];
        console.log("video ID", videoId);

        // Realizar una solicitud a la API de YouTube para obtener la miniatura
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCQ4mACoTHcMp3kGgxniRq7eEA9CL5JSJM&part=snippet&id=${videoId}`
        );
        console.log("API Response:", response);

        const videoThumbnail =
          response.data.items[0].snippet.thumbnails.medium.url;
        console.log("Video Thumbnail:", videoThumbnail);

        // Generar un id
        const id = uuidv4();

        const videoData = {
          id: id,
          Titulo: titulo,
          VideoUrl: urlVideo,
          Categoria: categorySelected,
          Miniatura: videoThumbnail,
        };

        console.log("VideoData: ", videoData);

        await axios.post("http://localhost:5000/videos", videoData);

        setVideoData((prevData) => [...prevData, videoData]);

        // Redirigir al usuario a la página principal después de enviar el formulario
        navigate("/");
      } catch (error) {
        console.error("Error al obtener datos de YouTube: ", error);
      }
    }
  };

  return (
    <section className="section__form">
      <div className="form__container">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="form__title">Publica tu video!</h1>
          <input
            type="text"
            placeholder="Titulo del video..."
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          {tituloError && <span className="error">*{tituloError}*</span>}
          <input
            type="url"
            placeholder="Url del video (YouTube)..."
            value={urlVideo}
            onChange={(e) => setUrlVideo(e.target.value)}
          />
          {urlError && <span className="error">*{urlError}*</span>}
          <select
            name="categorias"
            id="selectCategory"
            value={categorySelected}
            onChange={(e) => setCategorySelected(e.target.value)}
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map((categoria) => (
              <option key={categoria.name} value={categoria.name}>
                {categoria.name}
              </option>
            ))}
          </select>
          {categoriaError && <span className="error">*{categoriaError}*</span>}
          <button className="submit" type="submit">
            Publicar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Formulario;
