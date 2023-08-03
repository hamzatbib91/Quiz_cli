import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Arrow = (props:any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3 12H21M10 19L3 12L10 19ZM3 12L10 5L3 12Z"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Arrow;