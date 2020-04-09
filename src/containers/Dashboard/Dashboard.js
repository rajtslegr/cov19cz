import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Cards from '../Cards/Cards';
import Charts from '../Charts/Charts';
import Loader from '../../components/UI/Loader/Loader';
import Pies from '../Pies/Pies';

const DashboardContainer = styled.div`
  width: 95%;
  margin: 10px auto;
`;

const Dashboard = () => {
  const [data, setData] = useState({
    czechia: [],
    infection: [],
    tests: [],
    persons: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    loadData();
  });

  const loadData = () => {
    if (data.loading) {
      const mzcr = 'https://onemocneni-aktualne.mzcr.cz/api/v1/covid-19/';
      const requestCzechia = axios.get(
        'https://coronavirus-19-api.herokuapp.com/countries/czechia',
      );
      const requestInfection = axios.get(mzcr + 'nakaza.json');
      const requestTests = axios.get(mzcr + 'testy.json');
      const requestPersons = axios.get(mzcr + 'osoby.json');

      Promise.all([requestCzechia, requestInfection, requestTests, requestPersons])
        .then((...responses) => {
          setData({
            ...data,
            czechia: responses[0][0].data,
            infection: responses[0][1].data,
            tests: responses[0][2].data.data,
            persons: responses[0][3].data,
            loading: false,
          });
        })
        .catch((_errors) => {
          setData({
            ...data,
            loading: false,
            error: true,
          });
        });
    }
  };

  let dashboardOutput = <Loader />;
  if (!data.loading) {
    dashboardOutput = (
      <DashboardContainer>
        <Cards data={data.czechia} />
        <Charts data={data} />
        <Pies data={data.persons} />
      </DashboardContainer>
    );
  }

  return dashboardOutput;
};

export default Dashboard;
