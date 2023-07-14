import React from 'react';
import {View, Text, TextInput, StyleSheet, TextInputProps} from 'react-native';
import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface InputProps extends TextInputProps {
  label: string;
  iconName: string;
  error?: string;
  password?: boolean;
  placeholder: string;
  onFocus?: () => void;
}

const Input: React.FC<InputProps> = ({
  label,
  iconName,
  error = '',
  placeholder,
  password = false,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.black
              : COLORS.greyLight,
            alignItems: 'center',
          },
        ]}>
        <Icon
          name={iconName}
          style={{color: COLORS.grey, fontSize: 22, marginRight: 10}}
        />

        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          // secureTextEntry={hidePassword}
          secureTextEntry={hidePassword}
          style={{color: COLORS.darkBlue, flex: 1}}
          {...props}
        />
        {password && !error && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: COLORS.greyLight, fontSize: 22}}
          />
        )}
        {error && <Text style={style.errorIcon}>!</Text>}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: -10,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 45,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 1,
  },
  errorIcon: {
    color: COLORS.red,
    borderColor: COLORS.red,
    borderWidth: 1,
    width: 20,
    height: 20,
    textAlign: 'center',
    borderRadius: 10,
  },
});

export default Input;
