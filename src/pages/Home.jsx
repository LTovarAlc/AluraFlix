import React from "react"
import Header from "../components/Header/Header"
import Content from "../components/content/Content"


const Home = ({videoData}) => {
    return <>
        <Header/>
        <Content videoData={videoData}/>
    </>
}

export default Home