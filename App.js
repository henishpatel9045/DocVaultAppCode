import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { dark } from "./app/configs/themes";
import HomeScreen from "./app/screens/HomeScreen";
import PassbookScreen from "./app/screens/PassbookScreen";
import * as storageMethods from "./app/storage/saveToStorage";

export default function App() {
  useEffect(() => {
    storageMethods.getObj("userData").then((res) => console.log(res));
  }, [storageMethods.getObj("userData")]);

  return (
    <View style={styles.container}>
      <PassbookScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark.primary,
    flex: 1,
  },
});
