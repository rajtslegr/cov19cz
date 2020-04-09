import React from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import helpers from '../../helpers/Helpers';

import GrowthChart from '../../components/Chart/Chart';

const ChartsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Cards = (props) => {
  let infectedGrowthData = [];
  let testedGrowthData = [];

  for (let i = 0; i < props.data.infection.length; i++) {
    infectedGrowthData.push({
      key: helpers.formatDate(props.data.infection[i].datum),
      data: props.data.infection[i].pocetDen,
    });
  }
  infectedGrowthData = infectedGrowthData.slice(
    infectedGrowthData.length - 31,
    infectedGrowthData.length,
  );

  for (let i = 0; i < props.data.tests.length; i++) {
    testedGrowthData.push({
      key: props.data.tests[i].datum,
      data: props.data.tests[i]['testy-den'],
    });
  }
  testedGrowthData = testedGrowthData.slice(testedGrowthData.length - 31, testedGrowthData.length);

  return (
    <Aux>
      <ChartsContainer>
        <GrowthChart data={infectedGrowthData}>Přírůstek nakažených za daný den</GrowthChart>
        <GrowthChart data={testedGrowthData}>Přírůstek otestovaných za daný den</GrowthChart>
      </ChartsContainer>
    </Aux>
  );
};

export default Cards;
