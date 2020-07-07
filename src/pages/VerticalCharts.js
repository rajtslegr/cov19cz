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

const VerticalCharts = ({
  data: {
    // infectedByAgeSex,
    // countryOfInfection,
    infectedByRegion,
    deceasedByRegion,
    recoveredByRegion,
  },
}) => {
  // const infectedAgeGender = [];
  // const countryOfInf = [];

  // infectedByAgeSex[0].infectedByAge.map((group, i) => {
  //   return infectedAgeGender.push({
  //     name: group.age,
  //     Muž: group.value,
  //     Žena: infectedByAgeSex[1].infectedByAge[i].value,
  //   });
  // });

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
        {/* <Chart data={infectedAgeGender} type="ageGender">
          Věk pozitivně testovaných podle pohlaví
        </Chart> */}
        <Chart data={infectedByRegion} type="region" color="#d24040">
          Pozitivně testovaní podle regionu
        </Chart>
        <Chart data={recoveredByRegion} type="region" color="#008000">
          Uzdravení podle regionu
        </Chart>
        <Chart data={deceasedByRegion} type="region" color="#808080">
          Úmrtí podle regionu
        </Chart>
      </ChartsContainer>
    </>
  );
};

export default VerticalCharts;
