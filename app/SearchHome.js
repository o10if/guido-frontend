'use strict';
var React = require('react');
var ReactNative = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  Image,
  TouchableOpacity,
  View,
  BackAndroid
} = ReactNative;

import {
  Icon
} from '@shoutem/ui';

//引入子页面
var SearchResult = require('./SearchResult').default;
var RouteDetail = require('./RouteDetail').default;
var TabView = require('./TabView').default;

//设置导航栏
var NavigationBarRouteMapper = {
  //设置导航栏左按钮
  LeftButton: function(route,navigator,index,navState) {
    if(index === 0){
      return;
    }else{
      return(
        <View style={{flex:1}}>
          <TouchableOpacity
            underlayColor='transparent'
            onPress={()=>navigator.pop()}>
            <Icon name="back" style={{marginVertical:20,marginLeft:10}}/>
          </TouchableOpacity>
        </View>
      );
    }

  },

  //设置导航栏标题
  Title: function(route,navigator,index,navState) {
    return (<Text style={{flex:1, fontSize: 18,color: '#373E4D',fontWeight: '500', marginVertical: 15}}>{route.title}</Text>);
  },

  //设置导航栏右按钮
  RightButton: function(route,navigator,index,navState) {
  }
};

class NavigationBar extends Navigator.NavigationBar {
  render() {
    let routes = this.props.navState.routeStack;
    if (routes.length) {
      let route = routes[routes.length - 1];
      if (route.index === 0 || routes.length === 3) {
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

  //设置导航子页面导航路由方式
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
    }
  },

  render: function() {
    const pages = [
                {name: 'TabView', index: 0},
                {name: 'SearchResult', index: 1},
                {name: 'RouteDetail', title: 'Detail', index: 2},
          ];

    return(
      //返回导航栏视图，并通过initialRoute显示第一次显示的子页面，initialRouteStack导航栏的子页面路由栈，configureScence导航栏子页面切换动画，navigationBar导航栏标题栏实现，renderScene导航栏路由方式
      <Navigator
        style={{flex:1}}
        initialRoute={pages[0]}
        initialRouteStack={pages}
        navigationBar={<NavigationBar style={{height: 55,backgroundColor: 'white'}} routeMapper={NavigationBarRouteMapper}/>}
        renderScene={this.renderScene}/>
    );
  }
});

module.exports = SearchHome;
