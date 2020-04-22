import React from 'react';
import styled from 'styled-components';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Navigation/Footer/Footer';

const View = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Main = styled.main`
  padding-bottom: 56px;
`;

const Layout = (props) => {
  return (
    <View>
      <Toolbar />
      <Main>{props.children}</Main>
      <Footer />
    </View>
  );
};

export default Layout;
