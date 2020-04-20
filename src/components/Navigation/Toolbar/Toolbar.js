import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';

const Header = styled.header`
  height: 56px;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  font: inherit;
  font-weight: bold;
`;

const Toolbar = () => {
  return (
    <Headroom>
      <Header>
        <Title>
          <span role="img" aria-label="Emoji bakterie">
            🦠&nbsp;
          </span>
          cov19cz
        </Title>
        <p>
          <a href="https://rajtslegr.com" target="_blank" rel="noopener noreferrer">
            rajtslegr.com
          </a>
          ,&nbsp;
          <a href="https://github.com/petrpatek/covid-cz" target="_blank" rel="noopener noreferrer">
            Data Source
          </a>
        </p>
      </Header>
    </Headroom>
  );
};

export default Toolbar;
