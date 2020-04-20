import React from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import helpers from '../../helpers/Helpers';

import BarChart from '../../components/Charts/BarCharts/HorizontalBarChart/HorizontalBarChart';
import LineChart from '../../components/Charts/LineChart/LineChart';

const ChartsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HorizontalCharts = (props) => {
  const prepareChartData = (data, reCalcCum = false) => {
    const dataOutput = [];

    for (let i = 0; i < data.length; i++) {
      let value = 0;

      if (i > 0 && reCalcCum === true) {
        value = data[i].value - data[i - 1].value;
      } else {
        value = data[i].value;
      }

      dataOutput.push({
        key: helpers.formatDate(data[i].date),
        data: value,
      });
    }

    return dataOutput;
  };

  const infectedDaily = prepareChartData(props.data.infectedDaily);
  const testedDaily = prepareChartData(props.data.numberOfTestedGraph, true);
  const infectedCum = prepareChartData(props.data.totalPositiveTests);
  const testedCum = prepareChartData(props.data.numberOfTestedGraph);
  const positivePercent = [];

  testedDaily.map((testDay) => {
    const getDay = infectedDaily.find((infDay) => infDay.key === testDay.key);
    return positivePercent.push({
      key: testDay.key,
      data: (getDay.data / testDay.data) * 100,
    });
  });

  return (
    <Aux>
      <ChartsContainer>
        <BarChart data={infectedDaily} color="#d24040">
          Přírůstek nakažených za daný den
        </BarChart>
        <BarChart data={testedDaily} color="#8884d8">
          Přírůstek otestovaných za daný den
        </BarChart>
        <LineChart data={infectedCum} color="#d24040">
          Kumulativní počet nakažených
        </LineChart>
        <LineChart data={testedCum} color="#8884d8">
          Kumulativní počet otestovaných
        </LineChart>
        <LineChart data={positivePercent} color="black" type="percent">
          Procentuální poměr pozitivních a provedených testů
        </LineChart>
      </ChartsContainer>
    </Aux>
  );
};

export default HorizontalCharts;
