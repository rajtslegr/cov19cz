import React from 'react';
import styled from 'styled-components';

const ErrorText = styled.div`
  display: block;
  margin-top: 25vh;
  text-align: center;
`;

const Error = () => (
  <ErrorText>
    <h1>Jejda, něco se pokazilo!</h1>
    <p>Neočekávaná struktura na straně datového zdroje.</p>
  </ErrorText>
);

export default Error;
