import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ReviewForm from './ReviewForm';
import Reviews from './Reviews'

const RecipePage = () => {
  // Retrieve the recipe ID from the URL parameter
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [reviews, setReviews] = useState([])

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
      <br/>
      <div>
      <ReviewForm recipeId={id} />
      </div>
      <br/>{recipe.reviews.map((review)=>(
          <Reviews key={review.id} reviews={review}/>
      ))}
    </div>
  );
};

export default RecipePage;
