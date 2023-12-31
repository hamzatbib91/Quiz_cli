import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Montre = (props: any) => (
  <Svg
    width={54}
    height={57}
    viewBox="0 0 54 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_433_751)">
      <Circle cx={27} cy={27} r={27} fill="#92F200" />
      <Circle cx={27} cy={27} r={25.5} stroke="white" strokeWidth={3} />
    </G>
    <Path
      d="M21.213 40.4909L21.2213 40.4903L21.2295 40.4896C22.1226 40.4052 22.9187 39.9002 23.3974 39.1256C24.5321 37.3058 25.7668 35.5186 27.0705 33.8117L27.0707 33.8115C31.0822 28.5539 35.8556 23.9053 41.2574 19.9906C42.5683 19.041 42.8887 17.1706 41.9939 15.811L41.5762 16.0859L41.9939 15.811C41.0903 14.4381 39.2767 14.0778 37.9464 15.0429C32.0835 19.2946 26.8946 24.3449 22.5324 30.0627L22.5319 30.0633C21.8744 30.9281 21.2306 31.8102 20.6071 32.7051C19.0672 31.0382 17.6573 29.5759 15.4051 27.3291L15.4045 27.3284C14.2415 26.1723 12.3972 26.2171 11.2911 27.4364L11.2911 27.4364C10.1978 28.6416 10.2431 30.5348 11.3933 31.683L11.3936 31.6833C14.6567 34.936 16.0999 36.4984 18.8584 39.5504L18.9048 39.6019L18.9074 39.6035C19.4503 40.1779 20.1946 40.5 20.9695 40.5C21.0559 40.5 21.1427 40.4951 21.213 40.4909Z"
      fill="white"
      stroke="#39BD01"
    />
    <Defs></Defs>
  </Svg>
);
export default Montre;
