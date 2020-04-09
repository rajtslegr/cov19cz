import React from 'react';
import styled from 'styled-components';
import { PieChart } from 'reaviz';

const PieContainer = styled.div`
  padding: 0 0 40px 0;
  width: 50%;
  height: 32vh;
`;

const Title = styled.div`
  padding: 8px;
  font-size: 1.4rem;

  @media (max-width: 599px) {
    font-size: 1rem;
  }
`;

const Chart = (props) => {
  return (
    <PieContainer>
      <Title>{props.children}</Title>
      <PieChart data={props.data} />
    </PieContainer>
  );
};

export default Chart;
