import React from 'react';
import Layout from './utils/hoc/withLayout';
import GlobalStyle from './utils/styles/Global';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Dashboard />
    </Layout>
  );
}

export default App;
