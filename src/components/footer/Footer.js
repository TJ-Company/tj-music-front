import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipBackFilled,
  IconPlayerSkipForwardFilled,
} from "@tabler/icons-react";
import { PlayPauseButton } from "../../UI/buttons/PlayPauseButton/TrackButton";
import "../../UI/buttons/PlayPauseButton/styles/TrackControllerButtons.css";
import "./Footer.css";
import { API_URL } from "../../constants/api";
import { AudioProgress } from "../../player/AudioProgress";
import { useState } from "react";

export const Footer = (props) => {
  const {
    tracks,
    currentTrack,
    handleTrackControllerClick,
    isPlaying,
    isMainPage = false,
    audioRef,
    handleTrackEnded,
  } = props;
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  if (!currentTrack) return null;

  const normalizedCover = currentTrack.coverUrl?.replace(/\\/g, "/");

  const handleProgressChange = (event) => {
    const newTime = Number(event.target.value);

    if (!audioRef.current) return;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <footer className="app-footer">
      <AudioProgress
        currentTime={currentTime}
        duration={duration}
        onChange={handleProgressChange}
      />
      <audio
        ref={audioRef}
        src={currentTrack ? `${API_URL}${currentTrack.audioUrl}` : undefined}
        onTimeUpdate={() => {
          setCurrentTime(audioRef.current.currentTime);
        }}
        onLoadedMetadata={() => {
          setDuration(audioRef.current.duration);
        }}
        onEnded={handleTrackEnded}
      />
      {!isMainPage && (
        <>
          <div className="footer-track">
            <img
              className="footer-song-image"
              src={`${API_URL}${normalizedCover}`}
              alt={currentTrack.title}
            />
            <div className="footer-song-info">
              <h3>{currentTrack.title}</h3>
              <p>{currentTrack.author}</p>
            </div>
          </div>
          <div className="footer-controls">
            <PlayPauseButton
              className="play-pause-button"
              onClick={() =>
                handleTrackControllerClick(
                  tracks[tracks.indexOf(currentTrack) - 1],
                )
              }
              alt={currentTrack.title}
              icon={<IconPlayerSkipBackFilled className="next-prev-button" />}
            />
            <PlayPauseButton
              className="play-pause-button"
              onClick={() => handleTrackControllerClick(currentTrack)}
              alt={currentTrack.title}
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
              onClick={() =>
                handleTrackControllerClick(
                  tracks[tracks.indexOf(currentTrack) + 1],
                )
              }
              alt={currentTrack.title}
              icon={
                <IconPlayerSkipForwardFilled className="next-prev-button" />
              }
            />
          </div>{" "}
        </>
      )}
    </footer>
  );
};
