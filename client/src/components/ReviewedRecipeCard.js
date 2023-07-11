import React from "react"
import {Link} from 'react-router-dom'

function ReviewedRecipeCard({recipe}){

    
    return (
        <div>
            <Link to={`/recipe/${recipe.id}`}>
            <h1>{recipe.name}</h1>
            </Link>
        </div>
    )

}


export default ReviewedRecipeCard