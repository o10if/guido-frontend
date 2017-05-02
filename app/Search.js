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
  Subtitle
} from '@shoutem/ui';

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

export default class SearchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items,
      results: []
    };
    this._handleResults = this._handleResults.bind(this);
  }

  _handleResults(results) {
    this.setState({ results });
  }

  render() {
    return (
      <View>
        <View style={{ marginTop: 50 }}>
          <TouchableOpacity onPress={() => this.searchBar.show()}>
            <Icon name="search" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.searchBar.hide()}>
            <Icon name="close" />
          </TouchableOpacity>
        </View>
        <View>
          {
            this.state.results.map((result, i) => {
              return (
                <TouchableOpacity onPress={() => this.searchBar.hide()}>
                    <View>
                      <Image
                        style={{ width: 355, height: 100}}
                        source={{ uri: result.image.url }}
                      >
                        <Tile>
                          <Title>{result.title}</Title>
                          <Subtitle>{result.subtitle}</Subtitle>
                        </Tile>
                      </Image>
                      <Divider styleName="line" />
                    </View>
                </TouchableOpacity>
              );
            })
          }

        </View>
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={items}
          handleResults={this._handleResults}
          showOnLoad
        />
      </View>
    );
  }
}
