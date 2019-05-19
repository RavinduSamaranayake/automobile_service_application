
import React, {Component}  from 'react';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {View,ScrollView, Keyboard,Text, TextInput,Alert, ActivityIndicator, TouchableHighlight,  TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import { AsyncStorage } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ValidationComponent from 'react-native-form-validator';
import { Button } from '../../components';
import axios from 'axios';
export default class ChangePassword extends ValidationComponent {

  constructor(props) {
    super(props);
    
  }

  state = {
    isSave: false,
    userdata: '',
    token: '',
    userid: '',
    msg: '',
    newpassword: '',
    conpassword: ''
    
  }

  



  componentDidMount(){
    this.loadData();
  }

  
 // when we use the componentDidMount or componentWillMount the when the page is load the function is auto call like angular ngOnInit function 
  async loadData() { //when we using componentWillMount first execte the function and then rendering the component
    
    try {
      const value = await AsyncStorage.getItem('user');
      const token = await AsyncStorage.getItem('token');
      if (value !== null) {
        
        this.setState({
          userdata: value,
          token: token
       });
        
       this.setState({
         userid: JSON.parse(this.state.userdata).id,
          
       });
       
      } else {
        this.setState({
          userdata: ''
        });
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }  
  saveProfile = () => {
    this.setState({isSave: true});
    //regular expression for form validation
    const passwordRegex = RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/);
    

    
    const newpasswords = {
      password:this.state.newpassword,
      confirm_password:this.state.conpassword
    }
    
    //form validation
    if(newpasswords.password.trim().length == 0){
      Alert.alert('Error!','Please Enter new password..',[{text:'ok'}]);
    }else if(newpasswords.confirm_password.trim().length == 0){
      Alert.alert('Error!','Please Enter confirm password..',[{text:'ok'}]);
    }else if(newpasswords.password !== newpasswords.confirm_password){
      Alert.alert('Error!','Password confirmation does not match..',[{text:'ok'}]);
    }else if(!passwordRegex.test(newpasswords.password)){
      Alert.alert('Error!','Weak Password..',[{text:'ok'}]);
      
     
    }else{

    axios.post(`http://shan-motors.herokuapp.com/api/forgotpassword/update-user-password/${this.state.userid}/${this.state.token}`, newpasswords)
        .then((res)=>{
          this.setState({
            isSave:false,
            msg:res.data.msg,
            newpassword:'',
            conpassword:''
        })
          
        Alert.alert('Successfully Changed Password!','please signout and signin again...',[{text:'ok'}]);
        })
        .catch(res=>{
          this.setState({
            isSave:false,
            msg:'',
            newpassword:'',
            conpassword:''
        })
          Alert.alert('Error!',res.response.data.err,[{text:'ok'}]);
      })
     
      console.log(".................wrong..........")

    }

  }
 

   
  render() {
    //for load  the activity indicator untill json data is save
    if (this.state.isSave) {
      return (
        <View style={styles.actvityind}>
          <ActivityIndicator />
        </View>
      );
    }
      return (
         
        <KeyboardAwareScrollView> 
         
           {/* If we use view instead of we don't see the some text inputs and button because of keyboard */}
          <Text style={styles.textst}>Enter Your new Password</Text> 
          <TextInput  style={styles.input}  secureTextEntry={true}  ref="password"  onChangeText={(password) => this.setState({newpassword:password})}   />
          <Text style={styles.textst}>Confirm Password</Text> 
          <TextInput  style={styles.input} secureTextEntry={true} ref="confirm" onChangeText={(confirm) => this.setState({conpassword:confirm})}  />
          
         
          
         
          <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={this.saveProfile} style={styles.buttonContainer}>
              <Text style={{color: 'white',fontWeight: 'bold'}}>Save Changes</Text>
              </TouchableOpacity>
  
         
      </View> 
      
           

         
          <KeyboardSpacer/>        
        </KeyboardAwareScrollView>
       
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
  input: {
    width: 340,
    fontSize: 16,
    fontWeight: '300',
    height: 45,
    backgroundColor: 'rgba(52, 52, 52, 0.3)',
    margin: 10,
    color: 'black',
    padding: 8,
    borderRadius: 14
  },
  textst: {
   
    paddingLeft: 5,
     
  },
  nerdImage: {
    width: 80,
    height: 80,
  },
  textContainer: {
    alignItems: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
   
  bubble2: {
    flex: 1,
    backgroundColor: "#00008b",
    
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  
  button: {
    height: 50,
    width: 600,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00008b",
  },
  actvityind: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: 'space-around',
     
  },
});

 