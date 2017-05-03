import React, { StyleSheet, Component} from 'react';
import MapView from 'react-native-maps';
import { PreferredRoutes } from './agent';

import {
  ListView,
  Text,
  View,
  Dimensions,
} from 'react-native';

import {
  ScrollView,
  Icon,
  Row,
  Subtitle,
  Title,
  Image,
  Divider,
  Tile,
  Screen,
  Card,
  Caption
} from '@shoutem/ui';

 import Carousel from 'react-native-looped-carousel'; // First Carousel
//import Carousel from 'react-native-snap-carousel'; // more sophisticated Carousel


import {
  NavigationBar,
} from '@shoutem/ui/navigation';

mapStyle = [];// require('../assets/mapStyle.json');


  /** Main component **/
  export default class MyRoutes extends Component {
    render() {

    //alert(PreferredRoutes["_65"][0].description);
      return (
        <View>
          <Text>TRAJETS FAVORIS</Text>
          <CarouselExample />
          <Text>TRAJETS RECENTS</Text>
          <CarouselExample />
        </View>
      );
    }
  }


  /** Components **/
  // A favorite route card component
  class FavoriteRoute extends Component {
      // Initialize the hardcoded data
      constructor(props) {
        super(props);
      }

      render() {
        return (
          <Card style={{width: 200, height: 200}}>
            <Image
              styleName="medium-wide"
                source={{uri: this.props.imageAdress}}
            />
            <View styleName="content">
              <Subtitle>{this.props.description}</Subtitle>
              <Caption>{this.props.duration} hours ago</Caption>
            </View>
          </Card>
        );
      }
   }

   // Two FavoriteRoute elements side by side, for the Carousel
   class FavoriteRouteDouble extends Component {
      constructor(props) {
            super(props);
          }

       render() {
        return (
          <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'}}>
              <FavoriteRoute imageAdress={this.props.imageAdress1} description={this.props.description1} duration={this.props.duration1}/>
              <FavoriteRoute imageAdress={this.props.imageAdress2} description={this.props.description2} duration={this.props.duration2}/>
           </View>
        );
       }
   }

   class CarouselExample extends Component {

     constructor(props) {
         super(props);
         var width = Dimensions.get('window').width;
         var height = 215;
         this.state = {
           size: { width, height }
         };
       }

       _onLayoutDidChange = (e) => {
         const layout = e.nativeEvent.layout;
         this.setState({ size: { width: layout.width, height: layout.height } });
       }

       render() {
       // Ignoring warning caused by a 'hack' of the Carousel leftArrowText and RightArrowText property
       console.ignoredYellowBox = [
         "Warning: Failed prop type: Invalid prop `leftArrowText` of type `object` supplied to `Carousel`",
         "Warning: Failed prop type: Invalid prop `rightArrowText` of type `object` supplied to `Carousel`"
        ];


         return (
           <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
             <Carousel
               delay={2000}
               style={this.state.size}
               autoplay={false}
               currentPage={0}
               arrows={true}
               arrowsStyle={ {
                                   color: 'blue',
                                   fontWeight: 'bold',
                                   fontSize: 30,
                                 } }
               bullets={true}
               bulletStyle = {{backgroundColor: 'grey'}}
               chosenBulletStyle = {{backgroundColor: 'black'}}
               leftArrowText = {<Image source={{uri: 'http://i.imgur.com/gLEUhQU.png'}} style={{width: 100, height: 100}}/>}
               rightArrowText = {<Image source={{uri: 'http://www.pd4pic.com/images/flat-right-arrow-circle-theme-player-icon.png'}} style={{width: 100, height: 100}}/>}
               arrowsContainerStyle ={{marginBottom: 50}}
               arrowsStyle = {{marginLeft: 20}}
               onAnimateNextPage={(p) => console.log(p)}
             >
               <FavoriteRouteDouble imageAdress1='http://www.lyon-france.com/var/ez_site/storage/images/media/images/evenements/fete-des-lumieres-place-des-terreaux4/4249406-1-fre-FR/Fete-des-Lumieres-Place-des-Terreaux_reference.jpg'
                                    imageAdress2='https://files.sympa-sympa.com/files/news/part_3/32910/516860-Frida-Kahlo-Street-Art-by-Marko-in-Paris-France-1-900-be87622781-1479902796.jpg' />

               <FavoriteRouteDouble imageAdress1='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Au_dessus_du_quartier_Saint-Jean.jpg/300px-Au_dessus_du_quartier_Saint-Jean.jpg'
                                    imageAdress2='https://cdn.aderly.fr/uploads/2014/10/Rue-Saint-JeanLyon-2013-%C2%A9www.gmd-photographe.fr_.jpg' />

               <FavoriteRouteDouble imageAdress1='http://www.lyon-france.com/var/ez_site/storage/images/media/mises-en-avant/images/musee-des-confluences/4272712-8-fre-FR/Musee-des-Confluences_banniere2.jpg'
                                    imageAdress2='http://www.dockouest.com/image/contenu/que_voir_que_faire/colline-fourviere-basilique.jpg' />
             </Carousel>
           </View>


         );
       }
  }
