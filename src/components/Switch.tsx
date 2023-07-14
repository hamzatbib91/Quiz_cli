import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Switch,DefaultTheme } from 'react-native-paper';
import COLORS from '../constants/colors';

const SwitchComponent = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState<Boolean | undefined>(false || undefined);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return <Switch 
        value={isSwitchOn} 
        onValueChange={onToggleSwitch}
        color={DefaultTheme.colors.primary}
        trackColor={{ false: COLORS.greyLight, true: COLORS.GreenText }}
        thumbColor={isSwitchOn ? COLORS.white : COLORS.grey}
        style={[styles.switch,]}
    />;
  };
  const styles = StyleSheet.create({
    switch: {
        marginTop: 10,
        
    },
  });
  export default SwitchComponent;