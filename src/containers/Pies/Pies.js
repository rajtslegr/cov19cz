import React from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Pie from '../../components/Pie/Pie';

const PiesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 599px) {
    flex-direction: row;
  }
`;

const Pies = (props) => {
  const genderData = [
    { key: 'Muži', data: 0 },
    { key: 'Ženy', data: 0 },
  ];

  const ageData = [
    { key: '0-14', data: 0 },
    { key: '15-24', data: 0 },
    { key: '25-34', data: 0 },
    { key: '35-44', data: 0 },
    { key: '45-54', data: 0 },
    { key: '55-64', data: 0 },
    { key: '65+', data: 0 },
  ];

  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i].Pohlavi === 'M') {
      genderData[0].data++;
    } else {
      genderData[1].data++;
    }

    if (+props.data[i].Vek > 64) {
      ageData[6].data++;
    } else if (+props.data[i].Vek > 54) {
      ageData[5].data++;
    } else if (+props.data[i].Vek > 44) {
      ageData[4].data++;
    } else if (+props.data[i].Vek > 34) {
      ageData[3].data++;
    } else if (+props.data[i].Vek > 24) {
      ageData[2].data++;
    } else if (+props.data[i].Vek > 14) {
      ageData[1].data++;
    } else if (+props.data[i].Vek < 15) {
      ageData[0].data++;
    }
  }

  return (
    <Aux>
      <PiesContainer>
        <Pie data={genderData}>Pohlaví nakažených</Pie>
        <Pie data={ageData}>Věk nakažených</Pie>
      </PiesContainer>
    </Aux>
  );
};

export default Pies;
