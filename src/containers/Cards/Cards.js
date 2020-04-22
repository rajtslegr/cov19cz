import React from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Auxiliary/Auxiliary';
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
    <Aux>
      <CardsContainer>
        <Card data={props.data.infected} color="#d24040">
          Pozitvně testovaných
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
        <Card data={props.data.critical}>Kriticky nakažených</Card>
        <Card data={props.data.active}>Aktivních případů</Card>
        <Card data={lastUpdated} type="date">
          Poslední aktualizace
        </Card>
      </CardsContainer>
    </Aux>
  );
};

export default Cards;
