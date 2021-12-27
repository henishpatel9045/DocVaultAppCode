import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  FlatList,
} from "react-native";

import NotesHeader from "../components/NotesHeader";
import { cardColors } from "../configs/themes";
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

export default function NotesScreen() {
  const Card = ({ txt, color }) => (
    <TouchableHighlight
      onPress={() => console.log()}
      style={[styles.card, { backgroundColor: color }]}
      underlayColor={"rgba(255,255,255,0.8)"}
    >
      <Text style={styles.cardTxt}>{txt}</Text>
    </TouchableHighlight>
  );

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
            <Card txt={item.note} color={cardColors[index % 6]} />
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
    padding: 15,
    paddingHorizontal: 28,
    width: "100%",
  },
  cardTxt: {
    fontSize: 20,
  },
});
