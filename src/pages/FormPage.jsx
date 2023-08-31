import React from "react"
import Header from "../components/Header/Header"
import Formulario from "../components/Formulario/Formulario"



const FormPage = ({setVideoData}) => {

    return <>
    <Header/>
    <Formulario setVideoData={setVideoData}/>
    </>
}

export default FormPage