import React from 'react';
import Navbar from '../components/molecules/Navbar/Navbar';

const Layout = (props) => {
  return (
    <div id="layout">
      <Navbar />
      <main id="main">
        { props.children }
      </main>
    </div>
  );
};

export default Layout;
