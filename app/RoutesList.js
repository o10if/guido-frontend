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
  Caption,
} from '@shoutem/ui';

import RouteDetail from './RouteDetail';

export default class RoutesList extends Component {

  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      results: [{
        "id": "a4b76c9ef67dbf",
        "name": "Trajet1",
        "description": "trajet1 trajet1 trajet1 trajet1 trajet1 trajet1",
        "image": { "url": "http://ortholudo.s3.amazonaws.com/production/locations/pictures/000/000/037/original/lyon.jpeg" },
        "like": "325",
        "comments": "626",
      }, {
        "id": "c23fb35ecceafb",
        "name": "Trajet2",
        "description": "trajet2 trajet2 trajet2 trajet2 trajet2 trajet2",
        "image": { "url": "http://static.vueling.com/cms/media/1216826/lyon.jpg" },
        "like": "875",
        "comments": "623",
      }, {
        "id": "c142e53d23aec",
        "name": "Trajet3",
        "description": "trajet3 trajet3 trajet3 trajet3 trajet3 trajet3",
        "image": { "url": "http://lyon-sortie.fr/wp-content/uploads/sites/116/2016/09/Lyon.jpg" },
        "like": "290",
        "comments": "315",
      }, {
        "id": "cedfbcfaebfae",
        "name": "Trajet4",
        "description": "trajet4 trajet4 trajet4 trajet4 trajet4 trajet4",
        "image": { "url": "http://ortholudo.s3.amazonaws.com/production/locations/pictures/000/000/037/original/lyon.jpeg" },
        "like": "98",
        "comments": "24",
      }],
    }
  }

  rowPressed(result) {
      var id = result.id;
      var name = result.name;

      this.props.navigator.push({
        title: name,
        name: 'RouteDetail',
        component: RouteDetail,
        passProps: {id: id}
      });
  }

  renderRow(result) {
    return (
      <TouchableOpacity
        style={{flex:1}}
        onPress={()=>this.rowPressed(result)}>
        <View style={{flex:1}}>
          <Image
            styleName="large-banner"
            source={{ uri: result.image.url }}
          >
            <Tile style={{marginTop:-50}}>
              <Title styleName="md-gutter-bottom" style={{marginLeft:-30}}>{result.name} {result.id}</Title>
              <Subtitle styleName="sm-gutter-horizontal" style={{marginLeft:-30}}>{result.description}</Subtitle>
            </Tile>
            <View styleName="horizontal" style={{marginTop:150, marginRight:0}}>
              <View styleName="horizontal flexible">
                <Icon style={{color: 'white', flex:1, top:3, transform:[{scale:0.75}]}} name="like" />
                <Caption style={{color: 'white', flex:1}} >{result.like}</Caption>
              </View>
              <View styleName="horizontal flexible">
                <Icon style={{color: 'white', flex:1, top:4.5, transform:[{scale:0.7}]}}  name="comment-full" />
                <Caption style={{color: 'white', flex:1}} >{result.comments}</Caption>
              </View>
            </View>
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
