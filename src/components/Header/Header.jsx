import "./Header.css"
import Boton from "../Boton/Boton"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <Link to={"/"}>
                <img src="/img/Logo.png" alt="Logo"  className="logo"/>
            </Link>
            <Link to="/AddVideo">
                <Boton>Crear Video</Boton>
            </Link>
        </header>
    )
}

export default Header