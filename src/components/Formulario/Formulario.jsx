import './Formulario.css'

const Formulario = () => {
    return <>
        <section className='section__form'>
            <div className='form__container'>
                <div className='section__title'>
                    <h1 className='form__title'>Publica tu video!</h1>
                </div>
                <form action="" className='form'>
                    <input type="text" name='title' placeholder='Titulo del video...'/>
                    <input type="url" name='url' placeholder='Ingrese url del video...'/>
                    <span className='or'>Ó</span>
                    <input type="file" name="file" id=""/>
                    <select name="category" id="">
                        <option value="categoria">Entretenimiento</option>
                        <option value="categoria">Música</option>
                        <option value="categoria">Cocina</option>
                        <option value="categoria">Educación</option>
                        <option value="categoria">Deportes</option>
                    </select>
                </form>
            </div>
        </section>
    </>
}

export default Formulario