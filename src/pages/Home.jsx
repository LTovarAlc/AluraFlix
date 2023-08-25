import React from "react"
import Header from "../components/Header/Header"
import Content from "../components/content/Content"
import Card from "../components/card/Card"


const Home = ({videoData}) => {
    return <>
        <Header/>
        <Content videoData={videoData}/>
    </>
}

export default Home