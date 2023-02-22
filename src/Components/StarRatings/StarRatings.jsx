import { Rating } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";

const StarRating = ({ Data }) => {
  const ratingValue = Data;
  // 3.5;

  const [value] = useState(ratingValue);

  //   const handleRatingChange = (event, newValue) => {
  //     setValue(newValue);
  //   };

  return (
    <div>
      <Rating
        name="star-rating"
        value={value}
        // onChange={handleRatingChange}
        size="small"
        precision={0.5}
        max={5}
        readOnly
      />
    </div>
  );
};

export default StarRating;
StarRating.propTypes = {
  Data: PropTypes.string.isRequired,
};
