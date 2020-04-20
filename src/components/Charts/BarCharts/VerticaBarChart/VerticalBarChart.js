import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartContainer = styled.div`
  padding: 0 0 40px 0;
  width: 50%;
  height: 50vh;

  @media (max-width: 599px) {
    width: 100%;
  }
`;

const Title = styled.div`
  padding: 8px;
  font-size: 1.4rem;

  @media (max-width: 599px) {
    font-size: 1rem;
  }
`;

const Chart = (props) => {
  let bars = null;

  if (props.type === 'ageGender') {
    bars = (
      <BarChart data={props.data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Bar dataKey="Muž" fill="#8884d8" />
        <Bar dataKey="Žena" fill="#d24040" />
      </BarChart>
    );
  } else {
    bars = (
      <BarChart data={props.data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" tick={{ fontSize: 7 }} />
        <Tooltip
          formatter={(value) => {
            return [`Počet: ${value}`];
          }}
        />
        <Bar dataKey="value" fill="#d24040" />
      </BarChart>
    );
  }

  return (
    <ChartContainer>
      <Title>{props.children}</Title>
      <ResponsiveContainer width="100%">{bars}</ResponsiveContainer>
    </ChartContainer>
  );
};

export default Chart;
