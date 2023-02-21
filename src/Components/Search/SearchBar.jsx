import SearchIcon from "@mui/icons-material/Search";

import "./SearchBar.css";

export default function SearchBar({ SearchValue, handleSearch, placeholder }) {
  return (
    <div>
      <div id="search-icon">
        <SearchIcon />
      </div>
      <div id="search-input">
        <input
          type="text"
          value={SearchValue}
          name="Search"
          placeholder="           Seach For Pet Spaces and Services near you"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}
