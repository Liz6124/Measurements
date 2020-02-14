import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import UserMesurements from './Components/UserMeasurements.js';
import { StoreProvider } from './src/Store';


export default function App() {
  return (
    <StoreProvider>
    <View style={styles.container}>
    <UserMesurements/>
    </View>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63b8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
