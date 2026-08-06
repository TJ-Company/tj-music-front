import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { PlayPauseButton } from "../../UI/buttons/PlayPauseButton/PlayPauseButton.js";
import "../../UI/buttons/PlayPauseButton/styles/TrackItemButton.css";
import "../posts/TrackItem.css";

export const TrackItem = (props) => {
  const { track, handleTrackClick, currentSong, isPlaying } = props;
  const { id, title, author, cover } = track || {};
  const normalizedCover = cover?.replace(/\\/g, "/");

  return (
    <div className="song-item">
      <PlayPauseButton
        className="song-image-button"
        onClick={() => handleTrackClick(track)}
        alt={title}
        style={{ backgroundImage: `url(${normalizedCover})` }}
        icon={
          currentSong && currentSong?.id === track.id && isPlaying ? (
            <IconPlayerPauseFilled className="song-pause-icon" />
          ) : (
            <IconPlayerPlayFilled className="song-play-icon" />
          )
        }
      />
      <div className="song-info">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </div>
  );
};
