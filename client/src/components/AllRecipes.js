import React from 'react'

function AllRecipes({recipe}){
    return (
       <div className="container">
           <h1>{recipe.name}</h1>
       </div> 
    )
}


export default AllRecipes