import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>Login Screen</Text>
      <Text onPress={() => navigation.navigate('Dashboard')}>Go to Dashboard</Text>
    </View>
  );
}

function DashboardScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>Dashboard Screen</Text>
      <Text onPress={() => navigation.navigate('Chat')}>Go to Chat</Text>
    </View>
  );
}

function ChatScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>Chat Screen</Text>
      <Text onPress={() => navigation.navigate('Login')}>Go to Login</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
