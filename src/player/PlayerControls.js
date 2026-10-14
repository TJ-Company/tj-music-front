import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipBackFilled,
  IconPlayerSkipForwardFilled,
} from "@tabler/icons-react";
import { PlayPauseButton } from "../UI/buttons/PlayPauseButton/TrackButton";

export const PlayerControls = (props) => {
  const { currentTrack, isPlaying, handleTrackControllerClick, tracks } = props;
  return (
    <div className="main-controls">
      <PlayPauseButton
        className="main-next-prev-button"
        onClick={() =>
          handleTrackControllerClick(tracks[tracks.indexOf(currentTrack) - 1])
        }
        alt={"Previous Track"}
        icon={<IconPlayerSkipBackFilled className="main-next-prev-button" />}
      />
      <PlayPauseButton
        className="play-pause-button"
        onClick={() => handleTrackControllerClick(currentTrack || tracks[0])}
        alt={"Play/Pause"}
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
          handleTrackControllerClick(tracks[tracks.indexOf(currentTrack) + 1])
        }
        alt={"Next Track"}
        icon={<IconPlayerSkipForwardFilled className="main-next-prev-button" />}
      />
    </div>
  );
};
