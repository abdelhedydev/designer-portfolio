import React from 'react';
import { DarkModeProvider } from './Contexts/Darkmode';
import Layout from './Components/Layout';
import './Styles/Reset.css';

const App = () => (
  <DarkModeProvider>
    <Layout />
  </DarkModeProvider>
);

export default App;
