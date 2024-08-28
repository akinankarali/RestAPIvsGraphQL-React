import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query {
    users {
      id
      name
      age
    }
  }
`;

const PerformanceComponent = () => {
  const [restTime, setRestTime] = useState(0);
  const [graphqlTime, setGraphqlTime] = useState(0);

  useEffect(() => {
    const fetchRestData = async () => {
      const start = Date.now();
      await axios.get('http://localhost:4000/api/users');
      const end = Date.now();
      setRestTime(end - start);
    };

    fetchRestData();
  }, []);

  const { loading, error } = useQuery(GET_USERS, {
    onCompleted: () => {
      const end = Date.now();
      setGraphqlTime(end - start);
    },
    onError: (error) => console.error(error),
  });

  const start = Date.now();

  return (
    <div>
      <h2>Performance Comparison</h2>
      <p>REST API Call Time: {restTime} ms</p>
      <p>GraphQL API Call Time: {graphqlTime} ms</p>
      {loading && <p>Loading GraphQL data...</p>}
      {error && <p>Error loading GraphQL data: {error.message}</p>}
    </div>
  );
};

export default PerformanceComponent;
