import React, {useState, useEffect} from 'react';
import {DeviceEventEmitter} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Logout from './src/screens/Logout';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  const [isVisibleLogin, setIsVisibleLogin] = useState(false);

  useEffect(() => {
    subscribeEvent();
  }, []);

  const subscribeEvent = () => {
    DeviceEventEmitter.addListener('signIn', () => {
      setIsVisibleLogin(false);
    });

    DeviceEventEmitter.addListener('signOut', () => {
      setIsVisibleLogin(true);
    });
  };

  return (
    <>
      {isVisibleLogin ? (
        <Login />
      ) : (
        <NavigationContainer>
          <Drawer.Navigator
            hideStatusBar={true}
            initialRouteName="Restaurants"
            screenOptions={{headerShown: true}}>
            <Drawer.Screen name="Restaurants" component={Home} />
            <Drawer.Screen name="Logout" component={Logout} />
          </Drawer.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default Navigation;
