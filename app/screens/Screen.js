import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { dark } from "../configs/themes";

export default function Screen({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dark.primary,
    marginTop: StatusBar.currentHeight,
  },
});
