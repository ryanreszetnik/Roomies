import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Modal,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import ContactCard from "../components/ContactCard";
import SearchBar from "../components/SearchBar";
import NavigationButton from "../components/NavigationButton";
import ModalWrapper from "../components/ModalWrapper";
import { useAppDispatch } from "../redux/hooks";
import { createGroup } from "../redux/groupsReducer";
import CustomTextInput from "../components/CustomTextInput";
export default function CreateGroupScreen({ navigation }: any) {
  const [saving, setSaving] = useState(false);
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
  useEffect(() => {
    if (saving) {
      setSaving(false);
      save();
    }
  }, [saving]);
  const [groupName, setGroupName] = useState("");
  const dispatch = useAppDispatch();
  const save = () => {
    if (groupName.length > 0) {
      dispatch(createGroup(groupName));
      navigation.pop();
    }
  };

  return (
    <ModalWrapper>
      <CustomTextInput
        label="Group Name"
        placeholder="123 Sesame Street"
        value={groupName}
        onChange={setGroupName}
      />
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
