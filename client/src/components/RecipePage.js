import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'

const RecipePage = () => {
  // Retrieve the recipe ID from the URL parameter
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe data using the recipe ID
    fetch(`http://localhost:4001/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.ingredients}</p>
    </div>
  );
};

export default RecipePage;
