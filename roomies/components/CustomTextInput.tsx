import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function CustomTextInput({
  label,
  onChange,
  value,
  placeholder = "",
}: {
  label: string;
  onChange: (text: string) => void;
  value: string;
  placeholder?: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={(text) => onChange(text)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
  },
  label: {
    color: "white",
    marginLeft: "5%",
    marginBottom: 2,
    fontSize: 18,
  },
  input: {
    backgroundColor: "#555",
    width: "90%",
    marginHorizontal: "5%",
    height: 50,
    fontSize: 25,
    color: "white",
    borderRadius: 10,
    paddingLeft: 8,
    // marginHorizontal: "auto",
  },
});
