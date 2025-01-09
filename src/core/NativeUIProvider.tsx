import React, { PropsWithChildren, useEffect } from "react";
import { appThemes } from "./themes";
import { breakpoints } from "./breakpoints";
import {
  StyleSheet,
  UnistylesRuntime,
  UnistylesThemes,
} from "react-native-unistyles";

StyleSheet.configure({
  breakpoints,
  themes: appThemes,
  settings: {
    initialTheme: "light",
    adaptiveThemes: false,
  },
});

const NativeUIProvider: React.FC<
  PropsWithChildren<{ colorMode?: keyof UnistylesThemes }>
> = ({ children, colorMode = "light" }) => {
  useEffect(() => {
    UnistylesRuntime.setTheme(colorMode === "dark" ? "dark" : "light");
  }, [colorMode]);
  return children;
};

export default NativeUIProvider;
