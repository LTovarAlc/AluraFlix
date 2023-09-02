import React, { useState } from "react";
import "./Formulario.css";
import categorias from "../categorias";
import { v4 as uuidv4 } from "uuid";
import { Navigate, useNavigate } from "react-router-dom";

const Formulario = ({ setVideoData }) => {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [urlVideo, setUrlVideo] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const [tituloError, setTituloError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [categoriaError, setCategoriaError] = useState("");
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const handleSubmit = (event) => {
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

    const storedVideos = JSON.parse(localStorage.getItem("videos")) || [];
    const urlExists = storedVideos.some((video) => video.Video === urlVideo);

    if (urlExists) {
      setUrlError("Esa URL ya existe en esta página");
      hasErrors = true;
    }

    if (!hasErrors) {
      const id = uuidv4();

      const videoData = {
        id: id,
        Titulo: titulo,
        Video: urlVideo,
        Categoria: categorySelected,
      };

       // Recuperar la lista actual de videos del localStorage o crear una lista vacía si no existe
       const storedVideos = JSON.parse(localStorage.getItem('videos')) || [];

       // Agregar el nuevo video a la lista
       storedVideos.push(videoData);
 
       // Guardar la lista completa de videos en el localStorage
       localStorage.setItem('videos', JSON.stringify(storedVideos));
 
       // Actualizar el estado local si es necesario
       setVideoData(videoData);

      setVideoData(videoData);
      setFormularioEnviado(true);

      navigate("/");
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
        {/* {formularioEnviado && (
          <div className="card">
            <ReactPlayer
            url={urlVideo}
            width="560"
            height="315"
            controls={true}
            />
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Formulario;
