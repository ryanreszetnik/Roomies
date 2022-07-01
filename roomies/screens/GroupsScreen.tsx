import { ScrollView, StyleSheet, Switch } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { Fragment, useEffect, useMemo, useState } from "react";
import GroupPreview from "../components/GroupPreview";
import { useAppSelector } from "../redux/hooks";
import { Friend } from "../data-types";
import FriendPreview from "../components/FriendPreview";

export default function GroupsScreen({
  navigation,
}: RootTabScreenProps<"Groups">) {
  const groups = useAppSelector((state) => state.groups);
  const friends = useAppSelector((state) => state.friends);

  const onGroupPress = (id: string, name: string) => {
    navigation.navigate("Group", { groupId: id, groupName: name });
  };
  const onFriendPress = (id: string) => {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Groups</Text>
      <ScrollView horizontal style={styles.rightScroll}>
        {groups.map((group: any, i: number) => (
          <GroupPreview
            key={i}
            name={group.name}
            id={group.id}
            onPress={onGroupPress}
          />
        ))}
      </ScrollView>
      <Text style={styles.title}>Friends</Text>
      <ScrollView style={styles.friendScroll}>
        {friends.map((friend: Friend, i: number) => (
          <FriendPreview
            key={friend.id}
            name={friend.name}
            phoneNumber={friend.phoneNumber}
            id={friend.id}
            onPress={onFriendPress}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  rightScroll: {
    maxHeight: 130,
    flexDirection: "row",
    overflow: "scroll",
  },
  friendScroll: {
    width: "100%",
    flexGrow: 1,
  },
});
