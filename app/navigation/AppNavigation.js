import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { dark } from "../configs/themes";
import DocEditScreen from "../screens/DocEditScreen";
import HomeScreen from "../screens/HomeScreen";
import DocEditSelectCompo from "./DocEditSelectCompo";

export default function AppNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: dark.primary,
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="SelectionScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateScreen"
        component={DocEditSelectCompo}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
