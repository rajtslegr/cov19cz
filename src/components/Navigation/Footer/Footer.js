import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font: inherit;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Designed by&nbsp;
        <a href="https://rajtslegr.com" target="_blank" rel="noopener noreferrer">
          rajtslegr.com
        </a>
        ,&nbsp;
        <a href="https://github.com/petrpatek/covid-cz" target="_blank" rel="noopener noreferrer">
          Data Source
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
