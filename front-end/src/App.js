  import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './utils/Layout';

import Warehouses from './components/scenes/Warehouses/Warehouses';
import Inventory from './components/scenes/Inventory/Inventory';
import AddNewInventory from './components/scenes/Inventory/AddNewInventory/';
import SpecificWarehouseInventory from './components/scenes/Inventory/SpecificWarehouseInventory';

const  App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={ Inventory } />
          <Route path="/warehouses" component={ Warehouses } />
          <Route path="/warehouses/:id" component={ Warehouses } />
          <Route path="/inventory" exact component={ Inventory } />
          <Route path="/inventory/:id" component={ ItemDetails } />
          <Route path="/NewInventoryItem"><AddNewInventory/></Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;