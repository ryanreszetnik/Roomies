import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function SearchBar({
  onChange,
}: {
  onChange: (text: string) => void;
}) {
  return (
    <View style={styles.view}>
      <TextInput
        onChangeText={onChange}
        style={styles.input}
        placeholder="Search..."
        clearButtonMode="always"
        autoCorrect={false}
        autoComplete="name"
      ></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: 60,
  },
  name: {
    color: "white",
    fontSize: 18,
  },
  input: {
    backgroundColor: "#333",
    height: 40,
    margin: 5,
    borderRadius: 4,
    padding: 5,
    color: "white",
  },
});
