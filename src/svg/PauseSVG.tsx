import React, {SVGProps} from 'react';
import Svg, { Circle, Rect, Defs, G} from 'react-native-svg';

//import g from 'react-native-svg'
interface HistoireSVGProps extends SVGProps<SVGElement> {
  width: string;
  height: string;
  fill: string;
}

const PauseSVG: React.FC<HistoireSVGProps> = ({width, height, fill}) => {
  return (
    <Svg width={width} height={height} fill={fill} viewBox="0 0 73 63">
      <G filter="url(#filter0_d_364_1533)">
        <Circle cx={77.7162} cy={77.2839} r={76.8258} fill="#92F200" />
        <Circle
          cx="77.7162"
          cy="77.2839"
          r="74.6097"
          stroke="white"
          stroke-width="4.43226"
        />
      </G>

      <Rect
        x="41.5193"
        y="35.1774"
        width="29.5484"
        height="85.6903"
        rx="8.12581"
        fill="white"
        stroke="#39BD01"
        stroke-width="1.47742"
      />
      <Rect
        x="82.887"
        y="35.1774"
        width="29.5484"
        height="85.6903"
        rx="8.12581"
        fill="white"
        stroke="#39BD01"
        stroke-width="1.47742"
      />
      <Defs>
        <filter
          id="filter0_d_364_1533"
          x="0.890381"
          y="0.458069"
          width="153.652"
          height="158.084"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.43226" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.225553 0 0 0 0 0.741667 0 0 0 0 0.00309026 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_364_1533"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_364_1533"
            result="shape"
          />
        </filter>
      </Defs>
    </Svg>
  );
};

export default PauseSVG;
