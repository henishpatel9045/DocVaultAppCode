import React from "react";
import {
  Keyboard,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

export default function KeyboardAvoidingWrapper({ children, style }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView style={[{ flex: 1, marginBottom: 50 }, style]}>
        <TouchableWithoutFeedback>
          <>{children}</>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
