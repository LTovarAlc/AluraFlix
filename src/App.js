import React, { useState, useEffect } from "react";
import "./reset.css";
import "./scrollbar.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import PlayVideo from "./pages/PlayVideo";
import Footer from "./components/Footer/Footer";
import axios from "axios"; // Importa Axios

const App = () => {
  const [videoData, setVideoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddVideo = (newVideoData) => {
    setVideoData((prevData) => [...prevData, newVideoData]);
  };

  useEffect(() => {
    // Realiza una solicitud GET al servidor para obtener los datos de los videos
    axios
      .get("http://localhost:5000/videos")
      .then((response) => {
        // Almacena los datos de los videos en el estado local
        setVideoData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de videos: ", error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home videoData={videoData} />} />
        <Route
          path="/AddVideo"
          element={<FormPage setVideoData={handleAddVideo} />}
        />
        <Route
          path="/VideoPlay/:id"
          element={
            isLoading ? (
              <p>Cargando...</p>
            ) : (
              <PlayVideo videoData={videoData} />
            )
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
