import { Route } from './agent';
import { RouteDetail } from './RouteDetail';

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

    let routes = await Route.all();

    this.setState({
      routes: routes,
      isLoading: false
    });

  }

  rowPressed(resultId) {
    var id = resultId;

    this.props.navigator.push({
      title: 'Détail',
      name: 'RouteDetail',
      component: RouteDetail,
      passProps: {id: id}
    });
  }

    renderRow(path) {
      return (
        <TouchableOpacity
          style={{flex:1}}
          onPress={()=>this.rowPressed(path.id)}>
          <View style={{flex:1}}>
            <Image
              styleName="large-banner"
              source={{ uri: path.imageUrl }}
            >
              <Tile style={{marginTop:-50}}>
                <Title styleName="md-gutter-bottom" style={{marginLeft:-20}}>{path.title}</Title>
                <Subtitle styleName="sm-gutter-horizontal" style={{marginLeft:-20}}>{path.description}</Subtitle>
              </Tile>
              <View styleName="horizontal" style={{marginTop:150, marginLeft:250}}>
                <View styleName="horizontal flexible">
                  <Icon style={{color: 'white', flex:1, top:3, transform:[{scale:0.75}]}} name="like" />
                  <Caption style={{color: 'white', flex:1}} >{path.likes}</Caption>
                </View>
                <View styleName="horizontal flexible">
                  <Icon style={{color: 'white', flex:1, top:4.5, transform:[{scale:0.7}]}}  name="add-to-favorites-full" />
                  <Caption style={{color: 'white', flex:1}} >{path.favorites}</Caption>
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
