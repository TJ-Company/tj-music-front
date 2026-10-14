import { IconUser } from "@tabler/icons-react";
import { SpecialButton } from "../../UI/buttons/SpecialButton/SpecialButton";
import { SearchBar } from "../../UI/search.bar/SearchBar";
import logo from "../../logo.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="app-header">
      <button onClick={() => navigate("/")} className="header-branding-button">
        <img src={logo} alt="TJ Music logo" className="header-logo" />
        <span className="header-title">TJ Music</span>
      </button>
      <div className="header-search">
        <SearchBar />
      </div>
      <div className="header-actions">
        <SpecialButton
          className="profile-button"
          onClick={() => navigate("/all-tracks")}
        >
          All tracks
        </SpecialButton>
        <SpecialButton
          className="profile-button"
          icon={<IconUser stroke={2} />}
        />
      </div>
    </header>
  );
};
