import { IconArrowsSort } from "@tabler/icons-react";
import "./App.css";
import { Header } from "./components/header/Header";
import { SongsList } from "./components/posts/SongsList";
import songsData from "./metadata/songs.json";
import { SpecialButton } from "./UI/button/SpecialButton";

function App() {
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

        <SongsList className="songs-list" songs={songsData.songs} />
      </main>
    </div>
  );
}

export default App;
