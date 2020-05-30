import React from 'react';

import styled from 'styled-components';

import Chart from '../../components/Charts/BarCharts/VerticaBarChart/VerticalBarChart';

const ChartsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

const VerticalCharts = ({
  data: {
    infectedByAgeSex,
    // countryOfInfection,
    infectedByRegion,
    deceasedByRegion,
  },
}) => {
  const infectedAgeGender = [];
  // const countryOfInf = [];

  infectedByAgeSex[0].infectedByAge.map((group, i) => {
    return infectedAgeGender.push({
      name: group.age,
      Muž: group.value,
      Žena: infectedByAgeSex[1].infectedByAge[i].value,
    });
  });

  // countryOfInfection.map((country) => {
  //   return countryOfInf.push({
  //     name: country.countryName,
  //     value: country.value,
  //   });
  // });

  return (
    <>
      {/* <Chart data={countryOfInf} type="region" color="#d24040">
          Země nákazy
        </Chart> */}
      <ChartsContainer>
        <Chart data={infectedAgeGender} type="ageGender">
          Věk pozitivně testovaných podle pohlaví
        </Chart>
      </ChartsContainer>
      <ChartsContainer>
        <Chart data={infectedByRegion} type="region" color="#d24040">
          Pozitivně testovaní podle regionu
        </Chart>
        <Chart data={deceasedByRegion} type="region" color="#808080">
          Úmrtí podle regionu
        </Chart>
      </ChartsContainer>
    </>
  );
};

export default VerticalCharts;
