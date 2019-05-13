import React from 'react';
import { AsyncStorage } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  
} from 'react-native';

import { fonts, colors } from '../../styles';
 

export default class ViewProfile extends React.Component {

  state = {
    userdata: null,
  }

  async loadJWT() {
    try {
      const value = await AsyncStorage.getItem('id_token');
      if (value !== null) {
        this.setState({
          use: value,
          loading: false
        });
      } else {
        this.setState({
          loading: false
        });
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }  
 
 
render(){
  return (
   <ImageBackground 
       source={require('../../../assets/images/background.png')}
       style={styles.container}
    > 
    <View style={styles.textContainer}>
        <Text style={styles.availableText}>MyProfile Details</Text>
         
      </View>
      
    </ImageBackground>
  );
}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: 'space-around',
     
  },
   
  availableText: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 40,
    marginVertical: 3,
  },
  textContainer: {
    alignItems: 'center',
  },
  
});

