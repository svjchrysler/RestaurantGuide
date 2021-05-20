import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Linking,
  StyleSheet,
  Dimensions,
} from 'react-native';
import CommonStyle from '../styles/commonStyles';
import ItemList from '../components/ItemList';
import {Modal, Portal, Button, Provider, TextInput} from 'react-native-paper';
import Color from '../styles/colors';
import CommonStyles from '../styles/commonStyles';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const {width} = Dimensions.get('screen');

const restaurants = [
  {
    id: 1,
    name: 'La casa del camba',
    location: {
      latitude: 123123123123,
      longitude: 123123123,
    },
    photo:
      'https://static.charmingsardinia.com/RESTAURANT/172/gallery/files/la-scogliera-sardinia05.jpg',
    phone: 76555444,
  },
  {
    id: 2,
    name: 'La casa del camba',
    location: {
      latitude: 123123123123,
      longitude: 123123123,
    },
    photo:
      'https://static.charmingsardinia.com/RESTAURANT/172/gallery/files/la-scogliera-sardinia05.jpg',
    phone: 76555444,
  },
  {
    id: 3,
    name: 'La casa del camba',
    location: {
      latitude: 123123123123,
      longitude: 123123123,
    },
    photo:
      'https://static.charmingsardinia.com/RESTAURANT/172/gallery/files/la-scogliera-sardinia05.jpg',
    phone: 76555444,
  },
  {
    id: 4,
    name: 'La casa del camba',
    location: {
      latitude: 123123123123,
      longitude: 123123123,
    },
    photo:
      'https://static.charmingsardinia.com/RESTAURANT/172/gallery/files/la-scogliera-sardinia05.jpg',
    phone: 76555444,
  },
  {
    id: 5,
    name: 'La casa del camba',
    location: {
      latitude: 123123123123,
      longitude: 123123123,
    },
    photo:
      'https://static.charmingsardinia.com/RESTAURANT/172/gallery/files/la-scogliera-sardinia05.jpg',
    phone: 76555444,
  },
  {
    id: 6,
    name: 'La casa del camba',
    location: {
      latitude: 123123123123,
      longitude: 123123123,
    },
    photo:
      'https://static.charmingsardinia.com/RESTAURANT/172/gallery/files/la-scogliera-sardinia05.jpg',
    phone: 76555444,
  },
  {
    id: 7,
    name: 'La casa del camba',
    location: {
      latitude: 123123123123,
      longitude: 123123123,
    },
    photo:
      'https://static.charmingsardinia.com/RESTAURANT/172/gallery/files/la-scogliera-sardinia05.jpg',
    phone: 76555444,
  },
  {
    id: 8,
    name: 'La casa del camba',
    location: {
      latitude: 123123123123,
      longitude: 123123123,
    },
    photo:
      'https://static.charmingsardinia.com/RESTAURANT/172/gallery/files/la-scogliera-sardinia05.jpg',
    phone: 76555444,
  },
  {
    id: 9,
    name: 'La casa del camba',
    location: {
      latitude: 123123123123,
      longitude: 123123123,
    },
    photo:
      'https://static.charmingsardinia.com/RESTAURANT/172/gallery/files/la-scogliera-sardinia05.jpg',
    phone: 76555444,
  },
  {
    id: 10,
    name: 'La casa del camba',
    location: {
      latitude: 123123123123,
      longitude: 123123123,
    },
    photo:
      'https://static.charmingsardinia.com/RESTAURANT/172/gallery/files/la-scogliera-sardinia05.jpg',
    phone: 76555444,
  },
  {
    id: 11,
    name: 'La casa del camba',
    location: {
      latitude: 123123123123,
      longitude: 123123123,
    },
    photo:
      'https://static.charmingsardinia.com/RESTAURANT/172/gallery/files/la-scogliera-sardinia05.jpg',
    phone: 76555444,
  },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleMap, setIsVisibleMap] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  const callResraurant = phone => {
    Linking.openURL(`tel:${phone}`);
  };

  const hideModal = () => {
    setIsVisible(false);
  };

  const openMap = () => {
    setIsVisibleMap(true);
  };

  const hideMap = () => {
    setIsVisibleMap(false);
  };

  return (
    <View style={[CommonStyle.flex1]}>
      <FlatList
        data={restaurants}
        renderItem={({item}) => (
          <ItemList
            item={item}
            onPressCall={callResraurant}
            onPressOpenModal={openModal}
            onPressOpenMap={openMap}
          />
        )}
        keyExtractor={item => item.id}
      />
      <Provider>
        <Portal>
          <Modal
            visible={isVisible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modal}>
            <Text style={[styles.modalTitle]}>Send Review</Text>
            <TextInput
              disabled
              style={[CommonStyles.mt5]}
              multiline
              value={'Excelente comida y atención al cliente'}
            />
            <View
              style={[
                CommonStyles.row,
                CommonStyles.alignSelfToEnd,
                CommonStyles.mt3,
              ]}>
              <Button onPress={hideModal}>Send</Button>
              <Button onPress={hideModal}>Cancel</Button>
            </View>
          </Modal>
          <Modal
            visible={isVisibleMap}
            onDismiss={hideMap}
            contentContainerStyle={styles.modal}>
            <Text style={[styles.modalTitle, CommonStyles.mb3]}>Location</Text>
            <View style={styles.container}>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                  latitude: -16.5021244,
                  longitude: -68.1312175,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}>
                <Marker
                  coordinate={{latitude: -16.5021244, longitude: -68.1312175}}
                  title={'sdfsdf'}
                />
              </MapView>
            </View>
            <View
              style={[
                CommonStyles.row,
                CommonStyles.alignSelfToEnd,
                CommonStyles.mt3,
              ]}>
              <Button onPress={hideMap}>Close</Button>
            </View>
          </Modal>
        </Portal>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: Color.white,
    padding: 20,
    ...CommonStyles.m5,
  },
  modalTitle: {
    ...CommonStyles.h2,
    ...CommonStyles.textCenter,
    color: Color.primary,
    ...CommonStyles.bold,
  },
  container: {
    width: (width * 80) / 100,
    height: 180,
    ...CommonStyles.relative,
  },
  map: {
    width: (width * 80) / 100,
    height: 180,
    ...CommonStyles.absolute,
  },
});

export default Home;
