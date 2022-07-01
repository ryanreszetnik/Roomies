import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Transaction } from "../data-types";

export default function TransactionPreview({
  transaction,
}: {
  transaction: Transaction;
}) {
  return (
    <View style={styles.container}>
      <Text>TransactionPreview</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 10,
    height: 50,
    backgroundColor: "#333",
    borderRadius: 5,
  },
});
