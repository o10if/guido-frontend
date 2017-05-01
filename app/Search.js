import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Icon,
  Row
} from '@shoutem/ui';

import SearchBar from 'react-native-searchbar';

const items = [
  1337,
  1332,
  13,
  1,
  'Trajet1',
  'Trajet2',
  'Trajet3',
  'Trajet4',

  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: [ 'gold!' ],
              },
            },
          },
        },
      },
    },
  },
  [ 4, 2, 'tree' ],
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
          {
            this.state.results.map((result, i) => {
              return (
                <TouchableOpacity onPress={() => this.searchBar.hide()}>
                  <Row>
                    <Icon name="tweet" />
                    <Text key={i}>{result.toString()}</Text>
                  </Row>
                </TouchableOpacity>
              );
            })
          }
          <TouchableOpacity onPress={() => this.searchBar.show()}>
            <Icon name="search" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.searchBar.hide()}>
            <Icon name="close" />
          </TouchableOpacity>
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
