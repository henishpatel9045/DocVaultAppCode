import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ImageViewer from "react-native-image-zoom-viewer";
import Screen from "../Screen";
import { dark } from "../../configs/themes";

export default function ImageScreen({ label, image }) {
  const handleBack = () => console.log();
  const handleShare = () => console.log();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight
          onPress={handleBack}
          style={styles.btn}
          underlayColor={"rgba(255,255,255,0.3)"}
        >
          <MaterialCommunityIcons
            name={"arrow-left-bold"}
            size={30}
            color={"#ededed"}
          />
        </TouchableHighlight>
        <Text style={styles.label}>{label}</Text>
        <TouchableHighlight
          onPress={handleShare}
          style={styles.btn}
          underlayColor={"rgba(255,255,255,0.3)"}
        >
          <MaterialCommunityIcons name={"share"} size={30} color={"#ededed"} />
        </TouchableHighlight>
      </View>
      <ImageViewer
        imageUrls={image}
        backgroundColor={dark.primary}
        saveToLocalByLongPress
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dark.primary,
  },
  header: {
    position: "absolute",
    top: 15,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    zIndex: 2,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    flex: 1,
    marginHorizontal: 15,
  },
  btn: {
    alignItems: "center",
    borderRadius: 20,
    padding: 5,
    zIndex: 1,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
