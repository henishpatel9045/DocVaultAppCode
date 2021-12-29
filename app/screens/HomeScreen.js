import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import NotesHeader from "../components/NotesHeader";
import { cardColors, dark } from "../configs/themes";
import Screen from "./Screen";
import { docImageData } from "../configs/staticData";

const notes = [
  {
    id: 1,
    type: "aadhar",
    name: "Patel Henish Amrutbhai",
    DocNo: "912968743632",
  },
  { id: 2, type: "pan", name: "Patel Amrutbhai Kanubhai", DocNo: "BIPPP6569K" },
  {
    id: 3,
    type: "dl",
    name: "Patel Henish Amrutbhai",
    DocNo: "GJ02 2021 0021991",
  },
  {
    id: 4,
    type: "voterId",
    name: "Patel Henish Amrutbhai",
    DocNo: "USQ2723971",
  },
  { id: 5, type: "result", name: "Patel Henish Amrutbhai", DocNo: "08501" },
  {
    id: 6,
    type: "passport",
    name: "Patel Henish Amrutbhai",
    DocNo: "U4489717",
  },
  {
    id: 7,
    type: "debit",
    name: "Patel Henish Amrutbhai",
    DocNo: "2502 4545 6897",
  },
  {
    id: 8,
    type: "passbook",
    name: "Patel Henish Amrutbhai",
    DocNo: "01490100024789",
  },
];

export default function HomeScreen() {
  const Card = ({ type, id, color }) => (
    <TouchableHighlight
      onPress={() => console.log()}
      style={[styles.card, { backgroundColor: color }]}
      underlayColor={"rgba(255,255,255,0.8)"}
    >
      <>
        <Image source={docImageData[id.type].image} style={styles.cardIcon} />
        <View style={styles.description}>
          <Text style={styles.title}>{docImageData[id.type].title}</Text>
          <Text style={styles.name}>{id.name}</Text>
        </View>
        <TouchableHighlight
          style={styles.iconBtn}
          onPress={handleShare}
          underlayColor={"rgba(255,255,255,0.8)"}
        >
          <MaterialCommunityIcons name="share" size={40} color={dark.primary} />
        </TouchableHighlight>
      </>
    </TouchableHighlight>
  );

  const handleShare = () => console.log();

  return (
    <Screen>
      <NotesHeader>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
          style={{ flex: 1, width: "90%", alignSelf: "center" }}
          data={notes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Card color={cardColors[index % 6]} type={item.type} id={item} />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        />
      </NotesHeader>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  card: {
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 15,
    width: "100%",
    overflow: "hidden",
    height: Dimensions.get("window").height * 0.15,
  },
  cardIcon: {
    resizeMode: "contain",
    width: 50,
    height: 50,
    zIndex: 2,
  },
  description: {
    flex: 1,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  name: {
    fontSize: 18,
  },
  iconBtn: {
    padding: 15,
    height: "100%",
    justifyContent: "center",
  },
});
