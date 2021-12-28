import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import EmptyScreen from "./app/screens/EmptyScreen";
import Screen from "./app/screens/Screen";
import { dark } from "./app/configs/themes";
import NotesScreen from "./app/screens/NotesScreen";
import DocScreen from "./app/screens/DocScreen";
import ImageScreen from "./app/screens/ImageScreen";

export default function App() {
  const urlis = [
    {
      url: "",
      props: {
        source: require("./app/assets/doc1.jpg"),
      },
    },
  ];
  return (
    <View style={styles.container}>
      <ImageScreen image={urlis} label={"PanCard"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark.primary,
    flex: 1,
  },
});
