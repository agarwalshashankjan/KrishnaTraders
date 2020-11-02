import React from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import Create from './components/Create';
import GSTItems from './components/GSTItems';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" headerLayoutPreset={'center'}>
        <Scene
          key="gstList"
          component={GSTItems}
          title="Krishna Traders"
          onRight={() => Actions.createBill()}
          rightTitle="Add"
          initial
        />
        <Scene key="createBill" component={Create} title="Krishna Traders" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
