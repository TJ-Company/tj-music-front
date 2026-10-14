import { TrackItem } from "./TrackItem";
import "./TracksList.css";

export const TracksList = (props) => {
  const tracks = props.tracks.map((track, index) => {
    return (
      <TrackItem
        key={index}
        track={track}
        handleTrackControllerClick={props.handleTrackControllerClick}
        currentTrack={props.currentTrack}
        isPlaying={props.isPlaying}
      />
    );
  });

  return <div className={props.className}>{tracks}</div>;
};
