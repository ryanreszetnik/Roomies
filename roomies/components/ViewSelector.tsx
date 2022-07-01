import React, { useState } from "react";
import SwitchSelector from "react-native-switch-selector";

export default function ViewSelector({
  setSelected,
}: {
  setSelected: (selected: number) => void;
}) {
  const views = [
    { label: "Balances", value: 0 },
    { label: "Transactions", value: 1 },
    { label: "Todos", value: 2 },
    { label: "Shopping", value: 3 },
  ];

  return (
    //@ts-ignore
    <SwitchSelector
      options={views}
      initial={0}
      onPress={setSelected}
      backgroundColor="#333"
      buttonColor="#eee"
      borderColor="#333"
      textColor="#eee"
      selectedColor="#333"
      hasPadding
    />
  );
}
