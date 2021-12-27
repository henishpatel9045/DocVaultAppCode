import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import EmptyScreen from "./app/screens/EmptyScreen";
import Screen from "./app/screens/Screen";
import { dark } from "./app/configs/themes";
import NotesScreen from "./app/screens/NotesScreen";
import DocScreen from "./app/screens/DocScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <DocScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark.primary,
    flex: 1,
  },
});
