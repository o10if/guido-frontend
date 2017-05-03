import React, { Component} from 'react';
import MapView from 'react-native-maps';
import { Route, Landmark } from './agent';
import RouteDetail from './RouteDetail';

import {
  Screen,
} from '@shoutem/ui';

import {
  NavigationBar,
} from '@shoutem/ui/navigation';

export default class RouteGeneral extends Component {
  constructor(props) {

    super(props);
    this.state = {
      waypoints: [],
      landmarks: [],
      isLoading: true
    }
  }
  async componentDidMount() {

    let routes = await Route.all();
    let landmarks = await Landmark.all();
    let waypoints = [];

    for (i=0; i<routes.length; i++){
      let routeId = routes[i].id;
      let detailedRoute = await Route.get(routeId);
      let waypointList = detailedRoute.waypoints;

      waypoints.push(waypointList);
    }
    this.setState({
      waypoints: waypoints,
      landmarks: landmarks,
      isLoading: false
    });

  }

  rowPressed(marker) {
    var id = marker.id;
    var name = marker.name;

    this.props.navigator.push({
      title: name,
      name: 'RouteDetail',
      component: RouteDetail,
      passProps: {id: id}
    });
  }

  render() {
    let waypoints = null;
    if (this.state.waypoints) {
      waypoints = this.state.waypoints.map(waypointList => (
       <MapView.Polyline
           coordinates={waypointList}
           strokeColor="#2b2c2c"
           strokeWidth={2}
        />));
    }

    let landmarks = null;
    if (this.state.landmarks) {
      landmarks = this.state.landmarks.map(landmark => (
        <MapView.Marker
          coordinate={{latitude:landmark.latitude, longitude:landmark.longitude}}
          title={landmark.title}
          //description={landmark.properties.description}
          //image={flag}
          onPress={()=>this.rowPressed(landmark)}
          pinColor="#2b2c2c"
        />
      ));
    }

    let initRegion = {
      latitude: 45.759623,
      longitude: 4.833967,
      latitudeDelta: 0.037,
      longitudeDelta: 0.038
    };

    mapStyle = require('../assets/mapStyle.json');

    return (
      <Screen styleName="paper full-screen">
        <MapView
          style={{alignSelf: 'stretch', height: 900}}
          initialRegion={initRegion}
          customMapStyle={mapStyle}>
            { waypoints }
            { landmarks }
        </MapView>
      </Screen>
    );
  }
}
