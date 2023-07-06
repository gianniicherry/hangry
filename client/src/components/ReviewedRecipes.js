import React, {useContext} from "react"
import ReviewedRecipeCard from "./ReviewedRecipeCard"
import {UserContext} from "../App"

function ReviewedRecipes(){
    const user = useContext(UserContext)

    return (
        <div>
            {user.recipes.map((recipe) => (<ReviewedRecipeCard key={recipe.id} recipe={recipe}/>))}
        </div>
    )
}

export default ReviewedRecipes