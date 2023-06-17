import styled from "styled-components"

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const StyledButton = styled.button`
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
