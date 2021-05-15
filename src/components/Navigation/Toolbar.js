import React from 'react';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import erouska from '../../assets/erouska.svg';

const Header = styled.header`
  display: flex;
  z-index: 90;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  padding: 0 20px;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  font: inherit;
  font-weight: bold;
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
`;

const Toolbar = () => (
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

export default Toolbar;
