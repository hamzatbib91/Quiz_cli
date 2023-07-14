import React, {SVGProps} from 'react';
import Svg, {Path} from 'react-native-svg';
import COLORS from '../constants/colors';
interface SportSVGProps extends SVGProps<SVGElement> {
  width: string;
  height: string;
  fill: string;
}

const SportSVG: React.FC<SportSVGProps> = ({width, height, fill}) => {
  return (
    <Svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 62 62">
      <Path
        d="M10.1414 44.4197L20.1822 46.1405L24.7224 54.9981C26.7273 55.521 28.8313 55.7995 31.0002 55.7995C33.176 55.7995 35.2861 55.5192 37.2971 54.9929L42.0478 45.9536L51.8906 44.3703C54.126 40.885 55.513 36.8032 55.7604 32.4176L48.627 25.1009L50.1619 15.2551C47.4814 11.9963 43.9857 9.43353 39.9866 7.87833L30.8275 12.3999L21.9496 7.90346C17.9491 9.47206 14.4555 12.05 11.7816 15.3239L13.2476 25.4032L6.24152 32.4435C6.49365 36.8405 7.89138 40.9309 10.1412 44.4206L10.1414 44.4197ZM31 62C13.8791 62 0 48.1209 0 31C0 13.8791 13.8791 0 31 0C48.1209 0 62 13.8791 62 31C62 48.1209 48.1209 62 31 62ZM19.22 27.8114L30.9613 18.6001L42.47 27.8114L37.045 41.54H24.645L19.22 27.8114Z"
        fill={COLORS.white}
        stroke={'#000'}
        strokeWidth={1}
      />
    </Svg>
  );
};

export default SportSVG;
