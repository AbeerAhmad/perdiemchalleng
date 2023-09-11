import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const GoBackIcon = ({ color = "#fff" }: { color?: string }) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5303 5.46967C16.2374 5.17678 15.7626 5.17678 15.4697 5.46967L9.21967 11.7197C8.92678 12.0126 8.92678 12.4874 9.21967 12.7803L15.4697 19.0303C15.7626 19.3232 16.2374 19.3232 16.5303 19.0303C16.8232 18.7374 16.8232 18.2626 16.5303 17.9697L10.8107 12.25L16.5303 6.53033C16.8232 6.23744 16.8232 5.76256 16.5303 5.46967Z"
        fill={color}
      />
    </Svg>
  );
};
