import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";

export default function ModalWrapper({ ...props }: any) {
  return (
    <View style={styles.modalBackground}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>{props.children}</ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  modalBackground: { backgroundColor: "black", width: "100%", height: "100%" },
  safeArea: {
    display: "flex",
    flexDirection: "column",
  },
  scrollView: { width: "100%", backgroundColor: "black" },
});
