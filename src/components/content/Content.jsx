import React from 'react';
import { useEffect } from 'react';
import Card from '../card/Card';
import categorias from '../categorias';
import './Content.css';

const Content = ({ videoData }) => {
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
                                borderLeft: `4px solid ${category.color}`,
                                borderBottom: `8px solid ${category.color}`,
                            }}
                        >
                            {category.name}
                        </h2>
                        <div className="category__cards">
                            {videoData &&
                                videoData
                                    .filter(video => video.selectedCategory === category.name)
                                    .map(video => (
                                        <Card
                                            key={video.id}
                                            title={video.title}
                                            url ={video.url}
                                            file={video.file}
                                        />
                                    ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Content;
