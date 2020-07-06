import React from 'react';
import Navbar from '../components/molecules/Navbar/Navbar';

const Layout = (props) => {
  return (
    <div id="layout">
      <main id="main">
        <Navbar />
        <div>rendered from Layout.jsx</div>
      </main>
    </div>
  );
};

export default Layout;
