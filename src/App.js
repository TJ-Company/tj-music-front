import { IconArrowsSort } from "@tabler/icons-react";
import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { TracksList } from "./components/posts/TracksList";
import songsData from "./metadata/tracks.json";
import { SpecialButton } from "./UI/buttons/SpecialButton/SpecialButton";

function App() {
  const [currentTrack, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
          currentSong={currentTrack}
          isPlaying={isPlaying}
        />
      </main>
      <Footer
        track={currentTrack}
        handleTrackClick={handleTrackClick}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default App;
