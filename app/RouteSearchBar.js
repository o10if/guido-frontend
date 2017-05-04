import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import {
  Icon,
  TouchableOpacity
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
    var textSearch = this.state.text;

    this.props.navigator.push({
      title: textSearch,
      name: 'SearchResult',
      component: SearchResult,
      passProps: {text: textSearch}
    });
  }
  rowPressed() {
      //this push sends all props in passProps to the view SearchResult
      this.props.navigator.push({
        title: 'Rechercher',
        name: 'SearchContainer',
        component: SearchContainer,
      });
  }
  render() {
    return (
      <View style={{flex:1}}>
        <TouchableOpacity onPress={()=>this.rowPressed()} style={{marginBottom:5, height:35, borderColor: '#E0E0E0', backgroundColor: '#E0E0E0', borderWidth: 1, borderRadius: 5, flexDirection: 'row'}}>
          <Icon
            style={{height:32, color:'gray', paddingLeft:5, paddingTop:2}}
            name="search" />
          <Text style={{flex: 1, height: 30, fontSize: 15, marginTop: 5, marginLeft:2}}>Rechercher</Text>
        </TouchableOpacity>
        <RoutesList navigator={this.props.navigator}/>
      </View>
    );
  }
}
