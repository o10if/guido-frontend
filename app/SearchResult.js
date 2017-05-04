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

import RouteDetail from './RouteDetail';
import { Route } from './agent';

export default class SearchResult extends Component {

    constructor(props) {
      super(props);
      this.renderRow = this.renderRow.bind(this);
      this.state = {
        paths: [],
        isLoading: true
      }
    }

    async componentDidMount() {

      let paths = await Route.search(this.props.text);

      this.setState({
        paths: paths,
        isLoading: false
      });

    }

    rowPressed(result) {
      var id = result.id;
      var name = result.name;

      this.props.navigator.push({
        title: name,
        name: 'RouteDetail',
        component: RouteDetail,
        passProps: {id: id}
      });
    }

    renderRow(result, sectionId, index) {

      const cellViews = result.map((path, id) => {
      return (
          <TouchableOpacity key={id} styleName="flexible" onPress={()=>this.rowPressed(path)}>
            <Card styleName="flexible">
              <Image styleName="medium-wide" source={{uri: path.imageUrl && path.imageUrl}} />
              <View styleName="content">
                <Subtitle numberOfLines={3}>{path.title}</Subtitle>
                <View styleName="horizontal">
                  <Caption styleName="collapsible" numberOfLines={2}>{path.description}</Caption>
                </View>
                <View styleName="horizontal">
                  <Caption styleName="collapsible" numberOfLines={2}> </Caption>
                </View>
                <View styleName="horizontal">
                  <View styleName="horizontal flexible">
                    <Icon style={{color: 'gray', flex:1, top:3, transform:[{scale:0.75}]}} name="like" />
                    <Caption style={{color: 'gray', flex:1}} >{path.likes}</Caption>
                  </View>
                  <View styleName="horizontal flexible">
                    <Icon style={{color: 'gray', flex:1, top:4.5, transform:[{scale:0.7}]}}  name="add-to-favorites-full" />
                    <Caption style={{color: 'gray', flex:1}} >{path.favorites}</Caption>
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
      const groupedData = GridRow.groupByRows(this.state.paths, 2, () => {
        return 1;
      });
      return (
        <Screen style={{flex:1, marginTop:55}}>
          <View style={{marginTop:5,marginLeft:5}}>
            <Text>Résultat pour "{this.props.text}":</Text>
          </View>
          <ListView
            data={groupedData}
            renderRow={this.renderRow}
          />
        </Screen>
      );
    }
}
