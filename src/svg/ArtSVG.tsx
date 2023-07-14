import React, {SVGProps} from 'react';
import Svg, {Path} from 'react-native-svg';
import COLORS from '../constants/colors';
interface ArtSVGProps extends SVGProps<SVGElement> {
  width: string;
  height: string;
  fill: string;
}
const ArtSVG: React.FC<ArtSVGProps> = ({width, height, fill}) => {
  return (
    <Svg
    width={width}
    height={height}
    fill={fill}
    viewBox="0 0 67 68">
      <Path
        d="M33.4997 6.36055C14.9941 6.36055 0 18.9564 0 34.5003C0 46.9892 9.68804 57.5757 23.0876 61.3001C25.5601 61.9922 28.2137 61.4867 30.2583 59.9344C32.3024 58.382 33.5025 55.9611 33.4994 53.3941C33.503 51.2275 34.365 49.1504 35.8976 47.6184C37.4296 46.0858 39.5065 45.2237 41.6733 45.2202H49.8071L51.7101 10.8889C46.1144 7.87941 39.8529 6.32166 33.5 6.35994L33.4997 6.36055ZM10.4121 40.3963C8.70839 40.2341 7.1854 39.268 6.31142 37.7964C5.36027 36.2477 4.92837 34.4357 5.07911 32.6243C5.38718 28.6044 8.25495 25.4285 11.4979 25.6965H11.4973C13.2034 25.8622 14.7276 26.8331 15.598 28.3094C16.5539 29.8558 16.9822 31.6713 16.8171 33.4821C16.5359 37.3812 13.856 40.4099 10.7602 40.4099L10.4121 40.3963ZM25.152 53.3672C24.2092 54.1646 23.0092 54.5929 21.775 54.5732C21.3246 54.5738 20.8747 54.5241 20.435 54.426C18.6733 53.9851 17.0904 53.0107 15.9036 51.6365C14.7161 50.2625 13.9821 48.5546 13.802 46.748C13.6094 45.0539 14.2686 43.3741 15.5619 42.2632C16.8553 41.1523 18.6153 40.7539 20.2609 41.2002C22.0196 41.6465 23.5996 42.6221 24.7858 43.9956C25.9721 45.3685 26.7079 47.0735 26.8939 48.8783C27.0561 50.5659 26.41 52.2307 25.152 53.3672ZM23.9191 25.1202C22.8435 25.5647 21.6925 25.7968 20.529 25.8034C19.8823 25.8052 19.2386 25.7244 18.6129 25.5623C16.9415 25.1932 15.5476 24.0476 14.8609 22.4803C14.6216 21.8983 14.4984 21.2743 14.499 20.6445C14.6108 19.2136 15.1367 17.8461 16.0118 16.7089C16.8876 15.5717 18.0751 14.7139 19.43 14.2395C21.1199 13.5115 23.0012 13.3511 24.7899 13.7842C26.4607 14.1533 27.8552 15.2983 28.5419 16.8662C29.7209 19.8405 27.6709 23.5392 23.9188 25.1202H23.9191ZM31.7179 17.0002C31.7179 13.7573 35.0278 11.1174 39.0879 11.1174C43.148 11.1174 46.4578 13.7974 46.4578 17.0002C46.4578 20.203 43.1617 22.883 39.0879 22.883C35.014 22.8824 31.7179 20.2162 31.7179 16.9733V17.0002ZM40.87 39.8596C39.271 39.8596 37.7372 39.2244 36.6059 38.0938C35.4753 36.9626 34.84 35.4288 34.84 33.8297C34.84 32.2306 35.4753 30.6969 36.6059 29.5656C37.7371 28.435 39.2709 27.7998 40.87 27.7998C42.4691 27.7998 44.0028 28.435 45.134 29.5656C46.2647 30.6968 46.8999 32.2306 46.8999 33.8297C46.9035 35.4299 46.2694 36.966 45.1376 38.0973C44.0064 39.2291 42.4702 39.8632 40.87 39.8596Z"
        fill={COLORS.white}
        stroke={'#000'}
        strokeWidth={1}
      />
      <Path
        d="M22.7798 45.6887C21.9926 44.7394 20.9217 44.0682 19.7248 43.7726C19.4646 43.7164 19.2001 43.6853 18.9339 43.6787C18.3387 43.659 17.7567 43.8594 17.299 44.2416C16.6577 44.8309 16.3431 45.6959 16.4549 46.5597C16.5674 47.7902 17.0753 48.9513 17.902 49.8696C18.6922 50.8243 19.7679 51.5008 20.9708 51.7988C21.8083 52.0315 22.7056 51.8575 23.3959 51.3298C23.966 50.7891 24.2699 50.0246 24.2269 49.2398V48.9718C24.1108 47.7502 23.6035 46.5987 22.7798 45.6887Z"
        fill={COLORS.white}
        stroke={'#000'}
        strokeWidth={1}
      />
      <Path
        d="M11.2957 28.3761C9.56689 28.229 7.94574 30.279 7.75784 32.8112L7.75843 32.8118C7.63999 34.0424 7.92234 35.2782 8.56243 36.3359C8.98955 37.0867 9.75286 37.5856 10.6125 37.6759C12.3545 37.7968 13.9625 35.7598 14.1504 33.227H14.1498C14.2659 31.9965 13.9841 30.7611 13.3458 29.7029C12.9157 28.9569 12.153 28.4634 11.2957 28.3761Z"
        fill={COLORS.white}
        stroke={'#000'}
        strokeWidth={1}
      />
      <Path
        d="M61.2918 18.7817L62.6318 44.1481C64.6873 43.0187 66.1284 41.0272 66.5579 38.7211C66.8271 37.3296 66.9749 35.9172 67 34.5002C66.9629 28.7598 64.9469 23.2084 61.2918 18.7817Z"
        fill={COLORS.white}
        stroke={'#000'}
        strokeWidth={1}
      />
      <Path
        d="M24.1198 16.3562C22.9138 16.072 21.6479 16.1899 20.515 16.6912C18.1701 17.6561 16.7499 19.8271 17.4061 21.435H17.4067C17.7728 22.2289 18.5026 22.7936 19.3627 22.9491C20.5652 23.2207 21.8225 23.1034 22.9538 22.6141C25.3118 21.6492 26.7327 19.4652 26.0759 17.8572C25.7068 17.0688 24.977 16.5093 24.1198 16.3562Z"
        fill={COLORS.white}
        stroke={'#000'}
        strokeWidth={1}
      />
      <Path
        d="M43.777 16.9732C43.777 18.7421 41.6773 20.1754 39.0871 20.1754C36.4968 20.1754 34.3971 18.7421 34.3971 16.9732C34.3971 15.2043 36.4968 13.7704 39.0871 13.7704C41.6773 13.7704 43.777 15.2043 43.777 16.9732Z"
        fill={COLORS.white}
        stroke={'#000'}
        strokeWidth={1}
      />
      <Path
        d="M60.2995 49.3473V49.1332L57.6996 2.3408C57.6996 1.55654 57.0637 0.920654 56.2795 0.920654C55.4952 0.920654 54.8593 1.55654 54.8593 2.3408L52.2594 49.1332V49.3473C52.2594 50.3852 52.6716 51.3806 53.4056 52.114C54.139 52.848 55.1344 53.2602 56.1723 53.2602H56.3864C57.4243 53.2602 58.4197 52.848 59.1531 52.114C59.8871 51.3806 60.2992 50.3852 60.2992 49.3473H60.2995Z"
        fill={COLORS.white}
        stroke={'#000'}
        strokeWidth={1}
      />
      <Path
        d="M56.2795 53.26C54.8582 53.26 53.4948 53.8247 52.4893 54.8297C51.4843 55.8353 50.9196 57.1987 50.9196 58.62C50.9196 61.8629 54.9395 62.6399 54.9395 67.9999C58.9595 67.9999 61.6395 61.5811 61.6395 58.62C61.6395 57.1986 61.0748 55.8352 60.0698 54.8297C59.0642 53.8247 57.7008 53.26 56.2795 53.26Z"
        fill={COLORS.white}
        stroke={'#000'}
        strokeWidth={1}
      />
    </Svg>
  );
};

export default ArtSVG;