import "./Footer.css"

const Footer = () => {
    return <>
    <footer className="footer">
        <div className="nombre">
            <h1>Desarrollado por Luis Tovar</h1>
        </div>
        <div className="redes">
            <a href="https://twitter.com/LTovarDev"><img src="/img/gorjeo.png" alt="" className="iconsRedes"/></a>
            <a href="https://www.linkedin.com/in/ltovardev/"><img src="/img/linkedin.png" alt="" className="iconsRedes"/></a>
            <a href="https://github.com/LTovarAlc"><img src="/img/github.png" alt="" className="iconsRedes"/></a>
            <a href="https://www.instagram.com/luis_tvr__/"><img src="/img/instagram.png" alt="" className="iconsRedes"/></a>
        </div>
    </footer>
    </>
}

export default Footer