import React, {SVGProps} from 'react';
import Svg, {Path} from 'react-native-svg';
import COLORS from '../constants/colors';
interface SienceSVGProps extends SVGProps<SVGElement> {
  width: string;
  height: string;
  fill: string;
}

const SiencesSVG: React.FC<SienceSVGProps> = ({width, height, fill}) => {
  return (
    <Svg width={width} height={height} fill={fill} viewBox="0 0 63 63">
      <Path
        d="M55.9411 31.3404C61.812 25.4276 64.2221 19.6053 61.6867 15.6702C59.9664 13.0026 56.2267 11.5957 50.878 11.5957C48.6423 11.5957 46.2118 11.8464 43.6627 12.3059C40.8625 4.78463 36.4261 0 31.3354 0C26.2514 0 21.8219 4.78475 19.0362 12.3133C16.4803 11.8464 14.0567 11.603 11.8142 11.603C6.46549 11.603 2.72579 13.0099 1.00555 15.6775C-1.53662 19.6126 0.873415 25.4276 6.74444 31.3477H6.73764C0.872522 37.2531 -1.53024 43.0756 1.0046 47.0104C2.72483 49.6779 6.45782 51.0849 11.8133 51.0849C14.049 51.0849 16.4795 50.8342 19.0352 50.3747C21.8146 57.896 26.251 62.6806 31.3353 62.6806C36.4267 62.6806 40.8629 57.8958 43.6486 50.3742C46.1976 50.841 48.6281 51.0844 50.8638 51.0844C56.2126 51.0844 59.9523 49.6776 61.6725 47.0099C64.2147 43.0753 61.8052 37.253 55.941 31.3397L55.9411 31.3404ZM48.8162 14.8419C51.8107 14.8419 55.7321 15.3714 57.3616 17.8996C59.1096 20.6157 57.5078 24.7665 53.6077 29.1542C51.4838 27.281 49.0251 25.4145 46.2813 23.6243C45.9194 20.588 45.3412 17.746 44.5888 15.1485C46.0725 14.9464 47.493 14.8419 48.8162 14.8419ZM42.917 21.549C41.6705 20.8179 40.3821 20.1071 39.0379 19.411C37.7005 18.7216 36.3567 18.0736 35.0126 17.4678C37.1997 16.7294 39.3513 16.1377 41.4057 15.7058C42.012 17.5096 42.5202 19.4663 42.917 21.549ZM31.3354 4.46477C34.8454 4.46477 38.0701 7.78672 40.3612 13.0174C37.4429 13.735 34.4135 14.71 31.3354 15.9217C28.2642 14.7101 25.2274 13.7345 22.3097 13.0174C24.6076 7.78722 27.8323 4.46477 31.3354 4.46477ZM21.2783 15.7059C23.3328 16.1446 25.4848 16.7368 27.6715 17.4679C26.3272 18.0737 24.983 18.7213 23.6461 19.4111C22.316 20.1005 21.0203 20.818 19.767 21.5491C20.1571 19.4733 20.6657 17.5097 21.2783 15.7059ZM5.32331 17.8998C6.95997 15.3717 10.8742 14.8353 13.8687 14.8353C15.192 14.8353 16.6124 14.9466 18.103 15.1487C17.3509 17.7463 16.7729 20.595 16.4105 23.6313C13.7152 25.4002 11.2566 27.2665 9.09758 29.1748C5.18389 24.7802 3.57497 20.6227 5.32331 17.8998ZM11.2011 31.3414C12.6357 29.9695 14.2723 28.6043 16.0835 27.2601C15.9999 28.5902 15.9514 29.9554 15.9514 31.3414H15.9509C15.9509 32.7274 15.9994 34.0851 16.083 35.4226C14.2656 34.0783 12.629 32.7064 11.2011 31.3414ZM13.8687 47.8398C10.8742 47.8398 6.95997 47.3103 5.32331 44.7753C3.56813 42.0523 5.17708 37.8943 9.09808 33.4997C11.2502 35.408 13.7083 37.2745 16.411 39.0432C16.7729 42.0795 17.351 44.9283 18.1035 47.5259C16.6125 47.7353 15.192 47.8398 13.8687 47.8398ZM19.7605 41.126C21.0139 41.8644 22.3095 42.5815 23.6396 43.264C24.9771 43.9534 26.3208 44.6014 27.665 45.2072C25.4779 45.9456 23.3262 46.5373 21.2718 46.9692C20.666 45.1723 20.1506 43.2086 19.7605 41.126ZM31.3358 58.2177C27.8258 58.2177 24.6078 54.8957 22.3167 49.665C25.235 48.9548 28.2644 47.9725 31.3425 46.7608C34.4137 47.9724 37.4505 48.9479 40.3683 49.665C38.0704 54.8952 34.8457 58.2177 31.3357 58.2177H31.3358ZM41.3993 46.9766C39.3447 46.5447 37.1927 45.953 35.0061 45.2146C36.3504 44.6087 37.6945 43.9612 39.0315 43.2713C40.3689 42.582 41.6572 41.8645 42.9106 41.1333C42.5205 43.216 42.0123 45.1728 41.3993 46.9766ZM57.3617 44.7826C55.7251 47.3107 51.8109 47.8403 48.8164 47.8403C47.493 47.8403 46.0726 47.729 44.5889 47.527C45.3482 44.9293 45.919 42.0879 46.2814 39.0511C49.0252 37.2614 51.4839 35.395 53.6078 33.5212C57.5078 37.909 59.1101 42.0665 57.3617 44.7826ZM51.4839 31.3411C50.0493 32.713 48.4127 34.0782 46.6015 35.4156C46.6851 34.0855 46.7269 32.7272 46.7269 31.3411H46.7337C46.7337 29.955 46.6851 28.5973 46.6083 27.2666C48.4193 28.604 50.0562 29.9691 51.4839 31.3411Z"
        fill={COLORS.white}
        stroke={'#000'}
        strokeWidth={1}
      />
    </Svg>
  );
};

export default SiencesSVG;