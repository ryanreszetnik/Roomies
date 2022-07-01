import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import store from "./redux/store";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}
