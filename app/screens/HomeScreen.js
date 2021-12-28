import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  FlatList,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import NotesHeader from "../components/NotesHeader";
import { cardColors, dark } from "../configs/themes";
import Screen from "./Screen";

const notes = [
  { id: 1, note: "Book Review : The Design of Everyday Things by Don Norman" },
  { id: 2, note: "UI concepts worth exsisting" },
  { id: 3, note: "List of free & open source apps" },
  { id: 4, note: "Awesome tweets collection" },
  { id: 5, note: "Awesome tweets collection" },
  { id: 6, note: "Awesome tweets collection" },
  { id: 7, note: "Awesome tweets collection" },
  { id: 8, note: "Mangas planned to read" },
  { id: 9, note: "Animes produced by Ufotable" },
];

export default function HomeScreen() {
  const Card = ({ txt, type, id, color }) => (
    <TouchableHighlight
      onPress={() => console.log()}
      style={[styles.card, { backgroundColor: color }]}
      underlayColor={"rgba(255,255,255,0.8)"}
    >
      <>
        <MaterialCommunityIcons
          name="card-account-details"
          size={65}
          color={dark.primary}
          style={styles.cardIcon}
        />
        <View style={styles.description}>
          <Text style={styles.title}>{type}</Text>
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
            <Card
              txt={item.note}
              color={cardColors[index % 6]}
              type={"Driving Licence"}
              id={{ name: "Henish Patel" }}
            />
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
