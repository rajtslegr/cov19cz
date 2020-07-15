import React from 'react';

import styled from 'styled-components';

import Chart from '../components/Charts/BarCharts/VerticalBarChart';

const ChartsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 1199px) {
    flex-direction: column;
  }
`;

const VerticalCharts = ({ data: { infectedByAgeSex } }) => {
  const infectedAgeGender = [];

  infectedByAgeSex[0].infectedByAge.map((group, i) => {
    return infectedAgeGender.push({
      name: group.age,
      Muž: group.value,
      Žena: infectedByAgeSex[1].infectedByAge[i].value,
    });
  });

  return (
    <>
      <ChartsContainer>
        <Chart data={infectedAgeGender} type="ageGender">
          Věk pozitivně testovaných podle pohlaví
        </Chart>
      </ChartsContainer>
    </>
  );
};

export default VerticalCharts;
