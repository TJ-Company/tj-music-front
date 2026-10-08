import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { PlayPauseButton } from "../../UI/buttons/PlayPauseButton/PlayPauseButton.js";
import "../../UI/buttons/PlayPauseButton/styles/TrackItemButton.css";
import "./TrackItem.css";

export const TrackItem = (props) => {
  const { track, handleTrackClick, currentSong, isPlaying } = props;
  const { id, title, author, coverUrl } = track || {};
  const normalizedCover = coverUrl?.replace(/\\/g, "/");
  const API_URL = "http://localhost:8080";

  return (
    <div className="song-item">
      <PlayPauseButton
        className={`song-image-button ${
          currentSong?.id === track.id ? "currentSong" : ""
        }`}
        onClick={() => handleTrackClick(track)}
        alt={title}
        icon={
          currentSong && currentSong?.id === track.id && isPlaying ? (
            <IconPlayerPauseFilled className="song-pause-icon" />
          ) : (
            <IconPlayerPlayFilled className="song-play-icon" />
          )
        }
      >
        <img
          className="song-cover"
          src={`${API_URL}${normalizedCover}`}
          alt={track.title}
        />
      </PlayPauseButton>
      <div className="song-info">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </div>
  );
};
