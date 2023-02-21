import { Rating } from "@mui/material";
import React, { useState } from "react";

const StarRating = () => {
  const ratingValue = 3.5;

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
