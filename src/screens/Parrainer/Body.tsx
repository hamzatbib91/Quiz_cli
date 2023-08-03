import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Clipboard,
  Alert,
  Share,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import COLORS from '../../constants/colors';
import { useAuthentication } from '../../hooks/useAuthentication';

// const width = Dimensions.get('window').width; //full width


const Body = () => {
  const { user, loding } = useAuthentication();
  const [referralCode, setReferralCode] = useState<any>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!loding) {
      setReferralCode(user.referralCode);
    }
  });
  const copyToClipboard = async () => {
    const textToCopy = referralCode; // Replace with the desired text to be copied
    await Clipboard.setString(textToCopy ? textToCopy : "");
    Alert.alert('Copied to clipboard!');
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: referralCode,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={{ flex: 8, flexDirection: 'column', marginTop: 40, gap: 40 }}>
      <View style={{ flexDirection: 'column', gap: 15 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 17, color: COLORS.white }}>
          COMMENT CELA FONCTIONNE ?
        </Text>
        <Text
          style={{
            lineHeight: 22,
            fontSize: 15,
            color: COLORS.white,
            paddingRight: 20,
          }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          omnis nihil itaque, sequi expedita accusamus molestiae molestias
          nostrum voluptatibus eveniet, quae labore. Harum illo sapiente
          consequatur. Assumenda sint labore earum.
        </Text>
      </View>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 25,
            color: COLORS.white,
          }}>
          C'EST PARTI !
        </Text>
        <View style={styles.copie}>
          <TouchableOpacity>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{referralCode}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={copyToClipboard}>
            <Image
              source={require('../../images/copie.png')}
              style={{ width: 25, height: 25, alignSelf: 'center' }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{ flexDirection: 'row', gap: 15, justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={onShare}
              style={{
                backgroundColor: COLORS.facebook,
                width: 55,
                height: 55,
                padding: 10,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              <Image
                source={require('../../images/facebook.png')}
                style={{ alignSelf: 'center', width: '100%', height: '100%' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onShare}
              style={{
                backgroundColor: COLORS.twitter,
                width: 55,
                height: 55,
                padding: 10,
                borderRadius: 10,
                borderWidth: 2,
              }}>
              <Image
                source={require('../../images/twitter.png')}
                style={{ alignSelf: 'center', width: '100%', height: '85%' }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles: any = {
  copie: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.white,
    marginVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
};

export { Body };
