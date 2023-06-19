import { useState } from 'react';
import {StarContainer, Star} from '../styles/starRating.styles'

function StarRating({ onChange }) {
  const [rating, setRating] = useState(0);


  const handleStarClick = (clickedStar) => {
    if (clickedStar === rating) {
      // If the clicked star is already selected, reset the rating
      setRating(0);
      onChange(0);
    } else {
      // Otherwise, update the rating with the clicked star
      setRating(clickedStar);
      onChange(clickedStar);
    }
  };


  return (
    <StarContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={star <= rating}
          onClick={() => handleStarClick(star)}
        >
          ★
        </Star>
      ))}
    </StarContainer>
  );
}

export default StarRating
