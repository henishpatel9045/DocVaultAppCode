import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { docImageData } from "../../configs/staticData";
import { cardColors, dark } from "../../configs/themes";
import Screen from "../Screen";

const data = docImageData;

export default function DocSelectScreen({ handleVisible }) {
  const navigation = useNavigation();
  const Card = ({ type, title, color, image }) => (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate("CreateScreen", { type: type, title: title });
        handleVisible(false);
      }}
      style={[styles.card, { backgroundColor: color }]}
      underlayColor={"rgba(255,255,255,0.8)"}
    >
      <>
        <Image source={image} style={styles.cardIcon} />
        <View style={styles.description}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </>
    </TouchableHighlight>
  );
  let renderItem = [];

  Object.keys(data).forEach((item, index) =>
    renderItem.push(
      <Card
        title={data[item].title}
        type={item}
        key={index}
        image={data[item].image}
        color={cardColors[index % 6]}
      />
    )
  );

  return <View style={styles.container}>{renderItem}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: dark.primary,
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
