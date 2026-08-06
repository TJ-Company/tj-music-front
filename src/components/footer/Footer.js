import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipBackFilled,
  IconPlayerSkipForwardFilled,
} from "@tabler/icons-react";
import { PlayPauseButton } from "../../UI/buttons/PlayPauseButton/PlayPauseButton";
import "../../UI/buttons/PlayPauseButton/styles/NextPrevButton.css";
import "../../UI/buttons/PlayPauseButton/styles/PlayPauseButton.css";
import "./Footer.css";

export const Footer = (props) => {
  const { track, handleTrackClick, isPlaying } = props;
  const { id, title, author, cover } = track || {};
  const normalizedCover = cover?.replace(/\\/g, "/");

  return (
    track && (
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
          <PlayPauseButton
            className="play-pause-button"
            alt={title}
            icon={<IconPlayerSkipBackFilled className="next-prev-button" />}
          />
          <PlayPauseButton
            className="play-pause-button"
            onClick={() => handleTrackClick(track)}
            alt={title}
            icon={
              isPlaying ? (
                <IconPlayerPauseFilled className="player-pause-icon" />
              ) : (
                <IconPlayerPlayFilled className="player-play-icon" />
              )
            }
          />
          <PlayPauseButton
            className="play-pause-button"
            alt={title}
            icon={<IconPlayerSkipForwardFilled className="next-prev-button" />}
          />
        </div>
      </footer>
    )
  );
};
