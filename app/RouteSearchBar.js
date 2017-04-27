import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import {
  Icon
} from '@shoutem/ui';

export default class RouteSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View>
        <View style={{flex: 1, borderColor: '#E0E0E0', backgroundColor: '#E0E0E0', borderWidth: 1, borderRadius: 5, flexDirection: 'row'}}>
          <Icon
            style={{color:'gray', paddingLeft:5, paddingTop:2}}
            name="search" />
          <TextInput
            returnKeyType = "search"
            underlineColorAndroid='transparent'
            style={{flex: 1, height: 30, fontSize: 15, paddingBottom: 5}}
            placeholder="Type here to search route"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <Text style={{fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
