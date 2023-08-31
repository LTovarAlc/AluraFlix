import React from 'react';
import categorias from '../categorias';
import './Content.css';
import ReactPlayer from 'react-player';

const Content = ({videoData}) => {
    return (
        <section className="content">
            <div className="content__title">
                <h1 className="content__slogan">¿Qué vamos a ver?</h1>
            </div>
            <div className="content__category">
                {categorias.map(category => (
                    <div key={category.name} className="category">
                        <h2
                            className="category__name"
                            style={{
                                color: category.color,
                                borderLeft: `10px solid ${category.color}`,
                                borderBottom: `5px solid ${category.color}`,
                            }}
                        >
                            {category.name}
                        </h2>
                        <div className="category__cards">
                            {videoData && videoData.Categoria === category.name && (
                                <div className='video-card'>
                                    <ReactPlayer url={videoData.Video} controls={true} />
                                    <h3>{videoData.Titulo}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Content;
