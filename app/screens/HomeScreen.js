import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  FlatList,
  Dimensions,
  Image,
  BackHandler,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as LocalAuthentication from "expo-local-authentication";
import LottieView from "lottie-react-native";

import NotesHeader from "../components/NotesHeader";
import { cardColors, dark } from "../configs/themes";
import Screen from "./Screen";
import { docImageData } from "../configs/staticData";
import EmptyScreen from "./EmptyScreen";
import AppContext from "../context/AppContext";
import * as Sharing from "expo-sharing";
import AppButton from "../components/AppButton";

export default function HomeScreen({ navigation }) {
  const { userData, getData } = useContext(AppContext);
  const Card = ({ id, color }) => (
    <TouchableHighlight
      onPress={() => navigation.navigate("DisplayScreen", { ...id })}
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
          onPress={() => handleShare(id.frontImage)}
          underlayColor={"rgba(255,255,255,0.8)"}
        >
          <MaterialCommunityIcons name="share" size={40} color={dark.primary} />
        </TouchableHighlight>
      </>
    </TouchableHighlight>
  );
  const [authentic, setauthentic] = useState(null);
  const auth = () => {
    LocalAuthentication.hasHardwareAsync().then((res) => {
      if (res) {
        LocalAuthentication.authenticateAsync().then((resp) => {
          if (resp.success) {
            setauthentic(true);
          } else if (resp.error === "user_cancel") {
            BackHandler.exitApp();
          }
        });
      }
    });
  };
  useEffect(() => {
    auth();
  }, []);

  const handleShare = async (url) => {
    await Sharing.shareAsync(url);
  };

  const [refreshing, setrefreshing] = useState(false);

  if (authentic === null)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: dark.primary,
          justifyContent: "center",
        }}
      >
        <AppButton
          label={"Authenticate"}
          onPress={auth}
          radius={15}
          width={"80%"}
        />
      </View>
    );

  if (!authentic)
    return (
      <View>
        <LottieView
          source={require("../assets/animation/authError.json")}
          autoplay
          loop
        />
        <AppButton
          label={"Authenticate"}
          onPress={auth}
          radius={15}
          width={"80%"}
        />
      </View>
    );

  return (
    <Screen>
      {userData && userData.docs.length ? (
        <NotesHeader>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
            style={{ flex: 1, width: "90%", alignSelf: "center" }}
            data={userData?.docs}
            keyExtractor={(item) => item?.docNo.toString()}
            renderItem={({ item, index }) => (
              <Card
                color={cardColors[index % 6]}
                id={{ ...item, index: index }}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            refreshing={refreshing}
            onRefresh={getData}
          />
        </NotesHeader>
      ) : (
        <EmptyScreen />
      )}
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
