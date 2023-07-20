import React, {useContext, useState, useEffect} from 'react'
import {ReviewContainer, RatingContainer, Star, RatingValue, Difficulty, Description} from "../styles/reviews.styles"
import {Label, Input, StyledButton} from '../styles/reviewForm.styles'
import StarRating from './StarRating'
import {UserContext} from "../App"

function Reviews({review, editReview, deleteReview, deleteRatedReview}){
    const [isCurrentUserReview, setIsCurrentUserReview] = useState(false);
    const [editForm, setEditForm] = useState(false)
    const [updatedRating, setUpdatedRating] = useState(0)
    const [updatedDifficulty, setUpdatedDifficulty] = useState('')
    const [updatedDescription, setUpdatedDescription] = useState('')
    const {currentUser} = useContext(UserContext)
    
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
        if (currentUser && currentUser.id === review.user_id) {
          setIsCurrentUserReview(true);
        }
      }, [currentUser, review.user_id]);

      function handleDelete() {
        fetch(`/reviews/${review.id}`, {
          method: 'DELETE',
        })
          .then((response) => {
            if (response.ok) {
              deleteReview(review.id);
              deleteRatedReview(review)
            } else {
              // handle error case
            }
          })
          .catch((error) => {
            // handle error case
          });
      }

      const handleEdit = () => {
        setEditForm(!editForm);
        setUpdatedRating(review.rating);
        setUpdatedDifficulty(review.difficulty);
        setUpdatedDescription(review.description);
      };

      function handleSubmit(e){
        e.preventDefault()
        const updatedReview = {
          ...review, 
          rating: updatedRating,
          difficulty: updatedDifficulty,
          description: updatedDescription
        }
        fetch(`/reviews/${review.id}`, {
          method: "PATCH",
          headers: {'Content-Type' : 'application/json' },
          body: JSON.stringify(updatedReview)
        })
        .then(response => response.json())
        .then((data)=> {
          editReview(data)
          setEditForm(false)
          console.log(currentUser)
        })
      }

    return(
    <ReviewContainer>
      { editForm ? (
          <form onSubmit={handleSubmit}>
          <RatingValue>Current Rating{review.rating}/5</RatingValue>
          <Label>Updated Rating
           <StarRating onChange={setUpdatedRating}/>
          </Label>
          <Label>Updated difficulty
            <Input
              type="text"
              name="Difficulty"
              value={updatedDifficulty}
              onChange={e => setUpdatedDifficulty(e.target.value)}
              >
            </Input>
          </Label>
          <Label>Updated Review
          <Input
              type="text"
              name="Description"
              value={updatedDescription}
              onChange={e => setUpdatedDescription(e.target.value)}
              >
           </Input>
          </Label>
            <StyledButton type="submit">Submit</StyledButton>
          </form>

      ) : (
      <ReviewContainer>
        <RatingContainer>
          <RatingValue>{renderRatingStars(review.rating)}</RatingValue>
        </RatingContainer>
        <Difficulty>Difficulty: {review.difficulty}</Difficulty>
        <Description>{review.description}</Description>
        {isCurrentUserReview && (
        <div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>{editForm ? "cancel" : "edit"}</button>
        </div>
        )}
        </ReviewContainer>
        )}
      </ReviewContainer>
    )
}

export default Reviews