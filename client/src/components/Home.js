import React from "react"
import AllRecipes from './AllRecipes'
import EasyRecipes from "./EasyRecipes"
import RecipeCard from "./RecipeCard"



 function Home({recipes, easyRecipes}){
 
    return (
    <div>
        <h1>Home</h1>
        <div>
            <div>
                <h2>All Recipes</h2>
                <div className="container">
                    <div className="row g-3">
                    {recipes.map((recipe) => (
                    <div className="col-12 col-md-6 col-lg-4">
                    <RecipeCard key={recipe.id} recipe={recipe} />
                    </div>
                ))}
                </div>
            </div>
            <div className="container g-3"></div>
            </div>
            <div>
                <h2>Easy to make in 20 Minutes or less</h2>
                <div className="container">
                    <div className="row g-3">
                    {easyRecipes.map((easyRecipe) => (
                    <div className="col-12 col-md-6 col-lg-4">
                    <EasyRecipes key={easyRecipe.id} easyRecipe={easyRecipe} />
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