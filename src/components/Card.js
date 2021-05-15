import React from 'react';

import CountUp from 'react-countup';
import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  width: 25%;
  margin: 8px;
  padding: 12px 8px 8px;
  border-radius: 5px;
  text-align: center;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 599px) {
    width: 100%;
    margin: 8px 0;
    padding: 12px 0 8px;
  }
`;

const Stripe = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-radius: 5px 5px 0 0;
  background-color: ${(props) => props.color};

  @media (max-width: 599px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Title = styled.div`
  font-size: 1.4rem;

  @media (max-width: 1169px) {
    font-size: 1rem;
  }
`;

const Value = styled.div`
  font-weight: bold;
  font-size: 1.5rem;

  @media (max-width: 1169px) {
    font-size: 1.1rem;
  }
`;

const Card = ({ type, data, color, children }) => {
  let valOutput = <CountUp start={0} end={parseFloat(data)} duration={1.5} />;

  if (type === 'date') {
    valOutput = data;
  }

  return (
    <StyledCard>
      <Stripe color={color} />
      <Title>{children}</Title>
      <Value>{valOutput}</Value>
    </StyledCard>
  );
};

export default Card;
