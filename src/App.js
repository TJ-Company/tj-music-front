import { AllTracksPage } from "./pages/AllTracks";
import { MainPage } from "./pages/MainPage";
import {
  BrowserRouter as BrouserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Header } from "./components/header/Header";

function App() {
  return (
    <BrouserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/all-tracks" element={<AllTracksPage />} />
      </Routes>
    </BrouserRouter>
  );
}

export default App;
