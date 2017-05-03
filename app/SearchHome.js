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
} = ReactNative;

import {
  Icon,
  Screen,
} from '@shoutem/ui';

//引入子页面
var RouteSearchBar = require('./RouteSearchBar').default;
var SearchResult = require('./SearchResult').default;
var RouteDetail = require('./RouteDetail').default;
var SearchContainer = require('./SearchContainer').default;

//设置导航栏
var NavigationBarRouteMapper = {
  //设置导航栏左按钮
  LeftButton: function(route,navigator,index,navState) {
    if(index === 0){
      return (
        <View style={{flex:1}}>
          <TouchableOpacity
            underlayColor='transparent'>
            <Icon name="sidebar" style={{marginVertical:20,marginLeft:10}}/>
          </TouchableOpacity>
        </View>
      );
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
    return (<Text style={{flex:1, fontSize: 18,color: '#373E4D',fontWeight: '500',marginVertical: 15}}>{route.title}</Text>);
  },

  //设置导航栏右按钮
  RightButton: function(route,navigator,index,navState) {
    return (
      <View style={{flex:1}}>
        <TouchableOpacity
          underlayColor='transparent'>
          <Icon name="settings" style={{marginVertical:20,marginRight:10}}/>
        </TouchableOpacity>
      </View>
    );
  }
};

var SearchHome = React.createClass ({

  //设置导航子页面导航路由方式
  renderScene: function(route, navigator) {
    this._navigator = navigator;
    switch(route.name) {
      case 'RouteSearchBar':
        return <RouteSearchBar navigator={navigator} {...route.passProps}/>;
      case 'SearchResult' :
        return <SearchResult navigator={navigator} {...route.passProps}/>;
      case 'RouteDetail' :
        return <RouteDetail navigator={navigator} {...route.passProps}/>;
      case 'SearchContainer' :
        return <SearchContainer navigator={navigator} {...route.passProps}/>;
    }
  },

  render: function() {
    const pages = [
                {name: 'RouteSearchBar', title: 'Guido', index: 0},
                {name: 'SearchResult', title: 'Results', index: 1},
                {name: 'RouteDetail', title: 'Detail', index: 2},
                {name: 'SearchContainer', title: 'Search', index: 3},
          ];

    return(
      //返回导航栏视图，并通过initialRoute显示第一次显示的子页面，initialRouteStack导航栏的子页面路由栈，configureScence导航栏子页面切换动画，navigationBar导航栏标题栏实现，renderScene导航栏路由方式
      <Screen>
        <Navigator
          style={{flex:1}}
          initialRoute={pages[0]}
          initialRouteStack={pages}
          navigationBar={<Navigator.NavigationBar style={{height: 60,backgroundColor: 'white'}} routeMapper={NavigationBarRouteMapper}/>}
          renderScene={this.renderScene}/>

      </Screen>
    );
  }
});

module.exports = SearchHome;
