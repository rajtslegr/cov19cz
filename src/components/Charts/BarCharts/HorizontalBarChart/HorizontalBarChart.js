import React from 'react';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush,
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
  return (
    <ChartContainer>
      <Title>{props.children}</Title>
      <ResponsiveContainer width="100%">
        <BarChart
          data={props.data}
          margin={{
            top: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="key"
            height={70}
            interval={0}
            angle={-75}
            textAnchor="end"
            tick={{ fontSize: 12 }}
          />
          <YAxis />
          <Tooltip
            formatter={(value) => {
              return [`Počet: ${value}`];
            }}
          />
          <Brush
            dataKey="key"
            startIndex={props.data.length - 31}
            height={20}
            stroke={props.color}
          />
          <Bar dataKey="data" fill={props.color} label={{ position: 'top', fontSize: '1vw' }} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default Chart;
