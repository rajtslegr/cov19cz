import React from 'react';

import styled from 'styled-components';

const ErrorText = styled.div`
  display: block;
  text-align: center;
  margin-top: 25vh;
`;

const Error = () => {
  return (
    <ErrorText>
      <h1>Jejda, něco se pokazilo!</h1>
      <p>Neočekávaná struktura na straně datového zdroje.</p>
    </ErrorText>
  );
};

export default Error;
