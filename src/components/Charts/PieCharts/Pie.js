import React from 'react';
import styled from 'styled-components';

import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const PieContainer = styled.div`
  padding: 0 0 40px 0;
  width: 50%;
  height: 32vh;

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
  let colors = [];

  if (props.data.length > 2) {
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
      <Title>{props.children}</Title>
      <ResponsiveContainer width="100%" height="100%">
        {/* <PieChart data={props.data} /> */}
        <PieChart>
          <Pie data={props.data} dataKey="data" nameKey="key" label>
            {props.data.map((_entry, index) => (
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
