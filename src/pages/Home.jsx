import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Content from "../components/content/Content";
import Formulario from '../components/Formulario/Formulario';
import FormPage from './FormPage';

const Home = () => {
    const [videoData, setVideoData] = useState(null);

    return (
        <>
            <Header />
            <Content videoData={videoData} />
        </>
    );
};

export default Home;
