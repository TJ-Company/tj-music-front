import { IconArrowsSort } from "@tabler/icons-react";
import { useState } from "react";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { TracksList } from "../components/posts/TracksList";
import { SpecialButton } from "../UI/buttons/SpecialButton/SpecialButton";
import "./AllTracks.css";
import { useEffect } from "react";
import axios from "axios";

export const AllTracksPage = () => {
  const API_URL = "http://localhost:8080";

  const [currentTrack, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const response = await axios.get(`${API_URL}/tracks`);
      setTracks(response.data);
    };

    fetchTracks();
  }, []);

  const handleTrackClick = (song) => {
    if (currentTrack?.id === song.id) {
      setIsPlaying((prev) => !prev);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
    console.log(`Clicked ${song.title}`);
  };

  return (
    <div className="all-tracks-page">
      <main>
        <div className="filters">
          <SpecialButton
            className="sort-button"
            icon={<IconArrowsSort stroke={2} className="sort-icon" />}
          >
            Sort
          </SpecialButton>
        </div>

        {tracks.length !== 0 ? (
          <TracksList
            className="songs-list"
            tracks={tracks}
            handleTrackClick={handleTrackClick}
            currentSong={currentTrack}
            isPlaying={isPlaying}
          />
        ) : (
          <p style={{ color: `var(--white)` }}>Список песен пуст.</p>
        )}
      </main>
      <Footer
        track={currentTrack}
        handleTrackClick={handleTrackClick}
        isPlaying={isPlaying}
      />
    </div>
  );
};
