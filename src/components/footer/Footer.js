import "../../UI/button/SpecialButton.css";
import "./Footer.css";

export const Footer = (props) => {
  const { song } = props;
  const { id, title, author, cover } = song || {};
  const normalizedCover = cover?.replace(/\\/g, "/");

  return (
    song && (
      <footer className="app-footer">
        <div className="footer-track">
          <img
            className="footer-song-image"
            src={normalizedCover}
            alt={title}
          />
          <div className="footer-song-info">
            <h3>{title}</h3>
            <p>{author}</p>
          </div>
        </div>
        <div className="footer-controls">
          <button className="footer-button">Home</button>
          <button className="footer-button">Search</button>
          <button className="footer-button">Library</button>
        </div>
      </footer>
    )
  );
};
