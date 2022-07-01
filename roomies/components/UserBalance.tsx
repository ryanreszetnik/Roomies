import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function UserBalance({
  name,
  balance,
}: {
  name: string;
  balance: number;
}) {
  const getText = () => {
    if (balance === 0) {
      return "is settled up";
    }
    if (balance > 0) {
      return `is owed $${balance}`;
    }
    return `owes $${-balance}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        {balance === 0 && <Text style={styles.text}>is settled up</Text>}
        {balance > 0 && <Text style={styles.text}>is owed</Text>}
        {balance < 0 && <Text style={styles.text}>owes</Text>}
        {balance !== 0 && (
          <Text style={balance > 0 ? styles.positiveText : styles.negativeText}>
            ${Math.abs(balance)}
          </Text>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: "white",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 18,
    paddingRight: 5,
  },
  name: {
    color: "white",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 18,
    fontWeight: "bold",
    paddingRight: 5,
  },
  textContainer: {
    flexDirection: "row",
    height: "100%",
    paddingLeft: 15,
  },
  positiveText: {
    color: "#5f5",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 18,
  },
  negativeText: {
    color: "red",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 18,
  },
  container: {
    height: 50,
    margin: 2,
    backgroundColor: "#333",
    borderRadius: 4,
  },
});
