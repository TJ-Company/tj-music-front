import { IconSearch } from "@tabler/icons-react";
import "./SearchBar.css";

export const SearchBar = (props) => {
  return (
    <form className={"search-bar"}>
      <button type="submit" className="search-button">
        <IconSearch stroke={2} className="search-icon" />
      </button>
      <input
        type="text"
        className="search-input"
        placeholder="Search songs..."
      ></input>
    </form>
  );
};
