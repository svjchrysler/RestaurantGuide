import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  DeviceEventEmitter,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import CommonStyle from '../styles/commonStyles';
import Color from '../styles/colors';

const Login = () => {
  const signIn = () => {
    DeviceEventEmitter.emit('signIn', {});
  };

  return (
    <ScrollView
      style={[CommonStyle.flex1]}
      contentContainerStyle={CommonStyle.flexGrow1}>
      <View style={[CommonStyle.flex1, CommonStyle.centerAlignment]}>
        <Text style={[styles.titleDesing]}>Sign In</Text>
        <View style={[styles.containerInput]}>
          <TextInput
            disabled
            value={'jhon@gmail.com'}
            style={[styles.textInput, CommonStyle.mb5]}
            label="Email"
          />
          <TextInput
            disabled
            style={[styles.textInput]}
            secureTextEntry={true}
            value={'sdfsdfsdfsdf'}
            label="Password"
          />
        </View>
        <Button mode="contained" style={[CommonStyle.mt5]} onPress={signIn}>
          Sign In
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleDesing: {
    textAlign: 'center',
    ...CommonStyle.h1,
    ...CommonStyle.bold,
    marginBottom: 40,
    color: Color.primary,
  },
  textInput: {
    width: '90%',
  },
  containerInput: {
    ...CommonStyle.centerItems,
    width: '100%',
  },
});

export default Login;
