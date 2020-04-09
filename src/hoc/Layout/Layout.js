import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Layout = (props) => {
  return (
    <div>
      <Toolbar></Toolbar>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
