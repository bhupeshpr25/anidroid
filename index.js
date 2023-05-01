import "expo-router/entry";
import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import { Home } from "./app/index";

export default function Main() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
