import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NotesHeader from "../components/NotesHeader";
import Screen from "./Screen";

export default function EmptyScreen() {
  return (
    <Screen>
      <NotesHeader>
        <View style={styles.imgCompo}>
          <Image
            source={require("../assets/emptyScreen.png")}
            style={styles.img}
          />
          <Text style={styles.imgTxt}>Add your first document!!!</Text>
        </View>
      </NotesHeader>
    </Screen>
  );
}

const styles = StyleSheet.create({
  imgCompo: {
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    top: Dimensions.get("window").height / 3 - 50,
  },
  imgTxt: {
    color: "white",
  },
  img: {
    height: 286.73,
    width: 350,
  },
});
