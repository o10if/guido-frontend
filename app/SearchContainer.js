import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Icon,
  Row,
  Image,
  Tile,
  Title,
  Divider,
  Subtitle,
  ListView,
  TextInput
} from '@shoutem/ui';

import SearchResult from './SearchResult';
import RouteDetail from './RouteDetail';


import SearchBar from 'react-native-searchbar';

const items = [
{
  "title": "Street art",
  "subtitle": "A walk by the best graffiti spots of Lyon",
  "image": { "url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdTw0nPNXmis_5a0QZ1Hd3VhK2hPQYUDOALjqL70982qq2B-_N" }
},
{
  "title": "History",
  "subtitle": "See all the important historical sites of Lyon",
  "image": { "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmypAfm3oVWNHtZ1GcRhpo6uu8psEn_pcrvApQGQ2jnjUT2NVA" }
},
{
  "title": "By the Rhone",
  "subtitle": "Refreshing walk next to the river",
  "image": { "url": "https://bonjourparis.com/wp-content/uploads/2015/05/cotes-du-rhone-nord.jmarnaud.flkr_.jpg" }
},
{
  "title": "INSA Campus",
  "subtitle": "See the campus area of INSA in its greatness",
  "image": { "url": "https://i.ytimg.com/vi/EvA2H9zf0Ls/maxresdefault.jpg" }
}
];

const tags = [
  {
    "name": "dsoksko",
  },
  {
    "name": "asasa",
  },
  {
    "name": "dsoksko",
  },
  {
    "name": "dsoksko",
  },
  {
    "name": "dsoksko",
  },
  {
    "name": "dsoksko",
  },
  {
    "name": "dsoksko",
  },
  {
    "name": "dsoksko",
  }
];

export default class SearchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      results: [],
      items,
      tags,
    };
    this._renderRow = this._renderRow.bind(this);
  }


  _renderRow(tags) {
    return (
      <TouchableOpacity
        onPress={()=>this.rowPressed(tags.name)}>

        <View>
          <Row>
            <Icon name="search"/>
            <Text>
              {tags.name}
            </Text>
          </Row>
        </View>
      </TouchableOpacity>
    );
  }

  rowPressed(name) {
      //this push sends all props in passProps to the view SearchResult
      this.props.navigator.push({
        title: 'Results',
        name: 'SearchResult',
        component: SearchResult,
        passProps: {texti: name}
      });
  }

  onSubmitEditing(event){
    var textSearch = this.state.text;
    //this push sends all props in passProps to the view SearchResult
    this.props.navigator.push({
      title: 'Results',
      name: 'SearchResult',
      component: SearchResult,
      passProps: {texti: this.state.text}
    });
  }

  render() {
    return (
      <View style={{marginTop: 50}}>
        <View style={{flexDirection: 'row', margin:25, height:25}}>
          <Icon name="search" style={{marginTop: 3}}/>
          <TextInput
              style={{flex: 1, height: 35, fontSize: 15, paddingBottom: 5}}
              ref= {(el) => { this.text = el; }}
              onChangeText={(text) => this.setState({text})}
              onSubmitEditing={this.onSubmitEditing.bind(this)}
              value={this.state.text}
          />
        </View>
        <View>
          <ListView
            data={tags}
            renderRow={this._renderRow}
          />

        </View>

      </View>
    );
  }
}
