import "../posts/SongItem.css";

export const SongItem = (props) => {
  const { song } = props;
  const { title, author, cover } = song || {};
  const normalizedCover = cover?.replace(/\\/g, "/");

  return (
    <div className="song-item">
      <img className="song-image" src={normalizedCover} alt={title} />
      <div className="song-info">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </div>
  );
};
