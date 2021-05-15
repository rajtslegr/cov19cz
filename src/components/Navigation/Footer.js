import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  padding: 0 20px;
  font: inherit;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
`;

const Footer = () => (
  <StyledFooter>
    <p>
      Designed by&nbsp;
      <a href="https://rajtslegr.com" target="_blank" rel="noopener noreferrer">
        rajtslegr.com
      </a>
      ,&nbsp;
      <a href="https://github.com/apifytech/covid-19" target="_blank" rel="noopener noreferrer">
        Data Source
      </a>
    </p>
  </StyledFooter>
);

export default Footer;
