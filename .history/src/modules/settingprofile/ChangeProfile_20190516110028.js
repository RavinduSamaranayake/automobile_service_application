 
import React, {Component}  from 'react';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {View,ScrollView, Keyboard,Text, TextInput,Alert, ActivityIndicator, TouchableHighlight,  TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import { AsyncStorage } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ValidationComponent from 'react-native-form-validator';
import { Button } from '../../components';
import axios from 'axios';
export default class ChangeProfile extends ValidationComponent {

  constructor(props) {
    super(props);
    
  }

  state = {
    is
    userdata: '',
    userid: '',
    name: '',
    username: '',
    email: '',
    address: '',
    nic: '',
    contact: ''
  }

  



  componentDidMount(){
    this.loadData();
  }

  
 // when we use the componentDidMount or componentWillMount the when the page is load the function is auto call like angular ngOnInit function 
  async loadData() { //when we using componentWillMount first execte the function and then rendering the component
    
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        
        this.setState({
          userdata: value,
       });
        
       this.setState({
         userid: JSON.parse(this.state.userdata).id,
         name: JSON.parse(this.state.userdata).name,
         username: JSON.parse(this.state.userdata).username,
         email: JSON.parse(this.state.userdata).email,
         address: JSON.parse(this.state.userdata).address,
         nic: JSON.parse(this.state.userdata).nic,
         contact: JSON.parse(this.state.userdata).contact_number,
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
    
    //regular expression for form validation
    const emailRegex = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    const phoneRegex = RegExp(/^[0-9]{10}$/);
    const nicRegex1 = RegExp(/^[0-9]{9}[vVxX]$/);
    const nicRegex2 = RegExp( /^[0-9]{12}$/);

    
    const updated = {
      name:this.state.name,
      username:this.state.username,
      email:this.state.email,
      nic:this.state.nic,
      contact_number:this.state.contact,
      address:this.state.address
    }
    
    //form validation
    if(updated.name.trim().length == 0){
      Alert.alert('Error!','Name is required..',[{text:'ok'}]);
    }else if(updated.username.trim().length == 0){
      Alert.alert('Error!','Username is required..',[{text:'ok'}]);
    }else if(updated.address.trim().length == 0){
      Alert.alert('Error!','Address is required..',[{text:'ok'}]);
    }else if(!emailRegex.test(updated.email)){
      Alert.alert('Error!','Email is not valid..',[{text:'ok'}]);
    }else if(!phoneRegex.test(updated.contact_number)){
      Alert.alert('Error!','Contact number is not valid..',[{text:'ok'}]);
    }else if(!(nicRegex1.test(updated.nic) || nicRegex2.test(updated.nic))){
      Alert.alert('Error!','NIC number is not valid..',[{text:'ok'}]);
    }else{

    axios.post('http://shan-motors.herokuapp.com/api/users/update-customer/'+this.state.userid,updated)
        .then((res)=>{
          
        Alert.alert('Successfully Changed Profile!','please signout and signin again...',[{text:'ok'}]);
        })
        .catch(res=>{
         
          Alert.alert('Error!',res.response.data.err,[{text:'ok'}]);
      })
     
      console.log(".................wrong..........")

    }

  }
 

   
  render() {
      return (
         
        <KeyboardAwareScrollView> 
         
           {/* If we use view instead of we don't see the some text inputs and button because of keyboard */}
          <Text style={styles.textst}>Name</Text> 
          <TextInput  style={styles.input}  ref="name"  onChangeText={(name) => this.setState({name})} value={this.state.name} />
          <Text style={styles.textst}>User name</Text> 
          <TextInput  style={styles.input}  ref="username" onChangeText={(username) => this.setState({username})} value={this.state.username} />
          <Text style={styles.textst}>Email</Text> 
          <TextInput  style={styles.input}   ref="email" onChangeText={(email) => this.setState({email})} value={this.state.email} />
          <Text style={styles.textst}>Address</Text> 
          <TextInput  style={styles.input}  ref="address" onChangeText={(address) => this.setState({address})} value={this.state.address} />
          <Text style={styles.textst}>Contact number</Text> 
          <TextInput  style={styles.input}   ref="contact" onChangeText={(contact) => this.setState({contact})} value={this.state.contact} />
          <Text style={styles.textst}>NIC</Text> 
          <TextInput  style={styles.input}  ref="nic"   onChangeText={(nic) => this.setState({nic})} value={this.state.nic} onSubmitEditing={this.handleEditComplete}/>
         
          
         
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
});

 