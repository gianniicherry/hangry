import React, {useState, useContext} from 'react'
import {FormContainer, Label, Input, StyledButton} from '../styles/reviewForm.styles'
import StarRating from './StarRating'
import {UserContext} from '../App'

function ReviewForm({recipeId, onAddReview, handleNewUserReview, recipe}){

    const [rating, setRating] = useState(0)
    const [difficulty, setDifficulty] = useState('')
    const [description, setDescription] = useState('')
    const { currentUser, setReviewedRecipes } = useContext(UserContext);
    const [invalidForm, setInvalidForm] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    

    function handleSubmit(e) {
        e.preventDefault();
      if(currentUser) {
        const reviewData = {
          rating: rating,
          difficulty: difficulty,
          description: description,
          recipe_id: recipeId,
          user_id: currentUser.id,
        };
      
        fetch(`/recipes/${recipeId}/reviews`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reviewData),
        })
        .then((r) => {
          if (r.ok) {
            r.json().then((newReview) => {onAddReview(newReview);
              const updatedRecipes = [...currentUser.recipes, recipe];
              const updatedReviews = [...currentUser.reviews, newReview];
              setReviewedRecipes({...currentUser, recipes: updatedRecipes, reviews: updatedReviews })
              setInvalidForm(false)
              setRating(0);
              setDifficulty('');
              setDescription('');
              })
          } else {
            setInvalidForm(true)
            setErrorMessage("Form cannot be blank!")
          }
    })
      }else {
        setInvalidForm(true)
        setErrorMessage("need to be signed in!")
      }}



    return(
        <div>
        <h1>Add a new review</h1>
    <FormContainer>
        <form onSubmit={handleSubmit}>
            <Label> rating:
            <StarRating onChange={setRating} />
            </Label>
            <Label> difficulty:
                <Input
                    type="text"
                    name="difficulty"
                    value={difficulty}
                    onChange={e => setDifficulty(e.target.value)}
                >
                </Input>
            </Label>
            <Label> review:
                <Input
                    type="text"
                    name="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                >
                </Input>
            </Label>
            <StyledButton type="submit">Submit</StyledButton>
        </form>
        <div>
        {invalidForm ? <p>{errorMessage}</p> : ""}
      </div>
    </FormContainer>

    </div>
    )
}

export default ReviewForm;