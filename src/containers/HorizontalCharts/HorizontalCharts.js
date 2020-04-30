import React from 'react';
import styled from 'styled-components';

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

    for (let i = 0; i < data.length; i += 1) {
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
  let hospitalizationData = [];

  testedDaily.map((testDay) => {
    const getDay = infectedDaily.find((infDay) => infDay.key === testDay.key);
    return positivePercent.push({
      key: testDay.key,
      data: (getDay.data / testDay.data) * 100,
    });
  });

  props.data.hospitalizationData.slice(1).map((day) => {
    return (hospitalizationData = [
      {
        key: helpers.formatDate(day[0]),
        Hospitalizováno: day[1],
        'Kritických pacientů': day[2],
      },
      ...hospitalizationData,
    ]);
  });

  return (
    <ChartsContainer>
      <BarChart data={infectedDaily} color="#d24040">
        Denní přírůstek pozitivně testovaných
      </BarChart>
      <BarChart data={testedDaily} color="#8884d8">
        Denní přírůstek provedených testů
      </BarChart>
      <LineChart data={infectedCum} color="#d24040">
        Kumulativní počet pozitivně testovaných
      </LineChart>
      <LineChart data={testedCum} color="#8884d8">
        Kumulativní počet provedených testů
      </LineChart>
      <LineChart data={positivePercent} color="#000000" type="percent">
        Denní procentuální poměr pozitivně testovaných a provedených testů
      </LineChart>
      <LineChart data={hospitalizationData} type="hospitalization">
        Denní počet hospitalizovaných a kriticky nakažených pacientů
      </LineChart>
    </ChartsContainer>
  );
};

export default HorizontalCharts;
