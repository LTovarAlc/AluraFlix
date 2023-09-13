import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./ContentVP.css";

const ContentVP = ({ selectedVideo }) => {
  const [comment, setComment] = useState(""); // Estado para el valor del comentario
  const [commentsList, setCommentsList] = useState([]); // Estado para la lista de comentarios

  useEffect(() => {
    // Recuperar comentarios almacenados en localStorage al cargar el componente
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setCommentsList(JSON.parse(storedComments));
    }
  }, []); // [] para que solo se ejecute al cargar el componente

  if (!selectedVideo) {
    return <p>Video no encontrado</p>;
  }

  const playerOptions = {
    width: "100%",
    height: "500px",
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== "") {
      const updatedComments = [...commentsList, comment];
      setCommentsList(updatedComments);
      setComment(""); // Limpia el input después de agregar un comentario
      localStorage.setItem("comments", JSON.stringify(updatedComments));
    }
  };

  return (
    <section className="contentVP">
      <div className="video__comments">
        <div className="video__container">
          {selectedVideo.VideoUrl && (
            <YouTube
              videoId={selectedVideo.VideoUrl.split("v=")[1]}
              opts={playerOptions}
            />
          )}
        </div>
        <div className="comments__container">
          <div className="comments">
            {commentsList.map((comment, index) => (
              <div key={index} className="comment">
                {comment}
              </div>
            ))}
          </div>
          <div className="input__comments">
            <input
              type="text"
              name="Comment"
              id=""
              placeholder="Haz un comentario"
              className="input__comment"
              value={comment}
              onChange={handleCommentChange}
            />
            <input
              type="submit"
              className="submit__comment"
              onClick={handleSubmitComment}
            />
          </div>
        </div>
      </div>
      <div className="information__video">
        {selectedVideo.Titulo && (
          <h1 className="titleVP">{selectedVideo.Titulo}</h1>
        )}
        <button className="like">
          <img src="./img/favorito.png" alt="Like" className="like__icon" />
        </button>
      </div>
    </section>
  );
};

export default ContentVP;
