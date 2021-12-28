import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { docImageData } from "../configs/staticData";
import { cardColors } from "../configs/themes";
import Screen from "./Screen";

const data = docImageData;

export default function DocSelectScreen() {
  const Card = ({ type, color, image }) => (
    <TouchableHighlight
      onPress={() => console.log()}
      style={[styles.card, { backgroundColor: color }]}
      underlayColor={"rgba(255,255,255,0.8)"}
    >
      <>
        <Image source={image} style={styles.cardIcon} />
        <View style={styles.description}>
          <Text style={styles.title}>{type}</Text>
        </View>
      </>
    </TouchableHighlight>
  );
  let renderItem = [];

  Object.keys(data).forEach((item, index) =>
    renderItem.push(
      <Card
        type={data[item].title}
        key={index}
        image={data[item].image}
        color={cardColors[index % 6]}
      />
    )
  );

  return (
    <Screen>
      <View style={styles.container}>{renderItem}</View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    borderRadius: 10,
    alignItems: "center",
    padding: 8,
    margin: 9,
    width: "45%",

    overflow: "hidden",
    height: Dimensions.get("window").height * 0.15,
  },
  description: {
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardIcon: {
    height: "70%",
    resizeMode: "contain",
  },
});
