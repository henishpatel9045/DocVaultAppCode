import React from "react";
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NotesHeader({ children }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Docs</Text>
        {/* <TouchableHighlight
          style={styles.icon}
          onPress={() => console.log()}
          underlayColor={"rgba(255, 255, 255, 0.3)"}
        >
          <MaterialCommunityIcons name="magnify" color={"white"} size={25} />
        </TouchableHighlight> */}
        <TouchableHighlight
          style={styles.icon}
          onPress={() => console.log()}
          underlayColor={"rgba(255, 255, 255, 0.3)"}
        >
          <MaterialCommunityIcons
            name="information-outline"
            color={"white"}
            size={25}
          />
        </TouchableHighlight>
      </View>
      <TouchableHighlight
        style={styles.addIcon}
        onPress={() => console.log()}
        underlayColor={"rgba(255, 255, 255, 0.8)"}
      >
        <MaterialCommunityIcons name="plus" color={"white"} size={50} />
      </TouchableHighlight>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    marginHorizontal: 15,
  },
  headerTxt: {
    color: "white",
    flex: 1,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 35,
  },
  icon: {
    alignItems: "center",
    borderRadius: 15,
    height: 50,
    width: 50,
    backgroundColor: "#3B3B3B",
    justifyContent: "center",
    padding: 10,
    marginLeft: 10,
  },
  addIcon: {
    alignItems: "center",
    borderRadius: 50,
    bottom: 40,
    right: 25,
    elevation: 10,
    backgroundColor: "#3B3B3B",
    justifyContent: "center",
    height: 70,
    width: 70,
    padding: 5,
    position: "absolute",
    zIndex: 2,
  },
});
