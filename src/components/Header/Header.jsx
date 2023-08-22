import "./Header.css"
import Boton from "../Boton/Boton"

const Header = () => {
    return (
        <header className="header">
            <img src="/img/Logo.png" alt="Logo"  className="logo"/>
            <Boton>Crear Video</Boton>
        </header>
    )
}

export default Header