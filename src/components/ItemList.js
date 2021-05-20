import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CommonStyles from '../styles/commonStyles';
import {Icon} from 'react-native-eva-icons';
const ItemList = ({item, onPressOpenModal, onPressCall, onPressOpenMap}) => {
  return (
    <View
      style={[
        CommonStyles.flex1,
        CommonStyles.row,
        CommonStyles.boxShadow,
        CommonStyles.borderRadius2,
      ]}>
      <Image source={{uri: item.photo}} style={[styles.sizeImage]} />
      <View>
        <Text style={[styles.title]}>{item.name}</Text>
        <View style={[CommonStyles.row, CommonStyles.ml3, CommonStyles.mt3]}>
          <Icon
            onPress={() => onPressCall(item.phone)}
            name="phone-call-outline"
            width={25}
            height={25}
            fill={'#000'}
          />
          <Icon
            onPress={onPressOpenModal}
            style={[CommonStyles.ml3]}
            name="email-outline"
            width={25}
            height={25}
            fill={'#000'}
          />
          <Icon
            onPress={onPressOpenMap}
            style={[CommonStyles.ml3]}
            name="map-outline"
            width={25}
            height={25}
            fill={'#000'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sizeImage: {
    width: '30%',
    height: 80,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 15,
    ...CommonStyles.bold,
    ...CommonStyles.ml3,
    ...CommonStyles.mt2,
    ...CommonStyles.uppercase,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default ItemList;
