import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

export const HomeIcon = ({ color }) => {
  return (
    <Svg width="20" height="16" viewBox="0 0 20 16" fill="none">
      <Path
        d="M17.3251 8.28915H16.5751V9.03915V15.0051C16.5751 15.1286 16.5442 15.185 16.5345 15.197L16.5343 15.1973C16.5327 15.1993 16.5268 15.2068 16.5033 15.2169C16.4752 15.2288 16.4076 15.25 16.2782 15.25H12.8426V10.0341V9.28409H12.0926H7.90889H7.15889V10.0341V15.25H3.72327C3.59355 15.25 3.52576 15.2289 3.49758 15.2169C3.47407 15.2069 3.46828 15.1994 3.46687 15.1976L3.46669 15.1974C3.45744 15.1859 3.42638 15.13 3.42638 15.0051V9.03915V8.28915H2.67638H1.95976L9.77707 0.852945L9.77715 0.853035L9.78688 0.843436C9.83632 0.794668 9.90862 0.75943 10.0007 0.751144C10.0928 0.75943 10.1651 0.794667 10.2146 0.843436L10.2145 0.843525L10.2244 0.852945L18.0417 8.28915H17.3251Z"
        fill={color || "white"}
        stroke={color || "white"}
        stroke-width="1.5"
      />
    </Svg>
  );
};
