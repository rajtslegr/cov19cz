import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 8px;
  padding: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 25%;
  border-radius: 5px;
  text-align: center;

  @media (max-width: 599px) {
    width: 100%;
    margin: 8px 0;
    padding: 8px 0;
  }
`;

const Title = styled.div`
  font-size: 1.4rem;

  @media (max-width: 599px) {
    font-size: 1rem;
  }
`;

const Value = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <Title>{props.children}</Title>
      <Value>{props.data}</Value>
    </StyledCard>
  );
};

export default Card;
