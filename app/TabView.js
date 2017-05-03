import React from 'react';

import {
  ScrollView, Text
} from 'react-native';
import { styles } from './Styles';
import FacebookTabBar from './FacebookTabBar';
import RouteDetail from './RouteDetail';
import RoutesList from './RoutesList';
import RouteGeneral from './RouteGeneral';
import RouteSearchBar from './RouteSearchBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default React.createClass({
  render() {
    return <ScrollableTabView
      initialPage={0}
      renderTabBar={() => <FacebookTabBar />}
    >
      <ScrollView tabLabel="ios-eye" style={styles.tabView}>
        <RouteSearchBar navigator={this.props.navigator}/>
      </ScrollView>
      <ScrollView tabLabel="ios-navigate" style={styles.tabView}>
        <RouteGeneral/>
      </ScrollView>
      <ScrollView tabLabel="ios-person" style={styles.tabView}>
        <Text>Hey</Text>
      </ScrollView>
    </ScrollableTabView>;
  },
});
