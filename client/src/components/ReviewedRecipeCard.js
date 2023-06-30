import React from "react"
import { RecipeContainer, RecipeTitle, RecipeCookTime, RecipeIngredients, RecipeInstructions } from '../styles/recipePage.styles';

function ReviewedRecipeCard({recipe}){

    return (
        <div>
            <h1>{recipe.name}</h1>
        </div>
    )

}


export default ReviewedRecipeCard