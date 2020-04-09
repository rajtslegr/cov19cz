import React from 'react';
import styled from 'styled-components';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Card from '../../components/Card/Card';

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
  return (
    <Aux>
      <CardsContainer>
        <Card data={props.data.cases}>Počet nakažených</Card>
        <Card data={props.data.totalTests}>Počet otestovaných</Card>
        <Card data={props.data.recovered}>Počet uzdravených</Card>
        <Card data={props.data.deaths}>Počet úmrtí</Card>
      </CardsContainer>
      <CardsContainer>
        <Card data={props.data.todayCases}>Dnes nakažených</Card>
        <Card data={props.data.critical}>Kriticky nakažených</Card>
        <Card data={props.data.active}>Aktivních případů</Card>
        <Card data={props.data.todayDeaths}>Dnes úmrtí</Card>
      </CardsContainer>
    </Aux>
  );
};

export default Cards;
