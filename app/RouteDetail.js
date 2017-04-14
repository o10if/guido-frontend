import React, { Component} from 'react';
import MapView from 'react-native-maps';

import {
  ScrollView,
  Icon,
  Row,
  Subtitle,
  Text,
  Title,
  View,
  Image,
  Divider,
  Tile,
  Screen,
} from '@shoutem/ui';

import {
  NavigationBar,
} from '@shoutem/ui/navigation';

mapStyle = [];// require('../assets/mapStyle.json');

export default class RouteDetail extends Component {
  static propTypes = {
    restaurant: React.PropTypes.object,
  };

  render() {
    const { restaurant } = this.props;

    return (
      <Screen styleName="paper full-screen">
          <MapView
              style={{alignSelf: 'stretch', height: 300}}
              initialRegion={{
                  latitude: 45.759623,
                  longitude: 4.833967,
                  latitudeDelta: 0.017,
                  longitudeDelta: 0.008
              }}
              customMapStyle={mapStyle}
          />
          <Screen styleName="paper">

            <Row>
              <Icon name="address-full" />
              <View styleName="vertical">
                <Subtitle>Parcours StreetArt</Subtitle>
                <Text>1.2km - 19min</Text>
              </View>
              <Icon name="add-to-favorites" />
              <Icon name="comment" />
            </Row>

            <Divider styleName="line" />

            <Text styleName="md-gutter multiline">Oppan gangnam style
              Gangnam style

              Najeneun ttasaroun inganjeogin yeoja
              Keopi hanjanui yeoyureul aneun pumgyeok issneun yeoja
              Bami omyeon simjangi tteugeowojineun yeoja
              Geureon banjeon issneun yeoja

              Naneun sanai
              Najeneun neomankeum ttasaroun geureon sanai
              Keopi sikgido jeone wonsyat ttaerineun sanai
              Bami omyeon simjangi teojyeobeorineun sanai
              Geureon sanai

              Areumdawo sarangseureowo
              Geurae neo hey geurae baro neo hey
              Areumdawo sarangseureowo
              Geurae neo hey geurae baro neo hey
              Jigeumbuteo gal dekkaji gabolkka

              Oppan gangnam style
              Gangnam style
              Oppan gangnam style
              Gangnam style
              Oppan gangnam style
              Eh sexy lady
              Oppan gangnam style
              Eh sexy lady
              Oooo

              Jeongsukhae boijiman nol ttaen noneun yeoja
              Ittaeda sipeumyeon mukkeossdeon meori puneun yeoja
              Garyeossjiman wenmanhan nochulboda yahan yeoja
              Geureon gamgakjeogin yeoja
            </Text>

          </Screen>
      </Screen>
    );
  }
}
