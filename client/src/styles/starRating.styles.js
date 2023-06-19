import styled from 'styled-components';

export const StarContainer = styled.div`
  display: inline-block;
`;

export const Star = styled.span`
  color: ${(props) => (props.filled ? 'gold' : '#ccc')};
  cursor: pointer;
`;