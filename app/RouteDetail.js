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
import {Alert} from "react-native";

mapStyle = [];// require('../assets/mapStyle.json');


coordinates = [{latitude: 45.7570142556995, longitude: 4.832353591918945},{latitude: 45.7579424547621, longitude: 4.833769798278809},{latitude: 45.760427556887024, longitude: 4.834005832672119},{latitude: 45.760697019140615, longitude: 4.834027290344238},{latitude: 45.76062216864514, longitude: 4.836945533752441},{latitude: 45.76172994572358, longitude: 4.836945533752441},{latitude: 45.76217903827326, longitude: 4.837031364440918},{latitude: 45.763466416880846, longitude: 4.836387634277343},{latitude: 45.76345144753286, longitude: 4.835700988769531},{latitude: 45.763331692604346, longitude: 4.834156036376953},{latitude: 45.762074250335004, longitude: 4.834113121032715},{latitude: 45.76202934115837, longitude: 4.832825660705566},{latitude: 45.76198443194557, longitude: 4.832439422607422},{latitude: 45.762074250335004, longitude: 4.831752777099609},{latitude: 45.763226906831036, longitude: 4.83198881149292},{latitude: 45.763226906831036, longitude: 4.829435348510742},{latitude: 45.761370669081074, longitude: 4.828770160675049},{latitude: 45.761939522696615, longitude: 4.826087951660156},{latitude: 45.76036767620949, longitude: 4.8255085945129395},{latitude: 45.760322765659154, longitude: 4.826667308807372},{latitude: 45.759933539375425, longitude: 4.826602935791016},{latitude: 45.75966407343458, longitude: 4.826366901397705},{latitude: 45.75905028504455, longitude: 4.826409816741943},{latitude: 45.75875087362366, longitude: 4.8268818855285645},{latitude: 45.75740350234746, longitude: 4.825594425201416},{latitude: 45.75678968909056, longitude: 4.827032089233398},{latitude: 45.756041127200405, longitude: 4.8262810707092285},{latitude: 45.75569678535898, longitude: 4.827332496643066},{latitude: 45.75512786809614, longitude: 4.828941822052002},{latitude: 45.75575667104927, longitude: 4.829435348510742},{latitude: 45.7555620423209, longitude: 4.8301005363464355},{latitude: 45.75530752680575, longitude: 4.830679893493652},{latitude: 45.75366063365148, longitude: 4.829607009887695},{latitude: 45.75346599761287, longitude: 4.83048677444458},{latitude: 45.7557416996327, longitude: 4.831645488739014},{latitude: 45.75602615586017, longitude: 4.8310017585754395},{latitude: 45.75675974680774, longitude: 4.8314738273620605},{latitude: 45.75696934244999, longitude: 4.832096099853516}];

export default class RouteDetail extends Component {

  static propTypes = {
    restaurant: React.PropTypes.object,
  };

  _todoFeature() {
    Alert.alert(
      'Fonctionnalité non implémentée',
      'Cette fonctionalité arrive très bientot dans votre application !',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    );
  };

  render() {
    const { restaurant } = this.props;

    return (
      <ScrollView styleName="paper full-screen" style={{marginTop:55}}>
          <MapView
            style={{alignSelf: 'stretch', height: 300}}
            initialRegion={{
              latitude: 45.759623,
              longitude: 4.833967,
              latitudeDelta: 0.017,
              longitudeDelta: 0.008
            }}
            customMapStyle={mapStyle}
          >
            <MapView.Polyline
              coordinates={coordinates}
              strokeColor="#2b2c2c"
              strokeWidth={2}
            />
          </MapView>
          <Screen styleName="paper">

            <Row>
              <Icon name="address-full" />
              <View styleName="vertical">
                <Subtitle>Parcours StreetArt</Subtitle>
                <Text>1.2km - 19min</Text>
              </View>
              <Button onPress={this._todoFeature}>
                <Icon name="add-to-favorites" />
              </Button>
              <Button styleName="tight" onPress={this._todoFeature}>
                <Icon name="comment" />
              </Button>
            </Row>

            <Divider styleName="line" />

            <Text styleName="md-gutter multiline">Le parcours streetart permet de découvrir les lieux mythiques du streetart à Lyon. Il dure 19 minutes.
            </Text>

            <Button styleName="dark" onPress={this._todoFeature}>
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
    );
  }
}
