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
import React, { useEffect, useRef, useState } from "react";
import * as Contacts from "expo-contacts";
import ContactCard from "../components/ContactCard";
import SearchBar from "../components/SearchBar";
import NavigationButton from "../components/NavigationButton";
import ModalWrapper from "../components/ModalWrapper";
import { useAppDispatch } from "../redux/hooks";
import { addFriends } from "../redux/friendsReducer";
export default function ContactPicker({ navigation, route }: any) {
  const [allContacts, setAllContacts] = useState<Contacts.Contact[]>([]);
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [selected, setSelected] = useState<Contacts.Contact[]>([]);
  const dispatch = useAppDispatch();

  const save = () => {
    console.log("save", selected);
    const selectedFriends = selected.map((contact) => {
      let number = contact.phoneNumbers ? contact.phoneNumbers[0].digits : "";
      if (!number) {
        number = "";
      }
      return {
        name: contact.name,
        phoneNumber: number,
        id: contact.id,
      };
    });
    dispatch(addFriends(selectedFriends));
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
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          const filteredContacts = data
            .filter(
              (c) =>
                c.hasOwnProperty("name") && c.hasOwnProperty("phoneNumbers")
            )
            .sort((a, b) => a.name?.localeCompare(b.name));
          setAllContacts(filteredContacts);
          setContacts(filteredContacts);
        }
      } else {
        setAllContacts([]);
        setContacts([]);
      }
    })();
  }, []);
  const updateSearch = (
    text: string,
    array: Contacts.Contact[] = allContacts
  ) => {
    setContacts(
      array.filter((c) => c.name?.toLowerCase().includes(text.toLowerCase()))
    );
    setLastSearch(text);
  };
  const toggleSelected = (contact: Contacts.Contact, isIncluded: boolean) => {
    if (isIncluded) {
      setSelected(selected.filter((c) => c.id !== contact.id));
      const newConatacts = [...allContacts, contact].sort((a, b) =>
        a.name?.localeCompare(b.name)
      );
      setAllContacts(newConatacts);
      updateSearch(lastSearch, newConatacts);
    } else {
      setSelected([...selected, contact]);
      setContacts(contacts.filter((c) => c.id !== contact.id));
      setAllContacts(allContacts.filter((c) => c.id !== contact.id));
    }
  };
  return (
    <ModalWrapper>
      <SearchBar onChange={updateSearch} />
      <View>
        {selected.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            selected={true}
            onSelect={() => toggleSelected(contact, true)}
          />
        ))}
      </View>
      <Text style={styles.contactTitle}>Contacts</Text>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onSelect={(c) => toggleSelected(c, false)}
          selected={false}
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
