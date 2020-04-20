import React from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

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
  let tooltip = (
    <Tooltip
      formatter={(value) => {
        return [`Počet: ${value}`];
      }}
    />
  );

  if (props.type === 'percent') {
    tooltip = (
      <Tooltip
        formatter={(value) => {
          return [`Počet: ${value.toFixed(2)} %`];
        }}
      />
    );
  }
  const dataOutput = props.data.filter((day) => day.data > 0);
  return (
    <ChartContainer>
      <Title>{props.children}</Title>
      <ResponsiveContainer width="100%">
        <LineChart
          data={dataOutput}
          margin={{
            top: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="key" interval={31} />
          <YAxis />
          {tooltip}
          <Line dataKey="data" type="monotone" stroke={props.color} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default Chart;
