import React from 'react';

import styled from 'styled-components';

import BarChart from '../components/Charts/BarCharts/HorizontalBarChart';
import LineChart from '../components/Charts/LineChart';
import helpers from '../utils/Helpers';

const ChartsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HorizontalCharts = ({
  data: { infectedDaily, numberOfTestedGraph, totalPositiveTests, hospitalizationData },
}) => {
  const prepareChartData = (data, reCalcCum = false) => {
    const dataOutput = [];

    for (let i = 0; i < data.length; i += 1) {
      let value = 0;

      if (i > 0 && reCalcCum === true) {
        value = dataOutput[i - 1].data + data[i].value;
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

  const infectedDailyOutput = prepareChartData(infectedDaily);
  const testedDailyOutput = prepareChartData(numberOfTestedGraph);
  const infectedCumOutput = prepareChartData(totalPositiveTests, true);
  const testedCumOutput = prepareChartData(numberOfTestedGraph, true);
  const positivePercentOutput = [];
  const hospitalizationDataOutput = [];
  const activeDataOutput = [];

  testedDailyOutput.map((testDay) => {
    const getDay = infectedDailyOutput.find((infDay) => infDay.key === testDay.key);
    return positivePercentOutput.push({
      key: testDay.key,
      data: (getDay.data / testDay.data) * 100,
    });
  });

  hospitalizationData.slice(1).map((day) => {
    return hospitalizationDataOutput.push({
      key: helpers.formatDate(day.reportDate),
      data: day.hosp,
    });
  });

  hospitalizationData.slice(1).map((day) => {
    return activeDataOutput.push({
      key: helpers.formatDate(day.reportDate),
      data: day.active,
    });
  });

  return (
    <ChartsContainer>
      <BarChart data={infectedDailyOutput} color="#d24040">
        Denní přírůstek pozitivně testovaných
      </BarChart>
      <BarChart data={testedDailyOutput} color="#8884d8">
        Denní přírůstek provedených testů
      </BarChart>
      <LineChart data={infectedCumOutput} color="#d24040">
        Kumulativní počet pozitivně testovaných
      </LineChart>
      <LineChart data={testedCumOutput} color="#8884d8">
        Kumulativní počet provedených testů
      </LineChart>
      <LineChart data={positivePercentOutput} color="#000000" type="percent">
        Denní procentuální poměr pozitivně testovaných a provedených testů
      </LineChart>
      <LineChart data={activeDataOutput} color="#ffc658">
        Denní počet aktivních případů
      </LineChart>
      <LineChart data={hospitalizationDataOutput} color="#ff8042">
        Denní počet hospitalizovaných pacientů
      </LineChart>
    </ChartsContainer>
  );
};

export default HorizontalCharts;
