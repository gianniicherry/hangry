import React from 'react'
import {RecipeCardContainer, RecipeCardTitle, RecipeCardDescription, RecipeCardButton} from "../styles/recipeCard.styles"
import {Link} from 'react-router-dom'

function RecipeCard({recipe}){

    return (
        <RecipeCardContainer>
        <RecipeCardTitle>{recipe.name}</RecipeCardTitle>
        <RecipeCardDescription>Cook Time:{recipe.cook_time} minutes</RecipeCardDescription>
        {/* Additional recipe details */}
        <Link to={`/recipe/${recipe.id}`}>Full Recipe{console.log(recipe)}</Link>
      </RecipeCardContainer>
    )
}

export default RecipeCard