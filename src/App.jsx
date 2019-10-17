import React from 'react';
import Tabs from '@chinanwu/tabular';
import Tab from '@chinanwu/tabular';

const App = () => (
  <div>
    <Tabs>
      <Tab name="main">
        <p>I am main page</p>
      </Tab>
      <Tab name="inventory">
        <p>Inventory</p>
      </Tab>
    </Tabs>
  </div>
);

export default App;
