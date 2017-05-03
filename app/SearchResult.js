import React, { Component } from 'react';
import {
  Icon,
  Tile,
  Divider,
  Screen,
  ListView,
  Image,
  View,
  Text,
  Title,
  Subtitle,
  TouchableOpacity,
} from '@shoutem/ui';

import RouteDetail from './RouteDetail';

export default class SearchResult extends Component {

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {

    }
  }

  rowPressed(resultId) {
      var id = resultId;

      this.props.navigator.push({
        title: 'Detail',
        name: 'RouteDetail',
        component: RouteDetail,
        passProps: {id: id}
      });
  }

  renderRow(result) {
    return (
      <TouchableOpacity
        style={{flex:1}}
        onPress={()=>this.rowPressed(result.id)}>
        <View style={{flex:1}}>
          <Image
            styleName="large-banner"
            source={{ uri: result.image.url }}
          >
            <Tile>
              <Title styleName="md-gutter-bottom">{this.props.text} Trajet {result.id}</Title>
              <Subtitle styleName="sm-gutter-horizontal">{result.description}</Subtitle>
            </Tile>
          </Image>
          <Divider styleName="line" />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Screen style={{marginTop:60, flex:1}}>
        <Text>{this.props.texti}</Text>
      </Screen>
    );
  }
}
