import React from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Chart from '../../components/Charts/BarCharts/VerticaBarChart/VerticalBarChart';

const ChartsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

const VerticalCharts = (props) => {
  const infectedAgeGender = [];

  props.data.infectedByAgeSex[0].infectedByAge.map((group, i) => {
    return infectedAgeGender.push({
      name: group.age,
      Muž: group.value,
      Žena: props.data.infectedByAgeSex[1].infectedByAge[i].value,
    });
  });

  return (
    <Aux>
      <ChartsContainer>
        <Chart data={infectedAgeGender} type="ageGender">
          Věk nakažených podle pohlaví
        </Chart>
        <Chart data={props.data.infectedByRegion} type="region">
          Nakažení podle regionu
        </Chart>
      </ChartsContainer>
    </Aux>
  );
};

export default VerticalCharts;
