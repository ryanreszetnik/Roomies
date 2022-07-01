import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useAppSelector } from "../redux/hooks";
import { getGroupById } from "../redux/groupsReducer";
import { RootStackScreenProps } from "../types";

export default function ViewGroupScreen({
  route,
}: RootStackScreenProps<"Group">) {
  const { groupId } = route.params;
  const group = useAppSelector(getGroupById(groupId));
  return (
    <View>
      <Text style={styles.text}>{JSON.stringify(group)}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: { color: "white", fontSize: 20 },
});
