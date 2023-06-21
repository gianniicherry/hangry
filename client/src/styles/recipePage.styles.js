import styled from 'styled-components'

export const RecipeContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const RecipeTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const RecipeCookTime = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const RecipeIngredients = styled.ul`
  list-style-type: disc;
  margin-bottom: 20px;
`;

export const RecipeIngredient = styled.li`
  margin-bottom: 5px;
`;

export const RecipeInstructions = styled.ol`
  counter-reset: step-counter;
  margin-bottom: 20px;
`;