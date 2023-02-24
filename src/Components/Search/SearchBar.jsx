import CustomIcons from "../../Utils/Icons/Index";
import PropTypes from "prop-types";
import { Box, TextField } from "@mui/material";

export default function SearchBar({ SearchValue, handleSearch }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "3px solid #f57059",
        borderRadius: "35px",
        width: {
          xl: "500px",
          lg: "500px",
          md: "500px",
          sm: "500px",
        },
        height: "70px",
      }}
    >
      <Box sx={{ pl: "25px" }}>
        <img src={CustomIcons.Search} alt="search" />
      </Box>

      <Box>
        {" "}
        <TextField
          variant="standard"
          sx={{
            width: {
              xl: "400px",
              lg: "400px",
              md: "400px",
              sm: "400px",
              xs: "200px",
            },
            mb: "10px",
            height: "20px",
            borderRadius: "20px",
            border: "none",
            outline: "none",
            fontsize: "larger",
            padding: "20px",
          }}
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
  );
}

SearchBar.propTypes = {
  SearchValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
