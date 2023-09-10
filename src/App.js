import React, { useState, useEffect } from "react";
import "./reset.css";
import "./scrollbar.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import PlayVideo from "./pages/PlayVideo";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [videoData, setVideoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddVideo = (newVideoData) => {
    setVideoData((prevData) => [...prevData, newVideoData]);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
              <PlayVideo videoData={videoData} setVideoData={setVideoData} />
            )
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
