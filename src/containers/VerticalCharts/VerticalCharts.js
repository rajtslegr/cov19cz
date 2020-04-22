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
  const countryOfInf = [];

  props.data.infectedByAgeSex[0].infectedByAge.map((group, i) => {
    return infectedAgeGender.push({
      name: group.age,
      Muž: group.value,
      Žena: props.data.infectedByAgeSex[1].infectedByAge[i].value,
    });
  });

  props.data.countryOfInfection.map((country) => {
    return countryOfInf.push({
      name: country.countryName,
      value: country.value,
    });
  });

  return (
    <Aux>
      <ChartsContainer>
        <Chart data={infectedAgeGender} type="ageGender">
          Věk pozitivně testovaných podle pohlaví
        </Chart>
        <Chart data={countryOfInf} type="region" color="#d24040">
          Země nákazy
        </Chart>
      </ChartsContainer>
      <ChartsContainer>
        <Chart data={props.data.infectedByRegion} type="region" color="#d24040">
          Pozitivně testovaní podle regionu
        </Chart>
        <Chart data={props.data.deceasedByRegion} type="region" color="#808080">
          Úmrtí podle regionu
        </Chart>
      </ChartsContainer>
    </Aux>
  );
};

export default VerticalCharts;
