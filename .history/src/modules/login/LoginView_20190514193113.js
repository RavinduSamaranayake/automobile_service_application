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
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';
import deviceStorage from '../../services/deviceStorage';
//import firebase from 'react-native-firebase';
import { fonts, colors } from '../../styles';
import { Button } from '../../components';

class LoginScreen extends React.Component {

  state = {
    isLoading: false,
    isAuthenticated: false,
    email: '', 
    password: '',
   // msg:'',
    user: null,
  }
 

 
   
  signIn = () => {
    //start the rendering activituy indicator
    this.setState({ isLoading: true});

      //----------------------login with firebase auth------------------------
      // firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
      // .then(() => {
      //    // console.log(`Login with user : ${JSON.stringify(loggedInUser.toJSON())}`);
      //     this.props.navigation.navigate('Dashboard')
      // }).catch((error) => {
      //     Alert.alert('Error',`${error}`,[{text:'ok'}])
      //     //console.log(`Login fail with error: ${error}`);
      // });
      
      const User = {
        email:this.state.email,
        password:this.state.password
      }

      axios.post('http://shan-motors.herokuapp.com/api/auth',User)
              .then(res=>{ 
                  //first check whether the user is custommer or not and user status is true or false user ststus mean activate or deactivate acc
                  // store login user token in device storage this like localStorage.setItem('id_token',res.data.token) in web
                  
                  if(res.data.user.role == "customer" && res.data.user.status){
                    this.setState({ isAuthenticated: true , isLoading: false});
                    this.props.navigation.navigate('Dashboard');
                    deviceStorage.saveItem(res.data.token , res.data.user);  
                  }else{
                    Alert.alert('Error',`Invalid user login`,[{text:'ok'}]);
                    return res.data;
                  }
                  
    
               })
          .catch((error) =>{
                  //Alert.alert('Error',`${error}`,[{text:'ok'}]);
                  Alert.alert('Error',`User name or password is incorrect`,[{text:'ok'}]);
              }) 

      }
 
 
render(){

   //for load  the activity indicator untill  load to dashboard
   if (this.state.isLoading) {
    return (
      <View style={styles.actvityind}>
        <ActivityIndicator />
      </View>
    );
  }

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
          onChangeText={  (text) => {
            this.setState({ email: text });
        }
      }
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor='white'
          onChangeText={(text) => {
            this.setState({ password: text });
        }
      }
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
