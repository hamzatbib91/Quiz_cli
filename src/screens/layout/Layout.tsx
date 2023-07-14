/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from 'react';
import {StyleSheet} from 'react-native';
import TabNavigation from '../../navigation/tabNavigation';
const Layout = () => {
  return <TabNavigation />;
};
const styles = StyleSheet.create({
  content: {
    height: '100%',
    paddingVertical: 80,
  },
});
export default Layout;
