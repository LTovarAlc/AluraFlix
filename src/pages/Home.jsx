import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Content from "../components/content/Content";

const Home = ({ videoData }) => {

    //estado local para almacenar los datos recuperados del localStorage
    const [storageVideoData, setStorageVideoData] = useState(null)

  useEffect(() => {
    //Recuperar datos al reiniciar pagina
    const storedData = localStorage.getItem("videoData");
    if(storedData){
        const parsedData = JSON.parse(storedData)
        setStorageVideoData(parsedData)
    }
  }, []);

  return (
    <>
      <Header />
      <Content videoData={storageVideoData || videoData} />
    </>
  );
};

export default Home;
