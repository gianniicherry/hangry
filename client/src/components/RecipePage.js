import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm';
import Reviews from './Reviews'
import { RecipeContainer, RecipeTitle, RecipeCookTime, RecipeIngredients, RecipeInstructions } from '../styles/recipePage.styles';
import {FormContainer, Label, Input, StyledButton} from '../styles/reviewForm.styles';

const RecipePage = ({user}) => {
  // Retrieve the recipe ID from the URL parameter
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [editForm, setEditForm] = useState(false)
  const [updatedCookTime, setUpdatedCookTime] = useState('');
  const [updatedIngredients, setUpdatedIngredients] = useState('');
  const [updatedInstructions, setUpdatedInstructions] = useState('');

  useEffect(() => {
    // Fetch the recipe data using the recipe ID
    fetch(`/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const handleEdit = () => {
    setEditForm(!editForm);
    setUpdatedCookTime(recipe.cook_time);
    setUpdatedIngredients(recipe.ingredients);
    setUpdatedInstructions(recipe.instructions);
  };

  function handleSubmit(e){
    e.preventDefault()
    const updatedRecipe = {
      ...recipe, 
      cook_time: updatedCookTime,
      ingredients: updatedIngredients,
      instructions: updatedInstructions
    }
    fetch(`/recipes/${id}`, {
      method: "PATCH",
      headers: {'Content-Type' : 'application/json' },
      body: JSON.stringify(updatedRecipe)
    })
    .then(response => response.json())
    .then((data)=> {
      setRecipe(data)
      setEditForm(false)
    })
  }
  

  return (
    <RecipeContainer>
      {editForm ? 
      (<FormContainer>
        <form onSubmit={handleSubmit}>
        <RecipeTitle>{recipe.name}</RecipeTitle>
        <Label>Updated Cook Time
         <Input
            type="text"
            name="Cook Time"
            value={updatedCookTime}
            onChange={e => setUpdatedCookTime(e.target.value)}
            >
         </Input>
        </Label>
        <Label>Updated Ingredients
          <Input
            type="text"
            name="Ingredients"
            value={updatedIngredients}
            onChange={e => setUpdatedIngredients(e.target.value)}
            >
          </Input>
        </Label>
        <Label>Updated Instructions
        <Input
            type="text"
            name="Instructions"
            value={updatedInstructions}
            onChange={e => setUpdatedInstructions(e.target.value)}
            >
         </Input>
        </Label>
          <StyledButton type="submit">Submit</StyledButton>
        </form>
      </FormContainer>)
      : 
      (<>
      <RecipeTitle>{recipe.name}</RecipeTitle>
      <RecipeCookTime>{recipe.cook_time} Minutes</RecipeCookTime>
      <RecipeIngredients>{recipe.ingredients}</RecipeIngredients>
      <br/>
      <RecipeInstructions>{recipe.instructions}</RecipeInstructions>
      <br/>
      </>)}
      <StyledButton onClick={handleEdit}>{editForm ? "Cancel" : "Edit"}</StyledButton>
      <div>
      <ReviewForm recipeId={id} user={user}/>
      </div>
      <br/>{recipe.reviews.map((review)=>(
          <Reviews key={review.id} review={review}/>
      ))}
    </RecipeContainer>
  );
};

export default RecipePage;
