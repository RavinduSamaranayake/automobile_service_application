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
 // when we use the componentDidMount the when the page is load the function is auto call like angular ngOnInit function 
  async componentWillMount() {
    console.log('..............load value......................');
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        console.log('..............user data value is......',value,'..................');
        this.setState({
          userdata: value
       });
      } else {
        this.setState({
          userdata: null
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
        <Text style={styles.availableText}>MyProfile Details are : {JSON.parse(data)this.state.userdata.name} </Text>
         
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


