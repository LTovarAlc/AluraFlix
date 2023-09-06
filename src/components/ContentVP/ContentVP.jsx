import "./ContentVP.css";

const ContentVP = () => {
  return (
    <section className="contentVP">
      <div className="video__comments">
        <div className="video__container"></div>
        <div className="comments__container"></div>
      </div>
      <div className="information__video">
        <h1 className="titleVP">*TITULO DEL VIDEO*</h1>
        <button className="like">
            <img src="./img/favorito.png" alt="Like" className="like__icon" />
        </button>
      </div>
    </section>
  );
};

export default ContentVP;
