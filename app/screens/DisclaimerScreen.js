import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Linking from "expo-linking";
import { dark } from "../configs/themes";

export default function DisclaimerScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container} style={{ flex: 1 }}>
      <Text style={[styles.header]}>DocVault</Text>
      <Text numberOfLines={1} style={styles.dashed}>
        ---------------------------------------------
      </Text>
      <View style={styles.author}>
        <Text style={styles.line}>by Henish Patel</Text>
        <Text style={styles.line}>For Bugs/Comments/Suggestions</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto: ompatel9045@gmail.com")}
        >
          <Text style={styles.line}>ompatel9045@gmail.com</Text>
        </TouchableOpacity>
        <Text style={styles.version}>Alpha Version 1.0.4</Text>
      </View>
      <View style={styles.author}>
        <Text style={[styles.version]}>Find SourceCode on GitHub</Text>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://github.com/henishpatel9045/DocVaultAppCode"
            )
          }
        >
          <Text style={styles.line}>henishpatel9045/DocVaultAppCode</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.author}>
        <Text style={styles.version}>Connect With Me</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://api.whatsapp.com/send/?phone=917990577979&text=Hi%20Henish"
            )
          }
        >
          <Text style={styles.line}>What'sApp: +91 79905 77979</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.facebook.com/henish.patel.77")
          }
        >
          <Text style={styles.line}>Facebook: henish.patel.77</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.instagram.com/henish.patel.77/")
          }
        >
          <Text style={styles.line}>Instagram: henish.patel.77</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: dark.primary,
  },
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  dashed: {
    color: "white",
  },
  author: {
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    color: "white",
  },
  version: {
    marginVertical: 15,
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
