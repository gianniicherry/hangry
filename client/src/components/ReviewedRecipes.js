import React, {useState, useEffect} from "react"
import ReviewedRecipeCard from "./ReviewedRecipeCard"

function ReviewedRecipes({user}){
    
    const[recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:4001/users/${user.id}/recipes`)
        .then(r => r.json())
        .then(data => setRecipes(data.reviewed_recipes))
    },[])

    return (
        <div>
            {recipes.map((recipe) => (<ReviewedRecipeCard key={recipe.id} recipe={recipe}/>))}
        </div>
    )
}

export default ReviewedRecipes