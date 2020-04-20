import React from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Pie from '../../components/Charts/PieCharts/Pie';

const PiesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

const Pies = (props) => {
  const genderData = [
    {
      key: 'Muž',
      data: props.data.infectedByAgeSex[0].infectedByAge
        .map((o) => o.value)
        .reduce((a, c) => {
          return a + c;
        }),
    },
    {
      key: 'Žena',
      data: props.data.infectedByAgeSex[1].infectedByAge
        .map((o) => o.value)
        .reduce((a, c) => {
          return a + c;
        }),
    },
  ];

  const ageData = Object.values(
    props.data.infectedByAgeSex[0].infectedByAge
      .concat(props.data.infectedByAgeSex[1].infectedByAge)
      .reduce((a, c) => {
        a[c.age] = a[c.age] || { key: c.age, data: 0 };
        a[c.age].data += c.value;
        return a;
      }, {}),
  );

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
