import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { formatDateTime } from '../utils/Helpers';

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
    testedAG,
    testedPCR,
    recovered,
    deceased,
    hospitalized,
    critical,
  },
}) => {
  const lastUpdatedApi = formatDateTime(lastUpdatedAtSource);

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
        <Card data={critical}>Kriticky nakažených</Card>
        <Card data={testedAG}>Počet antigenních testů</Card>
        <Card data={testedPCR}>Počet PCR testů</Card>
        <Card data={lastUpdatedApi} type="date">
          Poslední aktualizace
        </Card>
      </CardsContainer>
    </>
  );
};

export default Cards;
