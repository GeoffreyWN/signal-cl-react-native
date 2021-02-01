import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddChatScreen from './screens/AddChatScreen';


const Stack = createStackNavigator()

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C68ED" },
  headerTitleStyle: { color:"white"},
  headerTintColor: "white",
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions} initialRouteName="Home">
        <Stack.Screen options={{title: "Let's Sign Up" }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{title: "Register" }} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{title: "Home" }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{title: "Add Chat" }} name="AddChat" component={AddChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
