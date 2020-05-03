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
  } else if (props.type === 'hospitalization') {
    tooltip = <Tooltip />;
  }

  const dataOutput = props.data.filter((day) => day.data > 0);
  let chartOutput = (
    <ResponsiveContainer width="100%" height="85%">
      <LineChart
        data={dataOutput}
        margin={{
          top: 20,
          right: 10,
          left: 8,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="key" interval={31} />
        <YAxis />
        {tooltip}
        <Line dataKey="data" type="monotone" stroke={props.color} />
      </LineChart>
    </ResponsiveContainer>
  );

  if (props.type === 'hospitalization') {
    chartOutput = (
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          data={props.data}
          margin={{
            top: 20,
            right: 10,
            left: 8,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="key" interval={31} />
          <YAxis />
          {tooltip}
          <Line dataKey="Hospitalizováno" type="monotone" stroke="#ffc658" />
          <Line dataKey="Kritických pacientů" type="monotone" stroke="#ff8042" />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ChartContainer>
      <Title>{props.children}</Title>
      {chartOutput}
    </ChartContainer>
  );
};

export default Chart;
