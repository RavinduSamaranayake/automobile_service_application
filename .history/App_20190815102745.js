import { Provider } from 'react-redux';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { colors } from './src/styles';
import RNLocalNotifications from 'react-native-local-notifications';

import { store, persistor } from './src/redux/store';

import AppView from './src/modules/AppView';

export default function App() {

  //RNLocalNotifications.createNotification(id, text, datetime, sound[, hiddendata]);
  RNLocalNotifications.createNotification(1, 'Some text', '2019-05-22 23:23', 'default');
  return (
    
    <AppView />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
