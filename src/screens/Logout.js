import React, {useEffect} from 'react';
import {View, Text, DeviceEventEmitter} from 'react-native';

const Logout = () => {
  useEffect(() => {
    logoutEvent();
  }, []);

  const logoutEvent = () => {
    DeviceEventEmitter.emit('signOut', {});
  };

  return (
    <View>
      <Text>Logout</Text>
    </View>
  );
};

export default Logout;
