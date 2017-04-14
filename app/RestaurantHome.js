import React, { Component } from 'react';

import {
  ScrollView,
} from 'react-native';

import {
  Icon,
  Screen,
  Text,
  Divider,
  Row,
  View,
  Subtitle,
} from '@shoutem/ui';

export default class RestaurantHome extends Component {

  render() {
    const restaurants = require('../assets/data/restaurants.json');
    const restaurant = restaurants[1];

    return (
      <Screen styleName="paper">
        <Text styleName="md-gutter multiline">{restaurant.description}</Text>

        <Divider styleName="line" />

        <Row>
          <Icon name="laptop" />
          <View styleName="vertical">
            <Subtitle>Visit webpage</Subtitle>
            <Text numberOfLines={1}>{restaurant.url}</Text>
          </View>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>

        <Divider styleName="line" />

        <Row>
          <Icon name="pin" />
          <View styleName="vertical">
            <Subtitle>Address</Subtitle>
            <Text numberOfLines={1}>{restaurant.address}</Text>
          </View>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>

        <Divider styleName="line" />

        <Row>
          <Icon name="email" />
          <View styleName="vertical">
            <Subtitle>Email</Subtitle>
            <Text numberOfLines={1}>{restaurant.mail}</Text>
          </View>
        </Row>

        <Divider styleName="line" />
      </Screen>
    );
  }
}
