import { IconArrowsSort } from "@tabler/icons-react";
import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { TracksList } from "./components/posts/TracksList";
import songsData from "./metadata/tracks.json";
import { SpecialButton } from "./UI/button/SpecialButton";

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTrackClick = (song) => {
    if (currentSong) {
      if (currentSong.id === song.id) {
        setIsPlaying(!isPlaying);
      } else {
        setCurrentSong(song);
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(true);
      setCurrentSong(song);
    }

    console.log(`Track ${isPlaying ? "playing" : "paused"}`);
    console.log(`Clicked on ${song.title} by ${song.author}`);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="filters">
          <SpecialButton
            className="sort-button"
            icon={<IconArrowsSort stroke={2} className="sort-icon" />}
          >
            Sort
          </SpecialButton>
        </div>

        <TracksList
          className="songs-list"
          tracks={songsData.tracks}
          handleTrackClick={handleTrackClick}
          currentSong={currentSong}
          isPlaying={isPlaying}
        />
      </main>
      <Footer song={currentSong} />
    </div>
  );
}

export default App;
