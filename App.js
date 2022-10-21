import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Routes from './src/Navigation/Routes';
const App = () => {
  return (
    
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
  
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
  },
});
export default App;
