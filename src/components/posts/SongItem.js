import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import "../posts/SongItem.css";

export const SongItem = (props) => {
  const { song } = props;
  const { title, author, cover } = song || {};
  const normalizedCover = cover?.replace(/\\/g, "/");
  const [isPlaying, setPlay] = useState(false);

  const handleClick = () => {
    setPlay(!isPlaying);
    console.log(`Clicked on ${title} by ${author}`);
    console.log(`Music is ${isPlaying ? "paused" : "playing"}`);
  };

  return (
    <div className="song-item">
      <button
        className="song-image-button"
        onClick={handleClick}
        alt={title}
        style={{ backgroundImage: `url(${normalizedCover})` }}
      >
        {isPlaying ? (
          <IconPlayerPauseFilled className="song-pause-icon" />
        ) : (
          <IconPlayerPlayFilled className="song-play-icon" />
        )}
      </button>

      <div className="song-info">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </div>
  );
};
