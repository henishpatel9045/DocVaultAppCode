import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { dark } from "./app/configs/themes";
import DocEditScreen from "./app/screens/DocEditScreen";
import ResultEditScreen from "./app/screens/ResultEditScreen";

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
      <ResultEditScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark.primary,
    flex: 1,
  },
});
