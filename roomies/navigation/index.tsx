/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, Text } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import NotFoundScreen from "../screens/NotFoundScreen";
import GroupsScreen from "../screens/GroupsScreen";
import TodoScreen from "../screens/TodoScreen";
import {
  RootStackParamList,
  RootStackScreenProps,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons/faDollarSign";
import ContactPicker from "../screens/ContactPicker";
import NavigationButton from "../components/NavigationButton";
import CreateGroupScreen from "../screens/CreateGroupScreen";
import ViewGroupScreen from "../screens/ViewGroupScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    //@ts-ignore
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="Group"
        component={ViewGroupScreen}
        options={({ route }) => ({
          title: route.params.groupName,
        })}
      />
      {
        //@ts-ignore
        <Stack.Group screenOptions={{ presentation: "fullScreenModal" }}>
          <Stack.Screen
            name="ContactPicker"
            component={ContactPicker}
            options={(props: RootStackScreenProps<"ContactPicker">) => ({
              title: "Select Contacts",
            })}
          />
          <Stack.Screen
            name="CreateGroup"
            component={CreateGroupScreen}
            options={(props: RootStackScreenProps<"CreateGroup">) => ({
              title: "Create Group",
            })}
          />
        </Stack.Group>
      }
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    //@ts-ignore
    <BottomTab.Navigator
      initialRouteName="Groups"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Groups"
        component={GroupsScreen}
        options={({ navigation }: RootTabScreenProps<"Groups">) => ({
          title: "Groups",
          tabBarIcon: ({ color }) => (
            <TabBarIcon icon={faHouse} color={color} />
          ),
          headerRight: () => (
            <NavigationButton
              title="Add friends"
              onPress={() => navigation.navigate("ContactPicker")}
            />
          ),
          headerLeft: () => (
            <NavigationButton
              title="Create group"
              onPress={() => navigation.navigate("CreateGroup")}
            />
          ),
        })}
      />

      <BottomTab.Screen
        name="Todo"
        component={TodoScreen}
        options={{
          title: "Todo",
          tabBarIcon: ({ color }) => <TabBarIcon icon={faList} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Money"
        component={TodoScreen}
        options={{
          title: "Money",
          tabBarIcon: ({ color }) => (
            <TabBarIcon icon={faDollarSign} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Shopping"
        component={TodoScreen}
        options={{
          title: "Shopping",
          tabBarIcon: ({ color }) => (
            <TabBarIcon icon={faShoppingCart} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={TodoScreen}
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <TabBarIcon icon={faUser} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  icon: React.ComponentProps<typeof FontAwesomeIcon>["icon"];
  color: string;
}) {
  return <FontAwesomeIcon size={30} style={{ marginBottom: -3 }} {...props} />;
}
