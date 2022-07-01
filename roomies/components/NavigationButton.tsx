import { View, Text, Pressable } from "react-native";
import React from "react";

export default function NavigationButton({
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
        padding: 5,
      })}
    >
      <Text style={{ color: "white", fontSize: 15 }}>{title}</Text>
    </Pressable>
  );
}
