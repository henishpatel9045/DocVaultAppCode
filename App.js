import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";

import { dark } from "./app/configs/themes";
import AppNavigation from "./app/navigation/AppNavigation";
import DocScreen from "./app/screens/DisplayScrees/DocScreen";
import * as storageMethods from "./app/storage/saveToStorage";
import useUserData from "./app/hooks/useUserData";
import AppContext from "./app/context/AppContext";

export default function App() {
  const { userData } = useUserData();

  return (
    <View style={styles.container}>
      <AppContext.Provider value={{ userData }}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </AppContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark.primary,
    flex: 1,
  },
});
