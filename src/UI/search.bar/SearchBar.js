import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import "./SearchBar.css";

export const SearchBar = (props) => {
  const [trackToFind, setTrackToFind] = useState("");

  const handleTrackToFind = (e) => {
    e.preventDefault();
    console.log(`Clickes Search button`);
  };

  return (
    <form className={"search-bar"}>
      <button
        type="submit"
        className="search-button"
        onClick={handleTrackToFind}
      >
        <IconSearch stroke={2} className="search-icon" />
      </button>
      <input
        type="text"
        className="search-input"
        placeholder="Search songs..."
        value={trackToFind}
        onChange={(e) => setTrackToFind(e.target.value)}
      ></input>
    </form>
  );
};
