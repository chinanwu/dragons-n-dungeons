import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store.js';

import TabFooter from './tabs/TabFooter.jsx';
import TabHeader from './tabs/TabHeader.jsx';
import Tab from './tabs/Tab.jsx';
import Tabs from './tabs/Tabs.jsx';
import Logo from './general/Logo.jsx';
import Dropdown from './general/Dropdown.jsx';
import Main from './main/Main.jsx';

import './App.less';

export const App = () => (
  <Provider store={store}>
    <Tabs>
      <TabHeader>
        <Logo />
      </TabHeader>

      <Tab name="Main ">
        <Main />
      </Tab>
      <Tab name="Inventory">Inventory</Tab>
      <Tab name="Spells">Spells</Tab>

      <TabFooter>
        <Dropdown
          id="themeDropdown"
          name="Theme"
          options={['Light', 'Dark', 'Halloween']}
        />
      </TabFooter>
    </Tabs>
  </Provider>
);
export default App;
