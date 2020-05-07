import React from 'react';

import styled from 'styled-components';

import Footer from '../../components/Navigation/Footer/Footer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const View = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Main = styled.main`
  padding-bottom: 56px;
`;

const Layout = ({ children }) => {
  return (
    <View>
      <Toolbar />
      <Main>{children}</Main>
      <Footer />
    </View>
  );
};

export default Layout;
