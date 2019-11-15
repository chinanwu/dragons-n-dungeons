import React from 'react';
import { Provider } from 'react-redux';
import { ABILITY_NAMES } from '../constants/Abilities.js';
import { store } from '../store.js';

import './App.less';
import Carousel from './carousel/Carousel.jsx';
import CarouselItem from './carousel/CarouselItem.jsx';
import Dropdown from './general/Dropdown.jsx';
import Logo from './general/Logo.jsx';
import Ability from './main/Ability.jsx';
import Main from './main/Main.jsx';
import Tab from './tabs/Tab.jsx';

import TabFooter from './tabs/TabFooter.jsx';
import TabHeader from './tabs/TabHeader.jsx';
import Tabs from './tabs/Tabs.jsx';

export const App = () => (
  <Provider store={store}>
    <Tabs>
      <TabHeader>
        <Logo />
      </TabHeader>

      <Tab name="Main ">
        <Main />
      </Tab>
      <Tab name="Inventory">
        <Carousel>
          <CarouselItem>
            <Ability
              id={ABILITY_NAMES['str'].toLowerCase()}
              name={ABILITY_NAMES['str']}
            />
          </CarouselItem>
          <CarouselItem>
            <Ability
              id={ABILITY_NAMES['con'].toLowerCase()}
              name={ABILITY_NAMES['con']}
            />
          </CarouselItem>
          <CarouselItem>
            <Ability
              id={ABILITY_NAMES['dex'].toLowerCase()}
              name={ABILITY_NAMES['dex']}
            />
          </CarouselItem>
        </Carousel>
      </Tab>
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
