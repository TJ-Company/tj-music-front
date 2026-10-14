import { useState, useEffect, useRef } from "react";

export const usePlayer = (tracks) => {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!currentTrack || !audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Ошибка воспроизведения:", error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [currentTrack, isPlaying]);

  const handleTrackControllerClick = (song) => {
    if (!song) return;

    if (currentTrack?.id === song.id) {
      setIsPlaying((prev) => !prev);
    } else {
      setCurrentTrack(song);
      setIsPlaying(true);
      console.log(`Clicked ${song.title}`);
    }
  };

  const handleTrackEnded = () => {
    if (!currentTrack || tracks.length === 0) return;

    const currentIndex = tracks.findIndex(
      (track) => track.id === currentTrack.id,
    );

    const nextIndex = (currentIndex + 1) % tracks.length;

    setCurrentTrack(tracks[nextIndex]);
    setIsPlaying(true);
  };

  return {
    audioRef,
    currentTrack,
    isPlaying,
    handleTrackControllerClick,
    handleTrackEnded,
  };
};
