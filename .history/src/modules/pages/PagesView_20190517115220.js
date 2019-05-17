import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
//import firebase from 'react-native-firebase';

import { colors, fonts } from '../../styles';
import deviceStorage from '../../services/deviceStorage';

const chartIcon = require('../../../assets/images/pages/chart.png');
const calendarIcon = require('../../../assets/images/pages/calendar.png');
const chatIcon = require('../../../assets/images/pages/chat.png');
const galleryIcon = require('../../../assets/images/pages/gallery.png');
const profileIcon = require('../../logprofile.png');

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
            source={chartIcon}
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
            source={galleryIcon}
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
