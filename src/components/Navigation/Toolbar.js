import React from 'react';

import Headroom from 'react-headroom';
import styled from 'styled-components';

import erouska from '../../assets/erouska.svg';

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

const Logo = styled.img`
  height: 36px;
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
        <a href="https://erouska.cz/app/sdilej" rel="noopener noreferrer" target="_blank">
          <Logo src={erouska} alt="eRouška" />
        </a>
      </Header>
    </Headroom>
  );
};

export default Toolbar;
