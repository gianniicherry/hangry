import React from 'react';

const RecipePage = ({ recipe }) => {
  // Retrieve the recipe ID from the URL parameter

  

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.ingredients}</p>
      {console.log(recipe)}
    </div>
  );
};

export default RecipePage;
