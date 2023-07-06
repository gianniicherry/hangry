import React from 'react'
import {ReviewContainer, RatingContainer, Star, RatingValue, Difficulty, Description} from "../styles/reviews.styles"

function Reviews({review, user}){
    
    
    const renderRatingStars = (rating) => {
        const filledStars = rating;
        const emptyStars = 5 - filledStars;
    
        const stars = [];
    
        for (let i = 0; i < filledStars; i++) {
          stars.push(<Star key={`filled_${i}`}>&#9733;</Star>);
        }
    
        for (let i = 0; i < emptyStars; i++) {
          stars.push(<Star key={`empty_${i}`}>&#9734;</Star>);
        }
    
        return stars;
      };

    return(
        <ReviewContainer>
        <RatingContainer>
          <RatingValue>{renderRatingStars(review.rating)}</RatingValue>
        </RatingContainer>
        <Difficulty>Difficulty: {review.difficulty}</Difficulty>
        <Description>{review.description}</Description>
      </ReviewContainer>
    )
}

export default Reviews