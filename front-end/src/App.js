import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './utils/Layout';

import Warehouses from './components/scenes/Warehouses/Warehouses'
import Inventory from './components/scenes/Inventory/Inventory'

const  App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={ Inventory } />
          <Route path="/warehouses" component={ Warehouses } />
          <Route path="/warehouses/:id" component={ Warehouses } />
          <Route path="/inventory" component={ Inventory } />
          <Route path="/inventory/:id" component={ Inventory } />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
