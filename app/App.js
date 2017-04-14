import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import { styles } from './Styles';
import FacebookTabBar from './FacebookTabBar';
import RouteDetail from './RouteDetail';
import RoutesList from './RoutesList';
import RouteGeneral from './RouteGeneral';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default React.createClass({
  render() {
    return <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={0}
      renderTabBar={() => <FacebookTabBar />}
      >
      <ScrollView tabLabel="ios-navigate" style={styles.tabView}>
        <RouteGeneral />
      </ScrollView>
      <ScrollView tabLabel="ios-heart" style={styles.tabView}>
        <RouteDetail />
      </ScrollView>
      <ScrollView tabLabel="ios-eye" style={styles.tabView}>
        <RoutesList />
      </ScrollView>
      <ScrollView tabLabel="ios-person" style={styles.tabView}>
        <RoutesList />
      </ScrollView>
    </ScrollableTabView>;
  },
});
