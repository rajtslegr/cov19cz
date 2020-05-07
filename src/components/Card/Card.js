import React from 'react';

import CountUp from 'react-countup';
import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  background-color: white;
  width: 25%;
  text-align: center;
  margin: 8px;
  padding: 12px 8px 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  @media (max-width: 599px) {
    width: 100%;
    margin: 8px 0;
    padding: 12px 0 8px;
  }
`;

const Stripe = styled.div`
  position: absolute;
  width: 100%;
  height: 5px;
  left: 0;
  top: 0;
  background-color: ${(props) => props.color};
  border-radius: 5px 5px 0 0;

  @media (max-width: 599px) {
    width: 100%;
    margin-left: 0;
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
