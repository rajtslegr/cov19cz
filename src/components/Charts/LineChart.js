import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  background-color: white;
  box-sizing: border-box;
  height: 38vh;
  padding: 8px;
  margin: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  @media (max-width: 599px) {
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

const Chart = ({ type, data, color, children }) => {
  let tooltip = <Tooltip formatter={(value) => [`Počet: ${value}`]} />;

  if (type === 'percent') {
    tooltip = <Tooltip formatter={(value) => [`Počet: ${value.toFixed(2)} %`]} />;
  } else if (type === 'hospitalization') {
    tooltip = <Tooltip />;
  }

  const dataOutput = data.filter((day) => day.data > 0);
  let chartOutput = (
    <ResponsiveContainer width="100%" height="85%">
      <LineChart
        data={dataOutput}
        margin={{
          top: 20,
          right: 15,
          left: 8,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="key" />
        <YAxis />
        {tooltip}
        <Line dataKey="data" type="monotone" stroke={color} />
      </LineChart>
    </ResponsiveContainer>
  );

  if (type === 'hospitalization') {
    chartOutput = (
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 15,
            left: 8,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="key" />
          <YAxis />
          {tooltip}
          <Line dataKey="Hospitalizováno" type="monotone" stroke="#ffc658" />
          <Line dataKey="Kritických pacientů" type="monotone" stroke="#ff8042" />
          <Line dataKey="Propuštěno" type="monotone" stroke="#008000" />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ChartContainer>
      <Title>{children}</Title>
      {chartOutput}
    </ChartContainer>
  );
};

export default Chart;
