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
} from '@shoutem/ui';

export default class SearchResult extends Component {

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      results: [{
        "id": "1",
        "description": "trajet1 trajet1 trajet1 trajet1 trajet1 trajet1",
        "image": { "url": "http://ortholudo.s3.amazonaws.com/production/locations/pictures/000/000/037/original/lyon.jpeg" },
      }, {
        "id": "2",
        "description": "trajet2 trajet2 trajet2 trajet2 trajet2 trajet2",
        "image": { "url": "http://static.vueling.com/cms/media/1216826/lyon.jpg" },
      }, {
        "id": "3",
        "description": "trajet3 trajet3 trajet3 trajet3 trajet3 trajet3",
        "image": { "url": "http://lyon-sortie.fr/wp-content/uploads/sites/116/2016/09/Lyon.jpg" },
      }, {
        "id": "4",
        "description": "trajet4 trajet4 trajet4 trajet4 trajet4 trajet4",
        "image": { "url": "http://ortholudo.s3.amazonaws.com/production/locations/pictures/000/000/037/original/lyon.jpeg" },
      }],
    }
  }

  renderRow(result) {
    return (
      <View>
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
    );
  }

  render() {
    return (
      <Screen>
        <ListView
          data={this.state.results}
          renderRow={this.renderRow}
        />
      </Screen>
    );
  }
}
