import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipBackFilled,
  IconPlayerSkipForwardFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import { Footer } from "../components/footer/Footer";
import { PlayPauseButton } from "../UI/buttons/PlayPauseButton/PlayPauseButton";
import "./MainPage.css";
import { useEffect } from "react";
import axios from "axios";

export const MainPage = () => {
  const API_URL = "http://localhost:8080";

  const [currentTrack, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks, setTracks] = useState();

  useEffect(() => {
    const fetchTracks = async () => {
      const response = await axios.get(`${API_URL}/tracks`);
      setTracks(response.data);
    };

    fetchTracks();
  }, []);

  const handleTrackControllerClick = (song) => {
    if (currentTrack?.id === song.id) {
      setIsPlaying((prev) => !prev);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
      console.log(`Clicked ${song.title}`);
    }
  };

  return (
    <div className="all-tracks-page">
      <main>
        <div className="main-controls">
          <PlayPauseButton
            className="main-next-prev-button"
            onClick={() =>
              handleTrackControllerClick(
                tracks[tracks.indexOf(currentTrack) - 1],
              )
            }
            alt={"title"}
            icon={
              <IconPlayerSkipBackFilled className="main-next-prev-button" />
            }
          />
          <PlayPauseButton
            className="play-pause-button"
            onClick={() =>
              handleTrackControllerClick(currentTrack || tracks[0])
            }
            alt={"title"}
            icon={
              isPlaying ? (
                <IconPlayerPauseFilled className="main-player-pause-icon" />
              ) : (
                <IconPlayerPlayFilled className="main-player-play-icon" />
              )
            }
          />
          <PlayPauseButton
            className="main-next-prev-button"
            onClick={() =>
              handleTrackControllerClick(
                tracks[tracks.indexOf(currentTrack) + 1],
              )
            }
            alt={"title"}
            icon={
              <IconPlayerSkipForwardFilled className="main-next-prev-button" />
            }
          />
        </div>
        <div className="track-info">
          <h3 className="track-title">{currentTrack?.title}</h3>
          <p className="track-author">{currentTrack?.author}</p>
        </div>
        <audio controls src={`${API_URL}${currentTrack?.audioUrl}`} />
      </main>
      <Footer
        track={currentTrack}
        handleTrackClick={handleTrackControllerClick}
        isPlaying={isPlaying}
        isMainPage={true}
      />
    </div>
  );
};
