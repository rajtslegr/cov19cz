import React from 'react';

import styled from 'styled-components';

const ErrorText = styled.h1`
  display: block;
  text-align: center;
  margin-top: 25vh;
`;

const Error = () => {
  return (
    <div>
      <ErrorText>Jejda, něco se pokazilo!</ErrorText>
    </div>
  );
};

export default Error;
