import React from 'react';
import styled from 'styled-components';
import { BarChart } from 'reaviz';

const ChartContainer = styled.div`
  padding: 0 0 40px 0;
  width: 100%;
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
    <ChartContainer>
      <Title>{props.children}</Title>
      <BarChart data={props.data} />
    </ChartContainer>
  );
};

export default Chart;
