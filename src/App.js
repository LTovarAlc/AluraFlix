import React from "react";
import { useState } from "react";
import "./reset.css";
import "./scrollbar.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";
import PlayVideo from "./pages/PlayVideo";
import Footer from "./components/Footer/Footer";

function App() {
  const [videoData, setVideoData] = useState([]);
  const handleAddVideo = (newVideoData) => {
    setVideoData([...videoData, newVideoData]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home videoData={videoData} />} />
        <Route
          path="/AddVideo"
          element={<FormPage setVideoData={handleAddVideo} />}
        />
        <Route
          path="/VideoPlay/:videoUrl"
          element={<PlayVideo videoData={videoData} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
