import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { getGroupById } from "../redux/groupsReducer";
import { RootStackScreenProps } from "../types";
import ViewSelector from "../components/ViewSelector";
import { Group } from "../data-types";
import UserBalance from "../components/UserBalance";
import StyledButton from "../components/StyledButton";
import TransactionPreview from "../components/TransactionPreview";

export default function ViewGroupScreen({
  route,
}: RootStackScreenProps<"Group">) {
  const { groupId } = route.params;
  const group = useAppSelector(getGroupById(groupId));
  const [selected, setSelected] = useState(0);

  if (!group) {
    return (
      <View>
        <Text style={styles.title}>Group Not Found</Text>
      </View>
    );
  }

  return (
    <View>
      <ViewSelector setSelected={setSelected} />
      {selected === 0 && <Balances group={group} />}
      {selected === 1 && <Transactions group={group} />}
      {selected === 2 && <Todos group={group} />}
      {selected === 3 && <Shopping group={group} />}
    </View>
  );
}
const Balances = ({ group }: { group: Group }) => {
  return (
    <View>
      <Text style={styles.title}>Balances</Text>
      {group.members.map((member, i) => (
        <UserBalance key={member.id} name={member.name} balance={i - 1} />
      ))}
    </View>
  );
};
const Transactions = ({ group }: { group: Group }) => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.title}>Transactions</Text>
        <StyledButton title="Add Transaction" onPress={() => {}} />
      </View>
      {group.transactions.map((t) => (
        <TransactionPreview key={t.id} transaction={t} />
      ))}
    </View>
  );
};
const Todos = ({ group }: { group: Group }) => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.title}>Todos</Text>
        <StyledButton title="Add Todo" onPress={() => {}} />
      </View>
    </View>
  );
};
const Shopping = ({ group }: { group: Group }) => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.title}>Shopping</Text>
        <StyledButton title="Add Item" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { color: "white", fontSize: 25, margin: 5, flexGrow: 1 },
});
