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
        <Card data={props.data.infected}>Počet nakažených</Card>
        <Card data={props.data.totalTested}>Počet otestovaných</Card>
        <Card data={props.data.recovered}>Počet uzdravených</Card>
        <Card data={props.data.deceased}>Počet úmrtí</Card>
      </CardsContainer>
      <CardsContainer>
        <Card data={props.data.hospitalized}>Hospitalizováno</Card>
        <Card data={props.data.critical}>Kriticky nakažených</Card>
        <Card data={props.data.active}>Aktivních případů</Card>
        <Card data={lastUpdated}>Poslední aktualizace</Card>
      </CardsContainer>
    </Aux>
  );
};

export default Cards;
