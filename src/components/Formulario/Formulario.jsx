import React, { useState } from "react";
import "./Formulario.css";
import categorias from "../categorias";

const Formulario = () => {
  const [titulo, setTitulo] = useState("");
  const [urlVideo, setUrlVideo] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const [tituloError, setTituloError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [categoriaError, setCategoriaError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validaciones
    let hasErrors = false;

    if (titulo.length > 2) {
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
      console.log("Título:", titulo);
      console.log("URL del video:", urlVideo);
      console.log("Categoría:", categorySelected);
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
