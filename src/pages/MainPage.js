import "./MainPage.css";
import { PlayerControls } from "../player/PlayerControls";

export const MainPage = (props) => {
  const {
    tracks,
    currentTrack,
    isPlaying,
    handleTrackControllerClick,
  } = props;
  return (
    <div className="all-tracks-page">
      <main>
        <PlayerControls
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          handleTrackControllerClick={handleTrackControllerClick}
          tracks={tracks}
        />
        <div className="track-info">
          <h3 className="track-title">{currentTrack?.title}</h3>
          <p className="track-author">{currentTrack?.author}</p>
        </div>
      </main>
    </div>
  );
};
