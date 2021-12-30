import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToastAndroid,
  Clipboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { dark } from "../configs/themes";

export default function DocDetailCompo({ label, detail, width, style }) {
  return (
    <View style={[style, { width: width }]}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.detail]}>
        <Text style={styles.docNo}>{detail}</Text>
        <TouchableHighlight
          style={styles.rightCompo}
          onPress={() => {
            Clipboard.setString(detail.toString());
            ToastAndroid.show("Copied to clipboard", ToastAndroid.SHORT);
          }}
          underlayColor={"rgba(0, 0, 0, 0.4)"}
        >
          <MaterialCommunityIcons
            name="clipboard-text"
            color={dark.primary}
            size={20}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "white",
    marginLeft: 18,
    marginBottom: -13,
  },
  detail: {
    backgroundColor: "white",
    color: "black",
    margin: 15,

    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "rgba(255,255,255,0.7)",
  },
  docNo: {
    fontWeight: "bold",
    fontSize: 18,
  },
  rightCompo: {
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
    justifyContent: "center",
  },
});
