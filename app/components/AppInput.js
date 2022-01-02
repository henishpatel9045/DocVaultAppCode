import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppInput({
  label,
  style,
  placeholder,
  hidden,
  width,
  name,
  ...otherProps
}) {
  const { setFieldValue, values } = useFormikContext();
  if (hidden) {
    useEffect(() => setFieldValue(name, label), []);
    return null;
  }
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.detail, { width: width }]}>
        <TextInput
          value={values[name]}
          onChangeText={(txt) => setFieldValue(name, txt)}
          {...otherProps}
          style={styles.docNo}
          placeholder={placeholder ? placeholder : label}
        />
        {values[name] && values[name] != "" ? (
          <TouchableHighlight
            style={{ padding: 5, borderRadius: 5 }}
            onPress={() => setFieldValue(name, "")}
            underlayColor={"rgba(10, 10, 10, .2)"}
          >
            <MaterialCommunityIcons name="close" color={"#808080"} size={15} />
          </TouchableHighlight>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "white",
    marginLeft: 18,
    marginBottom: -13,
  },
  detail: {
    backgroundColor: "white",
    color: "black",
    margin: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "rgba(255,255,255,0.7)",
  },
  docNo: {
    fontWeight: "bold",
    fontSize: 18,
    flex: 1,
  },
});
