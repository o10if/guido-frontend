import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import {
  Icon,
  TouchableOpacity,
  Screen,
} from '@shoutem/ui';

import RoutesList from './RoutesList';
import SearchResult from './SearchResult';
import SearchContainer from './SearchContainer';

export default class RouteSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  onSubmitEditing(event){
    var textRearch = this.state.text;

    this.props.navigator.push({
      title: 'Search',
      name: 'SearchContainer',
      component: SearchContainer,
    });
  }

  rowPressed() {
      this.props.navigator.push({
        title: 'Search',
        name: 'SearchContainer',
        component: SearchContainer,
      });
  }

  render() {
    return (
      <Screen style={{marginTop:60}}>
        <TouchableOpacity
          onPress={()=>this.rowPressed()}>
          <Icon name="search"/>
        </TouchableOpacity>
        <RoutesList />
      </Screen>
    );
  }
}
