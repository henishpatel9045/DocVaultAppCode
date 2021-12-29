import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

import { dark } from "./app/configs/themes";
import AppNavigation from "./app/navigation/AppNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark.primary,
    flex: 1,
  },
});
