import {StyleSheet, View} from 'react-native';
import RootNavigator from './src/navigation/rootNavigations';
import {AppProvider} from './src/hooks/useContext';
import React = require('react');
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function App() {
  
  Ionicons.loadFont();
  MaterialCommunityIcons.loadFont();
  return (
    <AppProvider>
      <View style={styles.container} >
        <RootNavigator />
      </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusbar: {
    color: 'gray',
  },
});
