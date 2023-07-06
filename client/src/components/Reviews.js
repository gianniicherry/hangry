import React, {useContext, useState, useEffect} from 'react'
import {ReviewContainer, RatingContainer, Star, RatingValue, Difficulty, Description} from "../styles/reviews.styles"
import {UserContext} from "../App"

function Reviews({review}){
    console.log(review)
    const [isCurrentUserReview, setIsCurrentUserReview] = useState(false);
    const user = useContext(UserContext)

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

      useEffect(() => {
        if (user && user.id === review.user_id) {
          setIsCurrentUserReview(true);
        }
      }, [user, review.user_id]);

      function handleDelete() {
        fetch(`/reviews/${review.id}`, {
          method: "DELETE",
        })
          .then(response => {
            if (response.ok) {
              // Handle successful deletion, e.g., update the UI
            } else {
              // Handle error case
            }
          })
          .catch(error => {
            // Handle error case
          });
      }

    return(
    <ReviewContainer>
        <RatingContainer>
          <RatingValue>{renderRatingStars(review.rating)}</RatingValue>
        </RatingContainer>
        <Difficulty>Difficulty: {review.difficulty}</Difficulty>
        <Description>{review.description}</Description>
        {isCurrentUserReview && (
        <button onClick={handleDelete}>Delete</button>
        )}
      </ReviewContainer>
    )
}

export default Reviews