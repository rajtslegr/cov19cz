import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Navigation/Footer';
import Toolbar from '../../components/Navigation/Toolbar';

const View = styled.div`
  position: relative;
  min-width: 100%;
  min-height: 100vh;
`;

const Main = styled.main`
  padding-bottom: 56px;
`;

const WithLayout = ({ children }) => (
  <View>
    <Toolbar />
    <Main>{children}</Main>
    <Footer />
  </View>
);

export default WithLayout;
