import styled from 'styled-components'

export const LogoContainer = styled.div`
    display: flex;
    text-align: center;
`;

export const Logo = styled.h1`
  font-size: 36px;
  text-align: center;
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
`;

export const Label = styled.label`
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export const SubmitButton = styled.input`
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0069d9;
  }
`;