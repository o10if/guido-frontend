'use strict';
var React = require('react');
var ReactNative = require('react-native');

var {
  Navigator,
  Text,
  TouchableOpacity,
  View,
  BackAndroid
} = ReactNative;

import {
  Icon
} from '@shoutem/ui';

var SearchResult = require('./SearchResult').default;
var RouteDetail = require('./RouteDetail').default;
var TabView = require('./TabView').default;
var SearchContainer = require('./SearchContainer').default;

var NavigationBarRouteMapper = {
  LeftButton: function(route,navigator,index,navState) {
    if(index === 0){
      return;
    }else{
      return(
        <View style={{flex:1}}>
          <TouchableOpacity
            underlayColor='transparent'
            onPress={()=>navigator.pop()}>
            <Icon name="back" style={{marginVertical:17,marginLeft:10}}/>
          </TouchableOpacity>
        </View>
      );
    }

  },

  Title: function(route,navigator,index,navState) {
    return (<Text style={{flex:1, fontSize: 18,color: '#373E4D',fontWeight: '500', marginVertical: 15}}>{route.title}</Text>);
  },

  RightButton: function(route,navigator,index,navState) {
  }
};

class NavigationBar extends Navigator.NavigationBar {
  render() {
    let routes = this.props.navState.routeStack;
    if (routes.length) {
      let route = routes[routes.length - 1];
      console.log(this.props.navState.routeStack);
      if (route.name === 'TabView') { // First page (Tab view) => No nav bar
        return null;
      }
    }

    return super.render();
  }
}


let globalNavigator;
// back button
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (globalNavigator && globalNavigator.getCurrentRoutes().length > 1) {
    globalNavigator.pop();
    return true;
  }
  return false;
});

var SearchHome = React.createClass ({

  renderScene: function(route, navigator) {
    this._navigator = navigator;
    globalNavigator = navigator;
    switch(route.name) {
      case 'TabView':
        return <TabView navigator={navigator} {...route.passProps}/>;
      case 'SearchResult' :
        return <SearchResult navigator={navigator} {...route.passProps}/>;
      case 'RouteDetail' :
        return <RouteDetail navigator={navigator} {...route.passProps}/>;
      case 'SearchContainer' :
        return <SearchContainer navigator={navigator} {...route.passProps}/>;
    }
  },

  render: function() {
    return(
      <Navigator
        initialRoute={{name: 'TabView'}}
        navigationBar={<NavigationBar style={{height: 55,backgroundColor: 'white'}} routeMapper={NavigationBarRouteMapper}/>}
        renderScene={this.renderScene}/>
    );
  }
});

module.exports = SearchHome;
