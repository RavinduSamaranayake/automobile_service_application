import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  Alert,
  Linking,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Button } from '../../components';

class LoginScreen extends React.Component {

  state = {
    username: '', password: ''
  }
 

  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
   
  signIn = () => {
      console.log('user successfully signed in!')
      const { username, password } = this.state
      if(username=='admin'&&password=='admin'){
          
        this.props.navigation.navigate('Dashboard')

      }
      else{
        Alert.alert('Error','Username/Password missmatch',[{text:'ok'}])
      }
    }
 
 
render(){
  return (
   <ImageBackground 
       source={require('../../../assets/images/background.png')}
       style={styles.container}
    > 
      <Image
        source={require('../../../assets/images/RNS_nerd.png')}
        style={styles.nerdImage}
      />

      
      <View style={styles.textContainer}>
        
        <TextInput
          style={styles.input}
          placeholder='Username'
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
      </View>
       

      <View style={styles.buttonsContainer}>
        <Button
          small
          secondary
          rounded
          style={styles.button}
          caption="LogIn"
          onPress={this.signIn}
        />
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
    // flex: 1,
    // // remove width and height to override fixed static size
    // width: null,
    // height: null,
  },
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: '500',
    height: 45,
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    margin: 10,
    color: 'white',
    padding: 8,
    borderRadius: 14
  },
  nerdImage: {
    width: 80,
    height: 80,
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
  buttonsContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  button: {
    alignSelf: 'stretch',
    marginBottom: 15,
  },
});

export default LoginScreen 
