import React from 'react';
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

const GraphQLComponent = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>GraphQL API Users</h1>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GraphQLComponent;
