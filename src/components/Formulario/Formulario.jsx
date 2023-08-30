import React from "react"
import "./Formulario.css"
import categorias from "../categorias"


const Formualario = () => {

    return <section className="section__form">
        <form className="form">
            <h1 className="form__title">Publica tu video!</h1>
            <form className="form">
                <input type="text" placeholder="Titulo del video..." />
                <input type="url" placeholder="Url del video (YouTube)..."/>
                <select name="categorias" id="selectCategory">
                    {categorias.map(categoria => (
                        <option key={categoria.name} value={categoria.name}>
                            {categoria.name}
                        </option>
                    ))}
                </select>
            </form>
        </form>
    </section>
}

export default Formualario