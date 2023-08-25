import React from "react"
import "./Card.css"

const Card = ( {newVideoData} ) => {
    return (
        <div className="card">
            <video controls className="video">
                <source src={url ? url : file} type="video/mp4" />
            </video>
            <h3 className="card__title">{title}</h3>
        </div>
    )
}

export default Card