import { View, Text, Pressable } from "react-native";
import React, { Fragment, ReactChild, ReactChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

export default function NavigationButton({
  onPress,
  title,
  showBack = false,
}: {
  onPress: () => void;
  title?: string;
  showBack?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        padding: 5,
        flexDirection: "row",
      })}
    >
      {showBack && (
        <FontAwesomeIcon
          icon={faChevronLeft}
          color={"white"}
          style={{ marginRight: 4 }}
        />
      )}
      {title && <Text style={{ color: "white", fontSize: 15 }}>{title}</Text>}
    </Pressable>
  );
}
