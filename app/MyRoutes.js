import React, { StyleSheet, Component} from 'react';
import MapView from 'react-native-maps';
import { FavoriteRouteReq, Route } from './agent';

import {
  ListView,
  Text,
  View,
  Dimensions,
  ActivityIndicator
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
      return (
        <View>
          <Text>TRAJETS FAVORIS</Text>
          <CarouselRoutes userId='f4d2ae8b-9cc1-44b9-9da5-f326bd248980' type='favoriteRoutes'/>
          <Text>TRAJETS RECENTS</Text>
          <CarouselRoutes userId='f4d2ae8b-9cc1-44b9-9da5-f326bd248980' type='recentRoutes'/>
        </View>
      );
    }
  }


  /** Components **/
  // A favorite route card component -> Actually a route component (-> To refactor!)
  class FavoriteRoute extends Component {
      // Initialize the hardcoded data
      constructor(props) {
        super(props);
      }

      render() {
        // Conversion minutes -> hours and minutes
        let nbHours = Math.trunc(this.props.duration / 60);
        let nbMinutes = this.props.duration % 60;

        let durationPrintedHourPart = ""; // n.b: should be done with substring
        let durationPrintedMinPart = "";
        let durationPrinted = "";
        if(nbHours==1) {
          durationPrintedHourPart = "1 heure";
        }
        else if(nbHours > 1) {
          durationPrintedHourPart = nbHours + " heures";
        }
        if(nbMinutes==1) {
          durationPrintedMinPart = "1 minute";
        }
        else if(nbMinutes > 1) {
          durationPrintedMinPart = nbMinutes + " minutes";
        }

        if(this.props.duration) {
          durationPrinted += "Durée: ";
        }
        durationPrinted += durationPrintedHourPart + " " + durationPrintedMinPart;


        return (
          <Card style={{width: 200, height: 200}}>
            <Image
              styleName="medium-wide"
                source={{uri: this.props.imageAdress}}
            />
            <View styleName="content">
              <Subtitle>{this.props.title}</Subtitle>
              <Caption>{durationPrinted}</Caption>
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
              <FavoriteRoute imageAdress={this.props.imageAdress1} title={this.props.title1} duration={this.props.duration1}/>
              <FavoriteRoute imageAdress={this.props.imageAdress2} title={this.props.title2} duration={this.props.duration2}/>
           </View>
        );
       }
   }

   class CarouselRoutes extends Component {

     constructor(props) {
         super(props);
         var width = Dimensions.get('window').width;
         var height = 215;
         this.state = {
           size: { width, height },
           favoriteRoutes: [],
           recentRoutes: [],
           loaded: false
         };
       }

       _onLayoutDidChange = (e) => {
         const layout = e.nativeEvent.layout;
         this.setState({ size: { width: layout.width, height: layout.height } });
       }

       async componentWillMount() {
           let userRoutesLoad = await FavoriteRouteReq.get(this.props.userId);
           this.setState({
                 favoriteRoutes: userRoutesLoad.favoriteRoutes,
                 recentRoutes: userRoutesLoad.recentRoutes,
                 loaded: true
           });
       }

       render() {
       // Ignoring warning caused by a 'hack' of the Carousel leftArrowText and RightArrowText property
       console.ignoredYellowBox = [
         "Warning: Failed prop type: Invalid prop `leftArrowText` of type `object` supplied to `Carousel`",
         "Warning: Failed prop type: Invalid prop `rightArrowText` of type `object` supplied to `Carousel`"
        ];

        // DATA LOADED
        if(this.state.loaded) {
        // Building the favorite routes pairs
        let favoriteRoutesToShow; // Need refactor names (here it should be routesToShow for example)
        if(this.props.type === 'favoriteRoutes') {
          favoriteRoutesToShow = this.state.favoriteRoutes;
        }
        else if(this.props.type === 'recentRoutes') {
          favoriteRoutesToShow = this.state.recentRoutes;
        }

        let carouselReactItems = [];
        let currentCarouselItem;
        for(let i=0; i<favoriteRoutesToShow.length; i+=2){
          if(favoriteRoutesToShow.length > i+1) {
            currentCarouselItem =
              <FavoriteRouteDouble imageAdress1={favoriteRoutesToShow[i].imageUrl} title1={favoriteRoutesToShow[i].title} duration1={favoriteRoutesToShow[i].duration}
                                   imageAdress2={favoriteRoutesToShow[i+1].imageUrl} title2={favoriteRoutesToShow[i+1].title} duration2={favoriteRoutesToShow[i+1].duration}/>
          }
          else {
            currentCarouselItem = <FavoriteRoute imageAdress={this.props.imageAdress1} title={this.props.title1} duration={this.props.duration1}/>
          }
          carouselReactItems.push(currentCarouselItem);
        }

        if(carouselReactItems.length == 1) { // The carousel must have at least 2 items or it crashes
          currentCarouselItem = <FavoriteRouteDouble/> // Pushing an empty carousel element
          carouselReactItems.push(currentCarouselItem);
        }

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
              onAnimateNextPage={(p) => console.log(p)} >

               {carouselReactItems}
            </Carousel>
           </View>
           );
        }

        // WAITING FOR LOADING
        else{

          return (
            <ActivityIndicator
                    animating={this.state.animating}
                    style={[{height: 80}]}
                    size="large"
                  />
         );
        }
       }
  }

