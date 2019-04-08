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

// import React from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Platform,
//   PermissionsAndroid
// } from "react-native";
// import MapView, {
//   Marker,
//   AnimatedRegion,
//   Polyline,
//   PROVIDER_GOOGLE
// } from "react-native-maps";
// // import haversine from "haversine";

// // const LATITUDE = 29.95539;
// // const LONGITUDE = 78.07513;
// const LATITUDE_DELTA = 0.009;
// const LONGITUDE_DELTA = 0.009;
// const LATITUDE = 6.931970;
// const LONGITUDE = 79.857750;

// class GalleryViewContainer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       latitude: LATITUDE,
//       longitude: LONGITUDE,
//       routeCoordinates: [],
//       distanceTravelled: 0,
//       prevLatLng: {},
//       coordinate: new AnimatedRegion({
//         latitude: LATITUDE,
//         longitude: LONGITUDE,
//         latitudeDelta: 0,
//         longitudeDelta: 0
//       })
//     };
//   }
//   // static navigationOptions = {
//   //   header: null
//   // }

//   componentDidMount() {
//     const { coordinate } = this.state;

//     this.requestCameraPermission();

//     this.watchID = navigator.geolocation.watchPosition(
//       position => {
//         const { routeCoordinates, distanceTravelled } = this.state;
//         const { latitude, longitude } = position.coords;

//         const newCoordinate = {
//           latitude,
//           longitude
//         };
//         console.log({ newCoordinate });

//         if (Platform.OS === "android") {
//           if (this.marker) {
//             this.marker._component.animateMarkerToCoordinate(
//               newCoordinate,
//               500
//             );
//           }
//         } else {
//           coordinate.timing(newCoordinate).start();
//         }

//         this.setState({
//           latitude,
//           longitude,
//           routeCoordinates: routeCoordinates.concat([newCoordinate]),
//           distanceTravelled:
//             distanceTravelled + this.calcDistance(newCoordinate),
//           prevLatLng: newCoordinate
//         });
//       },
//       error => console.log(error),
//       {
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 1000,
//         distanceFilter: 10
//       }
//     );
//   }

//   componentWillUnmount() {
//     navigator.geolocation.clearWatch(this.watchID);
//   }

//   getMapRegion = () => ({
//     latitude: this.state.latitude,
//     longitude: this.state.longitude,
//     latitudeDelta: LATITUDE_DELTA,
//     longitudeDelta: LONGITUDE_DELTA
//   });

//   calcDistance = newLatLng => {
//     const { prevLatLng } = this.state;
//     //return haversine(prevLatLng, newLatLng) || 0;
//     return 10;
//   };

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

//   render() {
//     return ( 
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           provider={PROVIDER_GOOGLE}
//           showUserLocation
//           followUserLocation
//           loadingEnabled
//           region={this.getMapRegion()}
//         >
//           <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
//           <Marker.Animated
//             ref={marker => {
//               this.marker = marker;
//             }}
//             coordinate={this.state.coordinate}
//           />
//         </MapView>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={[styles.bubble, styles.button]}>
//             <Text style={styles.bottomBarContent}>
//               {parseFloat(this.state.distanceTravelled).toFixed(2)} km
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: "flex-end",
//     alignItems: "center"
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject
//   },
//   bubble: {
//     flex: 1,
//     backgroundColor: "rgba(255,255,255,0.7)",
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 20
//   },
//   latlng: {
//     width: 200,
//     alignItems: "stretch"
//   },
//   button: {
//     width: 80,
//     paddingHorizontal: 12,
//     alignItems: "center",
//     marginHorizontal: 10
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     marginVertical: 20,
//     backgroundColor: "transparent"
//   }
// });

// export default GalleryViewContainer;









// import React, { Component } from 'react';

// import {
//   View,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';

// import MapView from 'react-native-maps';

// const {width, height} = Dimensions.get('window')

// const SCREEN_HEIGHT = height
// const SCREEN_WIDTH = width
// const ASPECT_RATIO = width / height
// const LATITUDE_DELTA = 0.0922
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

// class GalleryViewContainer extends Component {
//   constructor() {
//     super()
//     this.state = {
//       initialPosition: {
//         latitude: 0,
//         longitude: 0,
//         latitudeDelta: 0,
//         longitudeDelta: 0,
//       },
//     }
//   }

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition((position) => {
//       var lat = parseFloat(position.coords.latitude)
//       var long = parseFloat(position.coords.longitude)

//       var initialRegion = {
//         latitude: lat,
//         longitude: long,
//         latitudeDelta: LATITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       }

//       this.setState({initialPosition: initialRegion})
//     },
//     (error) => alert(JSON.stringify(error)),
//     {enableHighAccuracy: true, timeout: 20000});
//   }


//   renderScreen = () => {
//       return (
//         <View style={styles.container}>
//           <MapView
//             style={styles.map}
//             initialRegion={this.state.initialPosition}/>
//             <MapView.Marker
//              coordinate={this.state.position}
//              title="title"
//              description="description"
//       />
//         </View>
//       );
//   }

//   render() {
//     return (
//       this.renderScreen()
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     height : SCREEN_HEIGHT,
//     width : SCREEN_WIDTH,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });

// export default GalleryViewContainer;






import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class GalleryViewContainer extends Component {
  state = {
    mapRegion: null,
    lastLat: null,
    lastLong: null,
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set use the the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onMapPress(e) {
    console.log(e.nativeEvent.coordinate.longitude);
    let region = {
      latitude:       e.nativeEvent.coordinate.latitude,
      longitude:      e.nativeEvent.coordinate.longitude,
      latitudeDelta:  0.00922*1.5,
      longitudeDelta: 0.00421*1.5
    }
    this.onRegionChange(region, region.latitude, region.longitude);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChange={this.onRegionChange.bind(this)}
          onPress={this.onMapPress.bind(this)}>
          <MapView.Marker
            coordinate={{
              latitude: (this.state.lastLat + 0.00050) || -36.82339,
              longitude: (this.state.lastLong + 0.00050) || -73.03569,
            }}>
            <View>
              <Text style={{color: '#000'}}>
                { this.state.lastLong } / { this.state.lastLat }
              </Text>
            </View>
          </MapView.Marker>
        </MapView>
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
    ...StyleSheet.absoluteFillObject,
  }
}); 