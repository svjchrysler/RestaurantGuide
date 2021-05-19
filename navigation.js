import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Categories" component={Login} />
        <Drawer.Screen name="About" component={Login} />
        <Drawer.Screen name="Logout" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
