import React from 'react';

import styled from 'styled-components';

import Card from '../../components/Card/Card';
import helpers from '../../helpers/Helpers';

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 599px) {
    flex-direction: column;
  }
`;

const Cards = ({
  data: {
    lastUpdatedAtSource,
    infected,
    totalTested,
    recovered,
    deceased,
    hospitalized,
    hospitalizationData,
    active,
  },
}) => {
  const lastUpdated = helpers.formatDateTime(lastUpdatedAtSource);

  return (
    <>
      <CardsContainer>
        <Card data={infected} color="#d24040">
          Pozitivně testovaných
        </Card>
        <Card data={totalTested} color="#8884d8">
          Provedených testů
        </Card>
        <Card data={recovered} color="#008000">
          Uzdravených
        </Card>
        <Card data={deceased} color="#808080">
          Úmrtí
        </Card>
      </CardsContainer>
      <CardsContainer>
        <Card data={hospitalized}>Hospitalizováno</Card>
        {/* TODO: temporary fix because of API, should be {critical} */}
        <Card data={hospitalizationData[hospitalizationData.length - 1][2]}>
          Kriticky nakažených
        </Card>
        <Card data={active}>Aktivních případů</Card>
        <Card data={lastUpdated} type="date">
          Poslední aktualizace
        </Card>
      </CardsContainer>
    </>
  );
};

export default Cards;
