import React from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartContainer = styled.div`
  background-color: white;
  width: 50%;
  box-sizing: border-box;
  height: 72vh;
  padding: 8px;
  margin: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  @media (max-width: 599px) {
    width: 100%;
    margin: 8px 0;
    padding: 8px 0;
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
      <BarChart
        data={props.data}
        layout="vertical"
        margin={{
          top: 20,
          right: 10,
          left: 8,
        }}
      >
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
      <BarChart
        data={props.data}
        layout="vertical"
        margin={{
          top: 20,
          right: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" tick={{ fontSize: 7 }} interval={0} />
        <Tooltip
          formatter={(value) => {
            return [`Počet: ${value}`];
          }}
        />
        <Bar dataKey="value" fill={props.color} />
      </BarChart>
    );
  }

  return (
    <ChartContainer>
      <Title>{props.children}</Title>
      <ResponsiveContainer width="100%" height="92%">
        {bars}
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default Chart;
