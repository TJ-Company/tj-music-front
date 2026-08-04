import { TrackItem } from "./TrackItem";
import "./TracksList.css";

export const TracksList = (props) => {
  const tracks = props.tracks.map((track, index) => {
    return (
      <TrackItem
        key={index}
        track={track}
        handleTrackClick={props.handleTrackClick}
        currentSong={props.currentSong}
        isPlaying={props.isPlaying}
      />
    );
  });

  return <div className={props.className}>{tracks}</div>;
};
