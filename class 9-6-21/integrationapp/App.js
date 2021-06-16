import 'react-native-gesture-handler';
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home.js'
import ColorChanger from './screens/ColorChanger.js';
import ImageChanger from './screens/ImageChanger.js';
import GithubImage from './screens/GithubImage.js';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              headerStyle: {
                backgroundColor: "#0f4c75"
              },
              title: "Background Changer",
              headerTitleStyle: {
                alignSelf: "center",
                color: "#FFF"
              }
            }
          }
        ></Stack.Screen>
        <Stack.Screen
          name="ColorChanger"
          component={ColorChanger}
          options={
            {
              headerStyle: {
                backgroundColor: "#0f4c75"
              },
              title: "Color Changer",
              headerTitleStyle: {
                alignSelf: "center",
                color: "white"
              }
            }
          }
        ></Stack.Screen>
        <Stack.Screen
          name="ImageChanger"
          component={ImageChanger}
          options={
            {
              headerStyle: {
                backgroundColor: "#0f4c75"
              },
              title: "Image Changer",
              headerTitleStyle: {
                alignSelf: "center",
                color: "white"
              }
            }
          }
        ></Stack.Screen>
        <Stack.Screen
          name="GithubImage"
          component={GithubImage}
          options={
            {
              headerStyle: {
                backgroundColor: "#0f4c75"
              },
              title: "Github image fetch",
              headerTitleStyle: {
                alignSelf: "center",
                color: "white"
              }
            }
          }
        ></Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App
