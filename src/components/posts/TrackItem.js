import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { PlayPauseButton } from "../../UI/buttons/PlayPauseButton/TrackButton.js";
import "../../UI/buttons/PlayPauseButton/styles/TrackItemButton.css";
import "./TrackItem.css";
import { API_URL } from "../../constants/api.js";

export const TrackItem = (props) => {
  const { track, handleTrackControllerClick, currentTrack, isPlaying } = props;
  const { id, title, author, coverUrl } = track || {};
  const normalizedCover = coverUrl?.replace(/\\/g, "/");

  return (
    <div className="song-item">
      <PlayPauseButton
        className={`song-image-button ${
          currentTrack?.id === track.id ? "currentSong" : ""
        }`}
        onClick={() => handleTrackControllerClick(track)}
        alt={title}
        icon={
          currentTrack && currentTrack.id === track.id && isPlaying ? (
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
