import React from 'react';
import Header from './Header';
import Categories from './Categories';
import Footer from './Footer';
import '../Styles/AppStyle.css';

const Layout = () => (
  <div className="app">
    <Header />
    <Categories />
    <Footer />
  </div>
);

export default Layout;
