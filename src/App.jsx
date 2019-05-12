import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { DarkModeProvider } from './Contexts/Darkmode';
import Layout from './Components/Layout';
import './Styles/Reset.css';

const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjuibv7et3llg01cswnhrmphb/master',
});
const App = () => (
  <ApolloProvider client={client}>
    <DarkModeProvider>
      <Layout />
    </DarkModeProvider>
  </ApolloProvider>
);

export default App;
