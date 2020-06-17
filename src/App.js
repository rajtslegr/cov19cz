import React from 'react';

import Dashboard from './pages/Dashboard';
import Layout from './utils/hoc/withLayout';
import GlobalStyle from './utils/styles/Global';

function App() {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Dashboard />
      </Layout>
    </>
  );
}

export default App;
