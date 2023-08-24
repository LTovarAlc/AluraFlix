import React from "react"
import "./Card.css"

const Card = ( {title, source} ) => {
    return (
        <div className="card">
            <video controls className="video">
                <source src={source} type="video/mp4" />
            </video>
            <h3 className="card__title">{title}</h3>
        </div>
    )
}

export default Card