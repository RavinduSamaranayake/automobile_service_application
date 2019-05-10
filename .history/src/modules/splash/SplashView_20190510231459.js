import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ImageBackground,
  Dimensions
} from 'react-native'
import { AsyncStorage } from 'react-native';
//import firebase from 'react-native-firebase'
import {COLOR_PINK, COLOR_PINK_LIGHT, COLOR_FACEBOOK, COLOR_PINK_MEDIUM} from './myColors'
var {height, width} = Dimensions.get('window')

//colors 
export default class SplashView extends Component {
  static navigationOptions = {
    header: null,    
  }
  state = {
    logoOpacity: new Animated.Value(0),
    titleMarginTop: new Animated.Value(height / 2),
  }
  fadeLogo() {
    Animated.timing(this.state.logoOpacity,{
      toValue: 1,                  
      duration: 4000,              
    }).start()
  }
  async componentDidMount() {
    Animated.sequence([      
      //fade logo
      Animated.timing(this.state.logoOpacity,{
        toValue: 1,                  
        duration: 4000,              
      }),
      Animated.timing(this.state.titleMarginTop, {        
        toValue: 10,
        duration: 2000,              
      })
    ]).start(() => {

      //one time login with firebase.. if a user login a one time then he don't login again
      // firebase.auth().onAuthStateChanged(user => {
      //   this.props.navigation.navigate(user ? 'Dashboard' : 'Login')
      // })

      //one time login with jwt auth..
      if(this.isAlreadyAuthenticated()){
      this.props.navigation.navigate('Dashboard');
      }
      else{
        this.props.navigation.navigate('Login');
      }
    });
  }
 
  async isAlreadyAuthenticated(){
    const value = await AsyncStorage.getItem('id_token'); //get the id_token and check it. AsyncStorage like l
    if (!value) {
      return false;
    }
    return true;
}
  render() {    
    return (
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.container}
        //resizeMode="cover"
      >   
      <View style={styles.container}>
        <Animated.Image source={require('./logo.png')} 
          style={{...styles.logo, opacity: this.state.logoOpacity}}/>
        <Animated.Text style={{...styles.title, marginTop: this.state.titleMarginTop}}>
           SHAN AUTOMOBILE
        </Animated.Text>
      </View>
      </ImageBackground> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: COLOR_PINK_LIGHT    
  },
  logo: {
    width: 130, 
    height: 130, 
    borderRadius: 130 / 2,    
  },
  title: {
    color: 'white',
    //color: COLOR_PINK_MEDIUM,
    marginTop: 10,    
    textAlign: 'center',
    width: 400,
    fontSize: 30
  },
})