import { useState } from "react";
import CustomIcons from "../../Utils/Icons/Index";
import "./SearchBar.css";
import PropTypes from "prop-types";

export default function SearchBar({ SearchValue, handleSearch, iconValue }) {
  // const [icon] = useState(iconValue);
  console.log(iconValue, "icon");
  return (
    <div className="Input-Style">
      {/* {iconValue ? (
        ""
      ) : ( */}
      <div id="search-icon">
        <img src={CustomIcons.Search} alt="search" />
      </div>

      <div id="search-input">
        {" "}
        <input
          type="text"
          name="V"
          value={SearchValue}
          placeholder="Seach For Pet Spaces and Services near you"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  SearchValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
