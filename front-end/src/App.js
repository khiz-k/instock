import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './utils/Layout';

import Warehouses from './components/scenes/Warehouses/Warehouses';
import Inventory from './components/scenes/Inventory/Inventory';
import ItemDetails from './components/scenes/Inventory/molecules/ItemDetails';
import AddNewInventory from './components/scenes/Inventory/AddNewInventory/';

const  App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={ Warehouses } />
          <Route path="/warehouses" component={ Warehouses } />
          <Route path="/warehouses/:id" component={ Warehouses } />
          <Route path="/inventory" component={ Inventory } />
          {/* temp route TODO: resolve */}
          <Route path="/item-details" component={ ItemDetails } />
          <Route path="/NewInventoryItem"><AddNewInventory/></Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
