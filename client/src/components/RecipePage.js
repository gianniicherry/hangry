import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm';
import Reviews from './Reviews'
import { RecipeContainer, RecipeTitle, RecipeCookTime, RecipeIngredients, RecipeInstructions } from '../styles/recipePage.styles';

const RecipePage = () => {
  // Retrieve the recipe ID from the URL parameter
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  

  useEffect(() => {
    // Fetch the recipe data using the recipe ID
    fetch(`http://localhost:4001/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }
  

  return (
    <RecipeContainer>
      <RecipeTitle>{recipe.name}</RecipeTitle>
      <RecipeCookTime>{recipe.cook_time} Minutes</RecipeCookTime>
      <RecipeIngredients>{recipe.ingredients}</RecipeIngredients>
      <br/>
      <RecipeInstructions>{recipe.instructions}</RecipeInstructions>
      <br/>
      <div>
      <ReviewForm recipeId={id}/>
      </div>
      <br/>{recipe.reviews.map((review)=>(
          <Reviews key={review.id} review={review}/>
      ))}
    </RecipeContainer>
  );
};

export default RecipePage;
