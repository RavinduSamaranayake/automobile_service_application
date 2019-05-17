import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
//import firebase from 'react-native-firebase';

import { colors, fonts } from '../../styles';
import deviceStorage from '../../services/deviceStorage';

const bookingIcon = require('../../logos/appo.png');
const historyIcon = require('../../logos/history.png');
const vehiclesIcon = require('../../../logos/vehicles.png');
//const galleryIcon = require('../../../assets/images/pages/gallery.png');
const roadsideIcon = require('../../logos/location.png');
//const profileIcon = require('../../../assets/images/pages/profile.png');
const profileIcon = require('../../logos/profileimg.png');
const logoutIcon = require('../../logos/exit1.png');
export default function PagesScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Booking' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={bookingIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Map' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={roadsideIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Road Side</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Profile' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={profileIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'VehicleList' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={chatIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>Vehicles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'ServiceHistory' })}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={calendarIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity 

        onPress={ () => {

          //log out from user
                
               // firebase.auth().signOut();
               deviceStorage.deleteJWT();
               props.navigation.navigate({ routeName: 'Splash' });
                
          }
          }
         style={styles.item}>
          <Image
            resizeMode="contain"
            source={profileIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//sign out using remove item from async storage
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.primary,
    fontFamily: fonts.primary,
  },
  itemImage: {
    height: 35,
  },
});
