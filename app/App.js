import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import { styles } from './Styles';
import FacebookTabBar from './FacebookTabBar';
import RestaurantHome from './RestaurantHome';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default React.createClass({
  render() {
    return <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={0}
      renderTabBar={() => <FacebookTabBar />}
      >
      <ScrollView tabLabel="ios-eye" style={styles.tabView}>
        <RestaurantHome />
      </ScrollView>
      <ScrollView tabLabel="ios-map" style={styles.tabView}>
        <RestaurantHome />
      </ScrollView>
      <ScrollView tabLabel="md-list" style={styles.tabView}>
        <RestaurantHome />
      </ScrollView>
    </ScrollableTabView>;
  },
});
