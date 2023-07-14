import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ButtonAccount = ({
  title = '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  src = '',
  isImg = false,
  bg,
  colorIcon,
  textColor,
  iconName,
  onPress = () => {},
}:any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 50,
        width: '100%',
        backgroundColor: bg,
        marginVertical: 7,
        borderRadius: 45,

        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <Text style={{fontSize: 13}}>
          {isImg ? (
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
              }}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          ) : (
            <Icon name={iconName} style={{color: colorIcon, fontSize: 22}} />
          )}
        </Text>
        <Text style={{color: textColor}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonAccount;
