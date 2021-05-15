import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import styled from 'styled-components';

const PieContainer = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 42vh;
  margin: 8px;
  padding: 8px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 599px) {
    width: 100%;
    margin: 8px 0;
    padding: 8px 0;
  }
`;

const Title = styled.div`
  padding: 8px;
  font-size: 1.4rem;

  @media (max-width: 1169px) {
    font-size: 1rem;
  }
`;

const Chart = ({ data, children }) => {
  let colors = [];

  if (data.length > 2) {
    colors = [
      '#8884d8',
      '#83a6ed',
      '#8dd1e1',
      '#82ca9d',
      '#a4de6c',
      '#d0ed57',
      '#ffc658',
      '#ff8042',
      '#d24040',
    ];
  } else {
    colors = ['#8884d8', '#d24040'];
  }

  return (
    <PieContainer>
      <Title>{children}</Title>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart
          margin={{
            top: 20,
            left: 20,
          }}
        >
          <Pie data={data} dataKey="data" nameKey="key" label>
            {data.map((_entry, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend align="left" layout="vertical" verticalAlign="middle" />
        </PieChart>
      </ResponsiveContainer>
    </PieContainer>
  );
};

export default Chart;
