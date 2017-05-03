import { Route } from './agent';

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

export default class RoutesList extends Component {

  constructor(props) {
    console.warn("constructor");
    super(props);
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

  renderRow(rowData, sectionId, index) {
    console.warn("renderRow");
    const cellViews = rowData.map((path, id) => {
    return (
        <TouchableOpacity key={id} styleName="flexible">
          <Card styleName="flexible">
            <Image styleName="medium-wide" source={{uri: path.image && path.image.url}} />
            <View styleName="content">
              <Subtitle numberOfLines={3}>{path.name}</Subtitle>
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
    console.warn("loading: " + this.state.isLoading);
    const groupedData = GridRow.groupByRows(this.state.routes, 2, () => {
      return 1;
    });
    return (
      <ListView
        data={groupedData}
        loading={this.state.isLoading}
        renderRow={this.renderRow}
      />
    );
  }
}
