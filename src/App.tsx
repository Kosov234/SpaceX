import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache(),
});

interface user {
  name: string;
  id: string;
}

function App() {
  const { loading, error, data } = useQuery(gql`
    {
      users {
        name
        id
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <ApolloProvider client={client}>
      {data.users.map(({ name, id }: user) => (
        <div key={id}>
          <p>{name}</p>
        </div>
      ))}
    </ApolloProvider>
  );
}

export default App;
