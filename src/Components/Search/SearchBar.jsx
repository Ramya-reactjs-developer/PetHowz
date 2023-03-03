import CustomIcons from "../../Utils/Icons/Index";
import PropTypes from "prop-types";
import { Box, TextField } from "@mui/material";
import { SearchInputPosition, TextFieldCustomazation } from "./Style";

export default function SearchBar({ SearchValue, handleSearch }) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={SearchInputPosition}>
        <Box sx={{ pl: "25px" }}>
          <img src={CustomIcons.Search} alt="search" />
        </Box>

        <Box>
          {" "}
          <TextField
            variant="standard"
            sx={TextFieldCustomazation}
            type="text"
            name="V"
            value={SearchValue}
            placeholder="Seach For Pet Spaces and Services near you"
            onChange={handleSearch}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

SearchBar.propTypes = {
  SearchValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
