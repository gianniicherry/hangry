import React from "react"
import RecipeCard from "./RecipeCard"



 function Home({recipes}){
 
    return (
    <div>
        <h1>Home</h1>
        <div>
            <div>
                <h2>All Recipes</h2>
                <div className="container">
                    <div className="row g-3">
                    {recipes.map((recipe) => (
                    <div className="col-12 col-md-6 col-lg-4" key={recipe.id}>
                    <RecipeCard key={recipe.id} recipe={recipe} />
                    </div>
                ))}
                </div>
            </div>
            </div>
            </div>
            </div>
    )
}

export default Home