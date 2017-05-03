import { Route } from './agent';

import React, { Component } from 'react';
import {
  Icon,
  Tile,
  Divider,
  Screen,
  ListView,
  Image,
  GridRow,
  View,
  Text,
  Title,
  Subtitle,
  TouchableOpacity,
  Caption,
} from '@shoutem/ui';


export default class RouteList extends Component {

    constructor(props) {
      super(props);
      this.renderRow = this.renderRow.bind(this);
      this.state = {
        routes: [],
        isLoading: true
      }
    }

  async componentDidMount() {
    console.warn("componentDidMount");
    let routes = await Route.all();
    console.warn(routes.toString());
    this.setState({
      routes: routes,
      isLoading: false
    });
    console.warn("component ->  " + this.state.isLoading);
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

    renderRow(path) {
      return (
        <TouchableOpacity
          style={{flex:1}}
          onPress={()=>this.rowPressed(path)}>
          <View style={{flex:1}}>
            <Image
              styleName="large-banner"
              source={{ uri: path.imageUrl }}
            >
              <Tile style={{marginTop:-50}}>
                <Title styleName="md-gutter-bottom" style={{marginLeft:-30}}>{path.title}</Title>
                <Subtitle styleName="sm-gutter-horizontal" style={{marginLeft:-30}}>{path.description}</Subtitle>
              </Tile>
              <View styleName="horizontal" style={{marginTop:150, marginRight:0}}>
                <View styleName="horizontal flexible">
                  <Icon style={{color: 'white', flex:1, top:3, transform:[{scale:0.75}]}} name="like" />
                  <Caption style={{color: 'white', flex:1}} >{path.likes}</Caption>
                </View>
                <View styleName="horizontal flexible">
                  <Icon style={{color: 'white', flex:1, top:4.5, transform:[{scale:0.7}]}}  name="comment-full" />
                  <Caption style={{color: 'white', flex:1}} >{path.comments}</Caption>
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
      <ListView
        data={this.state.routes}
        loading={this.state.isLoading}
        renderRow={this.renderRow}
      />
    );
  }
}
