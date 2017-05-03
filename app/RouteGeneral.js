import { Route, Landmark } from './agent';

import React, { Component} from 'react';
import MapView from 'react-native-maps';
import flag from '../assets/flag.png';

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

mapStyle = require('../assets/mapStyle.json');

export default class RouteGeneral extends Component {
  constructor(props) {
    console.warn("constructor");
    super(props);
    this.state = {
      waypoints: [],
      landmarks: [],
      isLoading: true
    }
  }
  async componentDidMount() {
    console.warn("componentDidMount");
    let routes = await Route.all();
    let landmarks = await Landmark.all();
    console.warn(routes.toString());
    console.warn(landmarks.toString());
    this.setState({
      waypoints: routes.waypoints,
      landmarks: landmarks,
      isLoading: false
    });
    console.warn("component ->  " + this.state.isLoading);
  }

  render() {
    const waypoints = this.state.waypoints;
    const landmarks = this.state.landmarks;
    console.warn("loading: " + this.state.isLoading);

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
              { waypoints.map(coordinates => (
                                   <MapView.Polyline
                                       coordinates={{latitude:waypoint.latitude, longitude:waypoint.longitude}}
                                       strokeColor="#2b2c2c"
                                       strokeWidth={2}
                                    />
                               ))
              }
              {landmarks.map(landmark => (
                <MapView.Marker
                  coordinate={{latitude:landmark.latitude, longitude:landmark.longitude}}
                  title={landmark.title}
                  //description={landmark.properties.description}
                  //image={flag}
                  pinColor="#2b2c2c"
                />
              ))}
          </MapView>
      </Screen>
    );
  }
}
