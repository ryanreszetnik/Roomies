import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function GroupPreview({
  name,
  id,
  selected = false,
  onPress,
}: {
  name: string;
  id: string;
  selected?: boolean;
  onPress: (id: string, name: string) => void;
}) {
  if (selected) {
    return (
      <TouchableOpacity
        onPress={() => onPress(id, name)}
        style={styles.selectedPressable}
      >
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.unselectedContainer}>
      <TouchableOpacity
        onPress={() => onPress(id, name)}
        style={styles.unselectedPressable}
      ></TouchableOpacity>
      <Text style={styles.unselectedTitle}>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: { color: "white", fontSize: 20 },
  selectedPressable: {
    backgroundColor: "#888",
    height: 60,
    margin: 2,
  },
  unselectedContainer: {
    height: 120,
    width: 90,
    margin: 2,
    paddingHorizontal: 5,
  },
  unselectedPressable: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "#444",
  },
  unselectedTitle: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
});
