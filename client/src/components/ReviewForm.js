import React, {useState, useContext} from 'react'
import {FormContainer, Label, Input, StyledButton} from '../styles/reviewForm.styles'
import StarRating from './StarRating'
import {UserContext} from '../App'

function ReviewForm({recipeId, onAddReview}){

    const [rating, setRating] = useState(0)
    const [difficulty, setDifficulty] = useState('')
    const [description, setDescription] = useState('')
    const user = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault()
        const reviewData = {
            rating: rating,
            difficulty: difficulty,
            description: description,
            recipe_id: recipeId, 
            user_id: user.id
        }
        fetch(`/recipes/${recipeId}/reviews`,{
            method: "POST",
            headers: {"Content-Type" : "application/json",
        },
            body: JSON.stringify(reviewData)
        })
            .then(r => r.json())
            .then((newReview) => onAddReview(newReview))
            setRating(0)
            setDifficulty('')
            setDescription('')
    }



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
    </FormContainer>
    </div>
    )
}

export default ReviewForm