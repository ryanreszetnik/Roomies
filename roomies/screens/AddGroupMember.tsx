import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import FriendPreview from "../components/FriendPreview";
import SearchBar from "../components/SearchBar";
import NavigationButton from "../components/NavigationButton";
import ModalWrapper from "../components/ModalWrapper";
import { useAppDispatch } from "../redux/hooks";
import { User } from "../data-types";
import { useSelector } from "react-redux";
import { getFriendsAsUsers } from "../redux/friendsReducer";
import { inviteUsers } from "../redux/groupsReducer";
export default function AddGroupMember({ navigation, route }: any) {
  const friendsAsUsers = useSelector(getFriendsAsUsers());
  const [allUsers, setAllUsers] = useState<User[]>(friendsAsUsers);
  const [shownUsers, setShownUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState<User[]>([]);
  const dispatch = useAppDispatch();

  const save = () => {
    console.log("save", selected);
    dispatch(inviteUsers({ groupId: route.params.groupId, users: selected }));
    navigation.pop();
  };
  const [lastSearch, setLastSearch] = useState("");
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <NavigationButton onPress={() => setSaving(true)} title="Next" />
      ),
      headerLeft: () => (
        <NavigationButton onPress={() => navigation.pop()} title="Cancel" />
      ),
    });
  }, []);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (saving) {
      save();
    }
  }, [saving]);
  useEffect(() => {
    setSelected([]);
    updateSearch("");
    setLastSearch("");
  }, []);

  const updateSearch = (text: string, array: User[] = allUsers) => {
    setShownUsers(
      array.filter((c) => c.name?.toLowerCase().includes(text.toLowerCase()))
    );
    setLastSearch(text);
  };
  const toggleSelected = (user: User, isIncluded: boolean) => {
    if (isIncluded) {
      setSelected(selected.filter((c) => c.id !== user.id));
      const newConatacts = [...allUsers, user].sort((a, b) =>
        a.name?.localeCompare(b.name)
      );
      setAllUsers(newConatacts);
      updateSearch(lastSearch, newConatacts);
    } else {
      setSelected([...selected, user]);
      setShownUsers(shownUsers.filter((c) => c.id !== user.id));
      setAllUsers(allUsers.filter((c) => c.id !== user.id));
    }
  };
  return (
    <ModalWrapper>
      <SearchBar onChange={updateSearch} />
      <View>
        {selected.map((user) => (
          <FriendPreview
            key={user.id}
            id={user.id}
            name={user.name}
            onPress={() => toggleSelected(user, true)}
          />
        ))}
      </View>
      <Text style={styles.contactTitle}>Contacts</Text>
      {shownUsers.map((user) => (
        <FriendPreview
          key={user.id}
          id={user.id}
          name={user.name}
          onPress={() => toggleSelected(user, false)}
        />
      ))}
    </ModalWrapper>
  );
}
const styles = StyleSheet.create({
  contactTitle: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
});
