import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Changer = (props:any) => (
  <Svg
    width={53}
    height={57}
    viewBox="0 0 53 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_433_766)">
      <Circle cx={26.366} cy={26.366} r={26.366} fill="#4CDAFE" />
      <Circle
        cx={26.366}
        cy={26.366}
        r={24.373}
        stroke="white"
        strokeWidth={3.98617}
      />
    </G>
    <Path
      d="M27.305 14.5005C27.2033 14.4983 27.1019 14.4972 27.0006 14.4972C19.19 14.4972 12.8356 20.8497 12.8356 28.6593C12.8356 36.4696 19.19 42.8217 27.0006 42.8217C34.8114 42.8214 41.1644 36.4692 41.1644 28.659V28.1964V27.7401L41.1218 27.7237C40.8862 26.006 39.4112 24.6821 37.6287 24.6821C35.6804 24.6821 34.0995 26.2598 34.0995 28.2091C34.0995 28.3276 34.1064 28.4454 34.1183 28.5589V28.659C34.1183 32.583 30.9253 35.7763 27.0013 35.7763C23.0776 35.7763 19.8839 32.5829 19.8839 28.659C19.8839 24.7372 23.0777 21.5423 27.0013 21.5423C27.1027 21.5423 27.2042 21.5444 27.3056 21.5488V22.1117V22.1305V22.776H27.3817C27.6725 23.9864 28.7625 24.8866 30.0627 24.8866C30.9341 24.8866 31.6996 24.4779 32.2001 23.8585L35.7974 20.2515C36.3459 19.7514 36.7032 19.0322 36.7032 18.219C36.7032 17.3031 36.2556 16.4974 35.5751 15.9986L32.1039 12.5227C32.041 12.4505 31.9767 12.3867 31.9128 12.3294L31.8647 12.2815L31.6703 12.0881H31.6039C31.1681 11.7898 30.6404 11.6083 30.0623 11.6083C28.7142 11.6083 27.6087 12.5749 27.3655 13.8434L27.305 13.8895V14.2185V14.5005ZM27.3148 22.0162L27.3148 22.0163L27.3148 22.0162Z"
      fill="white"
      stroke="#00ADE3"
      strokeWidth={1.32872}
    />
    <Defs></Defs>
  </Svg>
);
export default Changer;
