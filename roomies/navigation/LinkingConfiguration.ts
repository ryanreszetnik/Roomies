/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Groups: {
            screens: {
              GroupsScreen: "groups",
            },
          },
          Todo: {
            screens: {
              TodoScreen: "todo",
            },
          },
          Money: {
            screens: {
              MoneyScreen: "money",
            },
          },
          Shopping: {
            screens: {
              ShoppingScreen: "shopping",
            },
          },
          Account: {
            screens: {
              AccountScreen: "account",
            },
          },
        },
      },
      NotFound: "*",
      CreateGroup: "create-group",
      ContactPicker: "contact-picker",
    },
  },
};

export default linking;
