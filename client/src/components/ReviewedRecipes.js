import React, {useContext} from "react"
import ReviewedRecipeCard from "./ReviewedRecipeCard"
import {UserContext} from "../App"

function ReviewedRecipes() {
    const { reviewedRecipes } = useContext(UserContext);
    
    if (reviewedRecipes === null) {
      return <div>Loading...</div>; // or display a loading spinner or message
    }
    
    if (reviewedRecipes.length === 0) {
      return <div>No reviewed recipes available.</div>; // or display a message indicating no recipes
    }
    
    return (
      <div>
        {reviewedRecipes.recipes.map((recipe) => (
          <ReviewedRecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  }

export default ReviewedRecipes