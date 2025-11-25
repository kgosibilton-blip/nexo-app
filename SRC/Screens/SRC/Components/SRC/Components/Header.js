import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#4B7BEC',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
