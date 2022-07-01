import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import * as Contacts from "expo-contacts";

export default function ({
  contact,
  selected,
  onSelect,
}: {
  contact: Contacts.Contact;
  selected: boolean;
  onSelect: (contact: Contacts.Contact) => void;
}) {
  const phoneNumber = contact.phoneNumbers
    ? contact.phoneNumbers[0].number
    : "";
  return (
    <TouchableOpacity
      style={selected ? styles.buttonSelected : styles.button}
      onPress={() => onSelect(contact)}
    >
      <Text style={styles.name} key={contact.id}>
        {contact.name}
      </Text>
      <Text style={styles.phoneNumber}>{phoneNumber}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333",
    borderRadius: 10,
    height: 50,
    marginVertical: 2,
    padding: 7,
    paddingLeft: 10,
  },
  buttonSelected: {
    backgroundColor: "#666",
    borderRadius: 10,
    height: 50,
    marginVertical: 2,
    padding: 7,
    paddingLeft: 10,
  },
  name: {
    color: "white",
    fontSize: 18,
  },
  phoneNumber: {
    color: "#aaa",
  },
});
