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

const Cards = (props) => {
  const lastUpdated = helpers.formatDateTime(props.data.lastUpdatedAtSource);

  return (
    <>
      <CardsContainer>
        <Card data={props.data.infected} color="#d24040">
          Pozitivně testovaných
        </Card>
        <Card data={props.data.totalTested} color="#8884d8">
          Provedených testů
        </Card>
        <Card data={props.data.recovered} color="#008000">
          Uzdravených
        </Card>
        <Card data={props.data.deceased} color="#808080">
          Úmrtí
        </Card>
      </CardsContainer>
      <CardsContainer>
        <Card data={props.data.hospitalized}>Hospitalizováno</Card>
        {/* TODO: temporary fix because of API, should be {props.data.critical} */}
        <Card data={props.data.hospitalizationData[props.data.hospitalizationData.length - 1][2]}>
          Kriticky nakažených
        </Card>
        <Card data={props.data.active}>Aktivních případů</Card>
        <Card data={lastUpdated} type="date">
          Poslední aktualizace
        </Card>
      </CardsContainer>
    </>
  );
};

export default Cards;
