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
  Button,
  NavigationBar,
  Caption,
  TextInput
} from '@shoutem/ui';

mapStyle = [];// require('../assets/mapStyle.json');

export default class RouteDetail extends Component {
  static propTypes = {
    restaurant: React.PropTypes.object,
  };

  render() {
    const { restaurant } = this.props;

    return (
      <Screen styleName="paper full-screen">
        <NavigationBar
          title="Parcours StreetArt"
          styleName=""
        />

        <ScrollView>
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

            <Text styleName="md-gutter multiline">Le parcours streetart permet de découvrir les lieux mythiques du streetart à Lyon. Il dure 19 minutes.
            </Text>

            <Button  styleName="dark">
              <Icon name="play" />
              <Text>Démarrer la navigation</Text>
            </Button>

            <Divider styleName="line" />

            <Row>
              <View styleName="vertical">
                <Subtitle>Détails</Subtitle>
                <Text>- Eviter la vue X car elle est en travaux jusqu'en mai</Text>
                <Text>- la rue Y est étroite, ne convient pas aux grands groupes.</Text>
              </View>
            </Row>
            <Divider styleName="line" />
            <Row>
              <View styleName="vertical">
                <Subtitle>Commentaires</Subtitle>
                  <Row>
                    <Image
                      styleName="small-avatar"
                      source={{uri: "http://liris.cnrs.fr/jean-francois.boulicaut/IF%20JFBoulicaut.JPG"}}
                    />

                    <Caption>Vous devriez passer par la K-Fet boire un coup. Ils ont de très bonnes chouffes.</Caption>
                  </Row>

                <Divider styleName="line" />
                <Row>
                  <Image
                    styleName="small-avatar"
                    source={{uri: "https://yt3.ggpht.com/-raCG2H2gOpY/AAAAAAAAAAI/AAAAAAAAAAA/yT9cgX8F7ps/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"}}
                  />

                  <Caption>Yo' Yoyoyoyoyoyooo, je suis le Ratz qui fait du Rap'</Caption>
                </Row>

                <Divider styleName="line" />
                <Row>
                  <Image
                    styleName="small-avatar"
                    source={{uri: "http://www.dutoitfreeblog.com/.a/6a00d83451935369e201a73dc267eb970d-pi"}}
                  />

                  <Caption>J'ai embrassé mon cousin place bellecour c'était très excitant.</Caption>
                </Row>

                <Divider styleName="line" />
                <Row>
                  <Image
                    styleName="small-avatar"
                    source={{uri: "http://resize3-parismatch.ladmedia.fr/r/300,300,center-middle,ffffff/img/var/news/storage/images/paris-match/people-a-z/emmanuel-macron/14862769-3-fre-FR/Emmanuel-Macron.jpg"}}
                  />

                  <Caption>PARCE QUE C EST NOTRE TRAJEEEEEEEET !</Caption>
                </Row>

                <Divider styleName="line" />
                <Row>
                  <Image
                    styleName="small-avatar"
                    source={{uri: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Uncle_Sam_(pointing_finger).jpg"}}
                  />

                  <TextInput
                    style={{flex: 1}}
                    placeholder={'Une question, une remarque ?'}
                  />
                </Row>
              </View>
            </Row>
          </Screen>
        </ScrollView>
      </Screen>
    );
  }
}
