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

export default class RoutesList extends Component {

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      results: [{
        "id": "a4b76c9ef67dbf",
        "description": "trajet1 trajet1 trajet1 trajet1 trajet1 trajet1",
        "image": { "url": "http://ortholudo.s3.amazonaws.com/production/locations/pictures/000/000/037/original/lyon.jpeg" },
      }, {
        "id": "c23fb35ecceafb",
        "description": "trajet2 trajet2 trajet2 trajet2 trajet2 trajet2",
        "image": { "url": "http://static.vueling.com/cms/media/1216826/lyon.jpg" },
      }, {
        "id": "c142e53d23aec",
        "description": "trajet3 trajet3 trajet3 trajet3 trajet3 trajet3",
        "image": { "url": "http://lyon-sortie.fr/wp-content/uploads/sites/116/2016/09/Lyon.jpg" },
      }, {
        "id": "cedfbcfaebfae",
        "description": "trajet4 trajet4 trajet4 trajet4 trajet4 trajet4",
        "image": { "url": "http://ortholudo.s3.amazonaws.com/production/locations/pictures/000/000/037/original/lyon.jpeg" },
      }],
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
              <Title styleName="md-gutter-bottom">Trajet {result.id}</Title>
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
      <Screen style={{flex:1}}>
        <ListView
          data={this.state.results}
          renderRow={this.renderRow}
        />
      </Screen>
    );
  }
}
