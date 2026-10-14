import { TracksList } from "../components/posts/TracksList";
import "./AllTracks.css";

export const AllTracksPage = (props) => {
  const { tracks, currentTrack, isPlaying, handleTrackControllerClick } = props;

  return (
    <div className="all-tracks-page">
      <main>
        {tracks.length !== 0 ? (
          <TracksList
            className="songs-list"
            tracks={tracks}
            handleTrackControllerClick={handleTrackControllerClick}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
          />
        ) : (
          <p style={{ color: `var(--white)` }}>Список песен пуст.</p>
        )}
      </main>
    </div>
  );
};
