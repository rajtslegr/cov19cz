import React, { useEffect, useState } from 'react';

import axios from 'axios';
import styled from 'styled-components';

import Loader from '../components/UI/Loader';
import WithError from '../utils/hoc/withError';
import Cards from './Cards';
import HorizontalCharts from './HorizontalCharts';
import Pies from './PieCharts';
import VerticalCharts from './VerticalCharts';

const DashboardContainer = styled.div`
  width: 85%;
  padding: 12px;
  margin: 12px auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: white;

  @media (max-width: 1079px) {
    width: 95%;
  }
`;

const Dashboard = () => {
  const [data, setData] = useState({
    covData: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    const loadData = async () => {
      if (data.loading) {
        await axios
          .get(
            'https://api.apify.com/v2/key-value-stores/K373S4uCFR9W1K8ei/records/LATEST?disableRedirect=true',
          )
          .then((response) => {
            setData({
              ...data,
              covData: response.data,
              loading: false,
            });
          })
          .catch((_error) => {
            setData({
              ...data,
              loading: false,
              error: true,
            });
          });
      }
    };

    loadData();
  });

  let dashboardOutput = <Loader />;

  if (!data.loading && !data.error) {
    dashboardOutput = (
      <WithError>
        <DashboardContainer>
          <Cards data={data.covData} />
          <HorizontalCharts data={data.covData} />
          <Pies data={data.covData} />
          <VerticalCharts data={data.covData} />
        </DashboardContainer>
      </WithError>
    );
  }

  return dashboardOutput;
};

export default Dashboard;
