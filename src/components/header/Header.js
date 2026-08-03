import { IconUser } from "@tabler/icons-react";
import { SpecialButton } from "../../UI/button/SpecialButton";
import { SearchBar } from "../../UI/search.bar/SearchBar";
import logo from "../../logo.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header className="app-header">
      <div className="header-branding">
        <img src={logo} alt="TJ Music logo" className="header-logo" />
        <span className="header-title">TJ Music</span>
      </div>
      <div className="header-search">
        <SearchBar />
      </div>
      <div className="header-actions">
        <SpecialButton className="sort-button">All tracks</SpecialButton>
        <SpecialButton
          className="profile-button"
          icon={<IconUser stroke={2} />}
        />
      </div>
    </header>
  );
};
