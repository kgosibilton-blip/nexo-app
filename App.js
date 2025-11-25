import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import Chat from './src/screens/Chat';
import Header from './src/components/Header';
import Button from './src/components/Button';
import Card from './src/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Welcome to Nexo!" />
      <Login />
      <Dashboard />
      <Chat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 40
  }
});
