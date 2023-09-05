import React from "react";
import Boton from "../Boton/Boton";
import { Link } from "react-router-dom";
import "./HeaderVP.css";

const HeaderVP = () => {
  return (
    <>
      <header className="headerVP">
        <Link to={"/"}>
          <img src="/img/Logo.png" alt="Logo" className="logo" />
        </Link>
        <Link to={"/"}>
          <Boton>Inicio</Boton>
        </Link>
      </header>
    </>
  );
};

export default HeaderVP;
