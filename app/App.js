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
import RouteSearchBar from './RouteSearchBar';
import SearchResult from './SearchResult';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import SearchHome from './SearchHome';

export default React.createClass({
  render() {
    return <SearchHome />
  },
});
