import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function FriendPreview({
  name,
  phoneNumber,
  id,
  onPress,
}: {
  name: string;
  phoneNumber?: string;
  id: string;
  onPress: (id: string) => void;
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(id)}>
      <Text style={styles.name}>{name}</Text>
      {phoneNumber && <Text style={styles.phoneNumber}>{phoneNumber}</Text>}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333",
    borderRadius: 10,
    height: 50,
    marginVertical: 2,
    padding: 7,
    paddingLeft: 10,
  },
  name: {
    color: "white",
    fontSize: 18,
  },
  phoneNumber: {
    color: "#aaa",
  },
});
