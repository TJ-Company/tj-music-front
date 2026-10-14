import { AllTracksPage } from "./pages/AllTracks";
import { MainPage } from "./pages/MainPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { useTracks } from "./hooks/useTracks";
import { usePlayer } from "./hooks/usePlayer";

export const AppContent = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  const tracks = useTracks();
  const { audioRef, currentTrack, isPlaying, handleTrackControllerClick, handleTrackEnded } =
    usePlayer(tracks);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              tracks={tracks}
              currentTrack={currentTrack}
              isPlaying={isPlaying}
              handleTrackControllerClick={handleTrackControllerClick}
            />
          }
        />
        <Route
          path="/all-tracks"
          element={
            <AllTracksPage
              tracks={tracks}
              currentTrack={currentTrack}
              isPlaying={isPlaying}
              handleTrackControllerClick={handleTrackControllerClick}
            />
          }
        />
      </Routes>
      <Footer
        tracks={tracks}
        currentTrack={currentTrack}
        handleTrackControllerClick={handleTrackControllerClick}
        isPlaying={isPlaying}
        audioRef={audioRef}
        isMainPage={isMainPage}
        handleTrackEnded={handleTrackEnded}
      />
    </>
  );
};
