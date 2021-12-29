import React, { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import DialComponent from "../components/DialComponent";
import { dark } from "../configs/themes";

export default function PinScreen() {
  const [total, settotal] = useState(0);
  const fadeIn = useRef(new Animated.Value(0));

  let dialPad = [];
  for (let i = 1; i < 10; i++) {
    dialPad.push(
      <DialComponent
        style={styles.digit}
        label={i}
        onPress={() => console.log()}
        key={i}
      />
    );
  }
  let pinIndicators = [];
  for (let i = 0; i < 4; i++) {
    pinIndicators.push(<View style={styles.indicators} key={i}></View>);
  }
  return (
    <View style={styles.container}>
      <View style={styles.pinIndicators}>{pinIndicators}</View>
      <View style={styles.dialPad}>
        {dialPad}
        <DialComponent style={[styles.digit, { zIndex: -1, opacity: 0 }]} />
        <DialComponent
          label={0}
          onPress={() => console.log()}
          style={styles.digit}
        />
        <DialComponent
          label={"X"}
          onPress={() => console.log()}
          style={[styles.digit, { backgroundColor: "#808080" }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: dark.primary,
    flex: 1,
    alignItems: "center",
  },
  pinIndicators: {
    marginTop: 120,
    height: 10,
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  indicators: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderRadius: 50,
    margin: 10,
    borderColor: "white",
  },
  dialPad: {
    marginTop: 150,
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    // backgroundColor: "yellow",
  },
  digit: {
    margin: 10,
  },
});
