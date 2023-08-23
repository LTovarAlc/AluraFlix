import "./Card.css"

const Card = () => {
    return (
        <div className="card">
            <img src="/img/exampleVideo.jpeg" alt="" className="mini"/>
            <h3 className="card__title">Titulo del video</h3>
        </div>
    )
}

export default Card