import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

export default function iImageShowComponent() {
  return (
    <TouchableOpacity
      onPress={() =>
        Alert.alert("Remove Image", "Are you sure?", [
          { text: "Cancle" },
          {
            text: "Ok",
            onPress: () => console.log(),
          },
        ])
      }
      style={styles.imageContainer}
    >
      <Image
        style={{ borderRadius: 5 }}
        source={{
          uri: formData?.backImage,
          width: "100%",
          height: 200,
        }}
        resizeMode="contain"
      />
      )
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "45%",
    height: 200,
  },
});
