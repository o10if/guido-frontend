import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import {
  Icon
} from '@shoutem/ui';

import RoutesList from './RoutesList';
import SearchResult from './SearchResult';

export default class RouteSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  onSubmitEditing(event){
    var textSearch = this.state.text;

    this.props.navigator.push({
      title: textSearch,
      name: 'SearchResult',
      component: SearchResult,
      passProps: {text: textSearch}
    });
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{margin:5, height:35, borderColor: '#E0E0E0', backgroundColor: '#E0E0E0', borderWidth: 1, borderRadius: 10, flexDirection: 'row'}}>
          <Icon
            style={{height:32, color:'gray', paddingLeft:5, paddingTop:2}}
            name="search" />
          <TextInput
            returnKeyType = "search"
            underlineColorAndroid='transparent'
            style={{flex: 1, height: 30, fontSize: 15, paddingBottom: 5}}
            placeholder="Type here to search route"
            value={this.state.text}
            onChangeText={(text) => this.setState({text})}
            onSubmitEditing={this.onSubmitEditing.bind(this)}
          />
        </View>
        <RoutesList navigator={this.props.navigator}/>
      </View>
    );
  }
}
