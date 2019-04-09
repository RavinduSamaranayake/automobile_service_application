// import { connect } from 'react-redux';
// import { compose, lifecycle } from 'recompose';

// import GalleryScreen from './GalleryView';
// import { loadImages, refreshImages } from './GalleryState';

// export default compose(
//   connect(
//     state => ({
//       isLoading: state.gallery.isLoading,
//       images: state.gallery.images,
//     }),
//     dispatch => ({
//       loadImages: () => dispatch(loadImages()),
//       refreshImages: () => dispatch(refreshImages()),
//     }),
//   ),
//   lifecycle({
//     componentDidMount() {
//       this.props.loadImages();
//     },
//   }),
// )(GalleryScreen);

// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
  
// } from 'react-native';

// import { fonts, colors } from '../../styles';
 

// class GalleryViewContainer extends React.Component {

   
 
 
// render(){
//   return (
//    <ImageBackground 
//        source={require('../../../assets/images/background.png')}
//        style={styles.container}
//     > 
//     <View style={styles.textContainer}>
//         <Text style={styles.availableText}>Asistant Service</Text>
         
//       </View>
      
//     </ImageBackground>
//   );
// }

// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingHorizontal: 30,
//     paddingVertical: 50,
//     justifyContent: 'space-around',
     
//   },
   
//   availableText: {
//     color: colors.white,
//     fontFamily: fonts.primaryRegular,
//     fontSize: 40,
//     marginVertical: 3,
//   },
//   textContainer: {
//     alignItems: 'center',
//   },
  
// });

// export default GalleryViewContainer

 



// import React, { Component } from 'react';
// import {StyleSheet, Text, View } from 'react-native';
// import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';

// export default class GalleryViewContainer extends Component {
//   state = {
//     mapRegion: null,
//     lastLat: null,
//     lastLong: null,
//   }

//   componentDidMount() {
//     this.watchID = navigator.geolocation.watchPosition((position) => {
//       // Create the object to update this.state.mapRegion through the onRegionChange function
//       let region = {
//         latitude:       position.coords.latitude,
//         longitude:      position.coords.longitude,
//         latitudeDelta:  0.00922*1.5,
//         longitudeDelta: 0.00421*1.5
//       }
//       this.onRegionChange(region, region.latitude, region.longitude);
//     });
//   }

//   onRegionChange(region, lastLat, lastLong) {
//     this.setState({
//       mapRegion: region,
//       // If there are no new values set use the the current ones
//       lastLat: lastLat || this.state.lastLat,
//       lastLong: lastLong || this.state.lastLong
//     });
//   }

//   componentWillUnmount() {
//     navigator.geolocation.clearWatch(this.watchID);
//   }

//   onMapPress(e) {
//     console.log(e.nativeEvent.coordinate.longitude);
//     let region = {
//       latitude:       e.nativeEvent.coordinate.latitude,
//       longitude:      e.nativeEvent.coordinate.longitude,
//       latitudeDelta:  0.00922*1.5,
//       longitudeDelta: 0.00421*1.5
//     }
//     this.onRegionChange(region, region.latitude, region.longitude);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           region={this.state.mapRegion}
//           showsUserLocation={true}
//           followUserLocation={true}
//           onRegionChange={this.onRegionChange.bind(this)}
//           onPress={this.onMapPress.bind(this)}>
//           <MapView.Marker
//             coordinate={{
//               latitude: (this.state.lastLat + 0.00050) || -36.82339,
//               longitude: (this.state.lastLong + 0.00050) || -73.03569,
//              }}
//              title={"You're here"} 
//              pinColor={'#3498db'}
//            >
//             <View>
//               <Text style={{color: '#000'}}>
//                 { this.state.lastLong } / { this.state.lastLat }
//               </Text>
              
//             </View>
//           </MapView.Marker>
//         </MapView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//         ...StyleSheet.absoluteFillObject,
//         justifyContent: "flex-end",
//         alignItems: "center"
//       },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   }
// }); 


//--------------------------user location with othe locations-----------------------

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View } from 'react-native';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// // import {Container, Header, Content, Footer, FooterTab, Title, Button, Icon} from 'native-base';


// export default class GalleryViewContainer extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             latitude: 6.9212768,
//             longitude: 79.9610316,
//             error: null,
//             friends: [],
//             contents: null
//         };
//     }

//     componentDidMount() {
//         navigator.geolocation.watchPosition(
//             (position) => {
//                 console.log("wokeeey");
//                 console.log(position);
//                 this.setState({
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude,
//                     error: null,
//                 });
//                 //TODO: send user location to server
//             },
//             (error) => this.setState({error: error.message}),
//             {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
//         );

//         //API call to get friends
//         this.setState({
//             friends: [
//                 {
//                     latitude: 6.9243768,
//                     longitude: 79.9612316,
//                     key: "friend 1"
//                 },
//                 {
//                     latitude: 6.9213768,
//                     longitude: 79.9641316,
//                     key: "friend 2"
//                 }
//             ],
//         }, () => this._renderFriends());
//     }

//     _renderFriends() {
//         const contents = this.state.friends.map((item) => {
//             return (
//                 <MapView.Marker
//                     key={item.key}
//                     coordinate={{"latitude": item.latitude, "longitude": item.longitude}}
//                     title={item.key}/>
//             );
//         });
//         this.setState({contents})
//     }

//     render() {
//         return (
//             <View  style={styles.container}>
//                 <MapView
//                     provider={PROVIDER_GOOGLE}
//                     style={styles.container}
//                     showsUserLocation={true}
//                     showsMyLocationButton={true}
//                     zoomEnabled={true}
//                     followsUserLocation={true}
//                     initialRegion={{
//                         latitude: this.state.latitude,
//                         longitude: this.state.longitude,
//                         latitudeDelta: 0.0158,
//                         longitudeDelta: 0.0070
//                     }}
//                 >
//                     {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
//                         coordinate={{"latitude": this.state.latitude, "longitude": this.state.longitude}}
//                         title={"You're here"} pinColor={'#3498db'}
//                     />}
//                     <View>{this.state.contents}</View>
//                 </MapView>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//           ...StyleSheet.absoluteFillObject,
//           justifyContent: "flex-end",
//           alignItems: "center"
//         },
//     map: {
//       ...StyleSheet.absoluteFillObject,
//     }
//   }); 

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View,Dimensions} from 'react-native';
// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

// class GalleryViewContainer extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             permissionState: false,
//             latitude: null,
//             longitude: null,
//             error: null,
//         };
//     }
    
//     componentDidMount() { // Platform.OS === 'android' && Platform.Version >= 23 ? this.requestMapPermission() : this.requestMap()
//     this.requestMapPermission()  
       
//     }
    
//     async requestMapPermission() {
//         try {
//             const granted = await PermissionsAndroid.request(
//                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
//             // if (granted === PermissionsAndroid.RESULTS.GRANTED) 
//             if(true) {
//                 console.log('Granted');
//                 this.watchId = navigator.geolocation.getCurrentPosition(
//                     (position) => {
//                         console.log('Position is watched');
//                         this.setState({
//                             permissionState: true,
//                             latitude: position.coords.latitude,
//                             longitude: position.coords.longitude,
//                             error: null,
//                         });
//                     },
//                     (error) => this.setState({error: error.message}),
//                     {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
//                 );
    
//             } else {
//                 console.log('not Granted');
//                 this.setState({
//                     permissionState: false,
//                 });
//             }
//         } catch (err) {
//             console.warn(err)
//         }
//     }
    
//     requestMap() {
//         this.watchId = navigator.geolocation.watchPosition(
//             (position) => {
//                 this.setState({
//                     permissionState: true,
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude,
//                     error: null,
//                 });
//             },
//             (error) => this.setState({error: error.message, permissionState: false,}),
//             {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
//         );
//     }
    
    
//     componentWillUnmount() {
//         navigator.geolocation.clearWatch(this.watchID);
//     }
    
//     render() {
//         var {height, width} = Dimensions.get('window');
//         return (
//             <View style={{height: 150, justifyContent: 'center'}}>
//                 {
//                    // this.state.permissionState === true ?
//                         <MapView
//                             minZoomLevel={16}
//                             style={{height: 150, marginBottom: 5, marginTop: 5}}
//                             region={{
//                                 latitude: this.state.latitude,
//                                 longitude: this.state.longitude,
//                                 latitudeDelta: 0.0922,
//                                 longitudeDelta: 0.0421
//                             }}>
//                             <MapView.Marker
//                                 coordinate={{
//                                     latitude: (this.state.latitude + 0.00000),
//                                     longitude: (this.state.longitude + 0.00000),}}
                                 
//                                 title={"You're here"} pinColor={'#3498db'}
//                             />
//                         </MapView> 
//                         // <View style={{
//                         //     borderWidth: 1,
//                         //     borderColor: '#6f6f6f',
//                         //     height: 150,
//                         //     justifyContent: 'center',
//                         //     alignItems: 'center',
//                         // }}>
//                         //     <Text>No Permission for location</Text>
    
//                         // </View>
    
    
//                 }
    
//             </View>
//         );
//     }
//     }
    
//     const styles = StyleSheet.create({
//     map: {
//         ...StyleSheet.absoluteFillObject,
//      }
//     });
    
//     export default GalleryViewContainer;


import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  UIManager,
  Alert
} from "react-native";
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE
} from "react-native-maps";
import haversine from "haversine";

// const LATITUDE = 29.95539;
// const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

class AnimatedMarkers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0,
        longitudeDelta: 0
      })
    };
  }

  componentDidMount() {
    const { coordinate } = this.state;

    //this.requestCameraPermission();
    this.requestLocationPermission();

    this.watchID = navigator.geolocation.watchPosition(
      position => {
        const { routeCoordinates, distanceTravelled } = this.state;
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude
        };
        console.log({ newCoordinate });

        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }

        this.setState({
          latitude,
          longitude,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),
          distanceTravelled:
            distanceTravelled + this.calcDistance(newCoordinate),
          prevLatLng: newCoordinate
        });
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

  sendLocation = () =>{
     console.log("my current location is Longitude->",this.state.longitude," and Latitude->",this.state.latitude);
  };

//   requestCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: "Location Access Permission",
//           buttonNeutral: "Ask Me Later",
//           buttonNegative: "Cancel",
//           buttonPositive: "OK"
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log("You can use the camera");
//       } else {
//         console.log("Camera permission denied");
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };
requestLocationPermission = () => {
    try {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Access Permission",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("....location permission denied....");
        Alert.alert('Attention','Check Your Location Service is Enable',[{text:'ok'}]);
        
      }
    } catch (err) {
      console.warn(err);
    }
  };


  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={this.getMapRegion()}
        >
          <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
          <Marker.Animated
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}
          />
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.bubble, styles.button]}>
            <Text style={styles.bottomBarContent}>
              {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
          </TouchableOpacity>
           
            <Button style={[styles.bubble, styles.button]}
              onPress={this.sendLocation}
              title="Send Location"
            />
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
  }
});

export default AnimatedMarkers;