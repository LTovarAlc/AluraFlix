import React, { useState } from 'react';
import CustomSelect from '../select';
import './Formulario.css';
import Boton from '../Boton/Boton';

const Formulario = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [titleError, setTitleError] = useState('');
    const [fileError, setFileError] = useState('');
    const [urlError, setUrlError] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setFileError('');
    };

    const handleCategoryChange = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Title validation
        if (title.trim() === '') {
            setTitleError('El título es requerido.');
        } else if (title.length > 200) {
            setTitleError('El título no puede ser más largo de 200 caracteres.');
        } else {
            setTitleError('');
        }

        // URL and File validation
        if (url.trim() === '' && !selectedFile) {
            setUrlError('Debe ingresar una URL o subir un archivo.');
            setFileError('');
        } else {
            setUrlError('');
        }

        // Category validation
        if (selectedCategory === '') {
            // You can set an error message for the category if needed
        }

        // If all validations pass, you can proceed with form submission
        if (!titleError && !urlError && selectedCategory !== '' && (url.trim() !== '' || selectedFile)) {
            // Perform form submission logic here
            console.log('Form submitted successfully');
        }
    };

    const categoryOptions = [
        'Entretenimiento',
        'Música',
        'Cocina',
        'Educación',
        'Deportes',
    ];

    return (
        <section className='section__form'>
            <div className='form__container'>
                <div className='section__title'>
                    <h1 className='form__title'>Publica tu video!</h1>
                </div>
                <form onSubmit={handleSubmit} className='form'>
                    <input
                        type="text"
                        name='title'
                        placeholder='Titulo del video...'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onFocus={(e) => e.target.classList.add('input-focus')}
                        onBlur={(e) => e.target.classList.remove('input-focus')}
                        className='input-blur' 
                    />
                    {titleError && <span className='error'>{titleError}</span>}

                    <input
                        type="url"
                        name='url'
                        placeholder='Ingrese url del video...'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        onFocus={(e) => e.target.classList.add('input-focus')}
                        onBlur={(e) => e.target.classList.remove('input-focus')}
                        className='input-blur'
                    />
                    {urlError && <span className='error'>{urlError}</span>}

                    <span className='or'>Ó</span>

                    <label htmlFor="fileInput" className="custom-file-upload">
                        <i className="material-icons"><img src="/img/upload.png" alt=""/></i> Subir archivo (mp4)
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        name="file"
                        accept='video/mp4'
                        onChange={handleFileChange}
                    />
                    {selectedFile && <p className="selected-file">Archivo seleccionado: {selectedFile.name}</p>}
                    {fileError && <span className='error'>{fileError}</span>}

                    <CustomSelect
                        options={categoryOptions}
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    />
                    {selectedCategory === '' && <span className='error'>Debe seleccionar una categoría.</span>}

                    <button type="submit" className='btn__publicar'>Publicar</button>
                </form>
            </div>
        </section>
    );
}

export default Formulario;


//HACER QUE LOS DATOS DEL FORMULARIO SE GUARDEN EN UN OBJETO PARA HACER LA CARD DE VIDEO.