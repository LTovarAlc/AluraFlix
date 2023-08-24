import React from "react"
import { useState } from "react"
import Header from "../components/Header/Header"
import Formulario from "../components/Formulario/Formulario"
import Home from './Home'


const FormPage = () => {

    const [videoData, setVideoData] = useState([])

    return <>
    <Header/>
    <Formulario setVideoData={setVideoData}/>
    </>
}

export default FormPage