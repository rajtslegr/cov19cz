import React from 'react';
import styled from 'styled-components';
import Pie from '../components/Charts/PieChart';

const PiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

const Pies = ({ data: { infectedByAgeSex } }) => {
  const genderData = [
    {
      key: 'Muž',
      data: infectedByAgeSex[0].infectedByAge.map((o) => o.value).reduce((a, c) => a + c),
    },
    {
      key: 'Žena',
      data: infectedByAgeSex[1].infectedByAge.map((o) => o.value).reduce((a, c) => a + c),
    },
  ];

  const ageData = Object.values(
    infectedByAgeSex[0].infectedByAge.concat(infectedByAgeSex[1].infectedByAge).reduce((a, c) => {
      a[c.age] = a[c.age] || { key: c.age, data: 0 };
      a[c.age].data += c.value;
      return a;
    }, {}),
  );

  return (
    <PiesContainer>
      <Pie data={genderData}>Pohlaví pozitivně testovaných</Pie>
      <Pie data={ageData}>Věk pozitivně testovaných</Pie>
    </PiesContainer>
  );
};

export default Pies;
