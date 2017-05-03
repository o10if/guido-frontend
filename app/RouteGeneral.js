import React, { Component} from 'react';
import MapView from 'react-native-maps';
import flag from '../assets/flag.png';
import { Route } from './agent';

import {
  ScrollView,
  Icon,
  Row,
  Subtitle,
  Text,
  Title,
  View,
  Image,
  Divider,
  Tile,
  Screen,
} from '@shoutem/ui';

import {
  NavigationBar,
} from '@shoutem/ui/navigation';

mapStyle = [];// require('../assets/mapStyle.json');

markers = [
{
  title: 'Quai St Vincent',
  coordinates: {
    latitude: 45.767184,
    longitude: 4.829668
  }
},
{
  title: 'Place Bellecour',
  coordinates: {
    latitude: 45.758115,
    longitude: 4.833609
  }
},
{
  title: 'Croix-Rousse',
  coordinates: {
    latitude: 45.775708,
    longitude: 4.831610
  }
},
{
  title: 'Hotel de Ville',
  coordinates: {
    latitude: 45.767119,
    longitude: 4.833660
  }
},
{
  title: 'Point 4',
  coordinates: {
    latitude: 45.761191,
    longitude: 4.835183
  }
},
{
  title: 'Plateau Croix-Rousse',
  coordinates: {
    latitude:  45.778582,
    longitude: 4.816948
  }
},
{
  title: 'Caluire',
  coordinates: {
    latitude:  45.784130,
    longitude: 4.840627
  }
},
{
  title: 'Croix-Rousse',
  coordinates: {
    latitude:  45.779701,
    longitude: 4.827452
  }
}];

polylines = [
   [{latitude: 45.767119, longitude: 4.833660}, {latitude: 45.761191, longitude: 4.835183}, {latitude: 45.761191, longitude: 4.835774}],
   [{latitude: 45.778582, longitude: 4.816948}, {latitude: 45.779701, longitude: 4.827452}, {latitude: 45.784130, longitude: 4.840627}],
];

export default class RouteGeneral extends Component {
  static propTypes = {
    restaurant: React.PropTypes.object,
  };

  render() {
    //let routes = Route.post('my_id', {'new_route': 1});
    let routes = Route.search({
      'keywords': 'fourvière',
      'limit': 10,
      'tags': ['lol', 'lolipop'],
      'near': {'latMin': 35.2, 'latMax': 12.2, 'longMin': 12.1, 'longMax': 4.5},
    });
    const { restaurant } = this.props;

    return (
      <Screen styleName="paper full-screen">
          <MapView
              style={{alignSelf: 'stretch', height: 900}}
              initialRegion={{
                  latitude: 45.759623,
                  longitude: 4.833967,
                  latitudeDelta: 0.037,
                  longitudeDelta: 0.038
              }}
              customMapStyle={mapStyle}
              >
              { polylines.map(coordinates => (
                                   <MapView.Polyline
                                       coordinates={coordinates}
                                       strokeColor="#2b2c2c"
                                       strokeWidth={2}
                                    />
                               ))
              }
              {markers.map(marker => (
                <MapView.Marker
                  coordinate={marker.coordinates}
                  title={marker.title}
                  description={marker.title}
                  //image={flag}
                  pinColor="#2b2c2c"
                />
              ))}
          </MapView>
      </Screen>
    );
  }
}
