import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useAppSelector } from "../redux/hooks";
import { getGroupById } from "../redux/groupsReducer";

export default function ViewGroupScreen({ route }: any) {
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
