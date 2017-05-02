import React, { Component} from 'react';
import MapView from 'react-native-maps';

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

  /*
  class FavoriteRoute extends Component {
    // Initialize the hardcoded data
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Image source={{uri: this.props.imageAdress}} style={{width: 60, height: 60}}/>
      );
    }
  }
  */


  /** Main component **/
  export default class MyRoutes extends Component {
    render() {
      return (
        <View>
          <Text>TRAJETS FAVORIS</Text>
          <CarouselExample />
          <Text>TRAJETS RECENTS</Text>
          <CarouselExample />
          <ListViewBasics/>
        </View>
      );
    }
  }


  /** Components **/
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
              <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
              <Caption>21 hours ago</Caption>
            </View>
          </Card>
        );
      }
   }

   class ListViewBasics extends Component {
     // Initialize the hardcoded data
     constructor(props) {
       super(props);
       const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.state = {
         dataSource: ds.cloneWithRows([
           'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
         ])
       };
     }
     render() {
       return (
         <View style={{flex: 1, paddingTop: 22}}>
           <ListView
             horizontal={true}
             dataSource={this.state.dataSource}
             renderRow={(rowData) => <Text>{rowData}</Text>}
           />
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
             <View style={{
                                      flex: 1,
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      alignItems: 'flex-start',
                                    }}>
                  <FavoriteRoute imageAdress='http://www.citizenkid.com/application/views/images/media/37/original/balade-velo-foret-181752.jpg'/>
                  <FavoriteRoute imageAdress='https://files.sympa-sympa.com/files/news/part_3/32910/516860-Frida-Kahlo-Street-Art-by-Marko-in-Paris-France-1-900-be87622781-1479902796.jpg'/>
                </View>
               <View style={{
                                                     flex: 1,
                                                     flexDirection: 'row',
                                                     justifyContent: 'space-between',
                                                     alignItems: 'flex-start',
                                                   }}>
                  <FavoriteRoute imageAdress='https://files.sympa-sympa.com/files/news/part_3/32910/516860-Frida-Kahlo-Street-Art-by-Marko-in-Paris-France-1-900-be87622781-1479902796.jpg'/>
                   <FavoriteRoute imageAdress='http://www.citizenkid.com/application/views/images/media/37/original/balade-velo-foret-181752.jpg'/>
               </View>
               <View style={{
                                                                    flex: 1,
                                                                    flexDirection: 'row',
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'flex-start',
                                                                  }}>
                                 <FavoriteRoute imageAdress='https://files.sympa-sympa.com/files/news/part_3/32910/516860-Frida-Kahlo-Street-Art-by-Marko-in-Paris-France-1-900-be87622781-1479902796.jpg'/>
                                  <FavoriteRoute imageAdress='http://www.citizenkid.com/application/views/images/media/37/original/balade-velo-foret-181752.jpg'/>
               </View>

             </Carousel>
           </View>


         );
       }
  }
