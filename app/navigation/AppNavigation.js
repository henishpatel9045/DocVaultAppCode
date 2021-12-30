import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { docImageData } from "../configs/staticData";
import { dark } from "../configs/themes";
import HomeScreen from "../screens/HomeScreen";
import DocEditSelectCompo from "./DocEditSelectCompo";
import DocSelectCompo from "./DocSelectCompo";

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
        name="DisplayScreen"
        component={DocSelectCompo}
        options={({ route }) => ({
          title: docImageData[route.params.type].title,
        })}
      />
      <Stack.Screen
        name="CreateScreen"
        component={DocEditSelectCompo}
        options={({ route }) => ({
          title: docImageData[route.params.type].title,
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
