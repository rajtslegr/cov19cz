import React from 'react';
import Layout from './hoc/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
