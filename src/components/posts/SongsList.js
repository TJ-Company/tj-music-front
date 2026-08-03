import { SongItem } from "./SongItem";
import "./SongsList.css";

export const SongsList = (props) => {
  const songs = props.songs.map((song, index) => {
    return <SongItem key={index} song={song} />;
  });

  return <div className={props.className}>{songs}</div>;
};
