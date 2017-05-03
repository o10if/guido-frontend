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

    renderRow(rowData, sectionId, index) {

      const cellViews = rowData.map((path, id) => {
      return (
        <TouchableOpacity
          style={{flex:1}}
          onPress={()=>this.rowPressed(path.id)}>
          <View style={{flex:1}}>
            <Image
              styleName="large-banner"
              source={{ uri: path.image && path.image.url }}
            >
              <Tile>
                <Title styleName="md-gutter-bottom">Trajet {path.id}</Title>
                <Subtitle styleName="sm-gutter-horizontal">{path.description}</Subtitle>
              </Tile>
            </Image>
            <Divider styleName="line" />
          </View>
        </TouchableOpacity>
        );
      });
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
