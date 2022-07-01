import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function StyledButton({
  onPress,
  title,
}: {
  onPress: () => void;
  title: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        ...styles.button,
      })}
    >
      <Text
        style={{
          color: "white",
          fontSize: 18,
          flexShrink: 1,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#373",
    flexDirection: "row",
    flexShrink: 1,
  },
});
