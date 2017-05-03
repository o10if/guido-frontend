import React, { Component } from 'react';
import {
  Image,
  ListView,
  Subtitle,
  TouchableOpacity,
  Screen,
  Text,
  GridRow,
  Card,
  View,
  Caption,
  Icon,
} from '@shoutem/ui';

import RouteDetail from './RouteDetail';

export default class SearchResult extends Component {

    constructor(props) {
      super(props);
      this.renderRow = this.renderRow.bind(this);
      this.state = {
        paths: [{
          "id": "a4b76c9ef67dbf",
          "name": "Trajet1",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "http://ortholudo.s3.amazonaws.com/production/locations/pictures/000/000/037/original/lyon.jpeg" },
          "like": "125",
          "comments": "468",
        }, {
          "id": "c23fb35ecceafb",
          "name": "Trajet2",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "http://static.vueling.com/cms/media/1216826/lyon.jpg" },
          "like": "1332",
          "comments": "432",
        }, {
          "id": "c142e53d23aec",
          "name": "Trajet3",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "http://lyon-sortie.fr/wp-content/uploads/sites/116/2016/09/Lyon.jpg" },
          "like": "1232",
          "comments": "238",
        }, {
          "id": "cedfbcfaebfae",
          "name": "Trajet4",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "http://ortholudo.s3.amazonaws.com/production/locations/pictures/000/000/037/original/lyon.jpeg"  },
          "like": "65",
          "comments": "544",
        }, {
          "id": "cedfbcfaebfae",
          "name": "Trajet5",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" },
          "like": "154",
          "comments": "542",
        }, {
          "id": "cedfbcfaebfae",
          "name": "Trajet6",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" },
          "like": "542",
          "comments": "98",
        }, {
          "id": "cedfbcfaebfae",
          "name": "Trajet7",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "http://ortholudo.s3.amazonaws.com/production/locations/pictures/000/000/037/original/lyon.jpeg" },
          "like": "643",
          "comments": "26",
        }, {
          "id": "cedfbcfaebfae",
          "name": "Trajet8",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" },
          "like": "357",
          "comments": "37",
        }, {
          "id": "cedfbcfaebfae",
          "name": "Trajet9",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" },
          "like": "876",
          "comments": "537",
        }, {
          "id": "cedfbcfaebfae",
          "name": "Trajet10",
          "description": "Trajet Trajet Trajet Trajet Trajet Trajet Trajet",
          "image": { "url": "http://ortholudo.s3.amazonaws.com/production/locations/pictures/000/000/037/original/lyon.jpeg" },
          "like": "56",
          "comments": "54",
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

    renderRow(result, sectionId, index) {

      const cellViews = result.map((path, id) => {
      return (
          <TouchableOpacity key={id} styleName="flexible" onPress={()=>this.rowPressed(path)}>
            <Card styleName="flexible">
              <Image styleName="medium-wide" source={{uri: path.image && path.image.url}} />
              <View styleName="content">
                <Subtitle numberOfLines={3}>{this.props.text} {path.name} {path.id}</Subtitle>
                <View styleName="horizontal">
                  <Caption styleName="collapsible" numberOfLines={2}>{path.description}</Caption>
                </View>
                <View styleName="horizontal">
                  <Caption styleName="collapsible" numberOfLines={2}> </Caption>
                </View>
                <View styleName="horizontal">
                  <View styleName="horizontal flexible">
                    <Icon style={{color: 'gray', flex:1, top:3, transform:[{scale:0.75}]}} name="like" />
                    <Caption style={{color: 'gray', flex:1}} >{path.like}</Caption>
                  </View>
                  <View styleName="horizontal flexible">
                    <Icon style={{color: 'gray', flex:1, top:4.5, transform:[{scale:0.7}]}}  name="comment-full" />
                    <Caption style={{color: 'gray', flex:1}} >{path.comments}</Caption>
                  </View>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        );
      });
      return (
        <GridRow columns={2}>
          {cellViews}
        </GridRow>
      );
    }

    render() {
      const groupedData = GridRow.groupByRows(this.state.paths, 2, () => {
        return 1;
      });
      return (
        <Screen style={{flex:1, marginTop:55}}>
          <View style={{marginTop:5,marginLeft:5}}>
            <Text>Résultat pour "{this.props.text}":</Text>
          </View>
          <ListView
            data={groupedData}
            renderRow={this.renderRow}
          />
        </Screen>
      );
    }
}
