import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Cards from '../Cards/Cards';
import HorizontalCharts from '../HorizontalCharts/HorizontalCharts';
import Loader from '../../components/UI/Loader/Loader';
import Pies from '../PieCharts/PieCharts';
import VerticalCharts from '../VerticalCharts/VerticalCharts';

const DashboardContainer = styled.div`
  width: 95%;
  margin: 10px auto;
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
  if (!data.loading) {
    dashboardOutput = (
      <DashboardContainer>
        <Cards data={data.covData} />
        <HorizontalCharts data={data.covData} />
        <VerticalCharts data={data.covData} />
        <Pies data={data.covData} />
      </DashboardContainer>
    );
  }

  return dashboardOutput;
};

export default Dashboard;
