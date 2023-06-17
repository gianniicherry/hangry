import styled from "styled-components"

export const RecipeCardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #f5f5f5;
`;

export const RecipeCardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const RecipeCardDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

export const RecipeCardButton = styled.button`
    background-color: #f50057;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d5004e;
  }
`;
