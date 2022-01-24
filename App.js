import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";
import { Practise } from "./components/buttonsPractice";

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen_A" component={<Practise />}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// the navigation ocntainer is responsible for managing our app state and linking our app navigator to the app environment
// also provides various useful functionality
// deep linking integration with the linking props
// notify state change for screen tracking and state persistence
//handle system back button on android by using the Back handler API from React Native.
//
