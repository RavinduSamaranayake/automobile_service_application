 
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { AsyncStorage } from 'react-native';

export default class ViewProfile extends Component {

    state = {
    userdata: '',
    name: '',
    email: '',
    address: '',
    nic: '',
    contact: ''
  }

  componentDidMount(){
    this.loadData();
  }

  changeProfile = () => {
    this.props.navigation.navigate({ routeName: 'ChangeProfile' });
   
  };

  settingAccount = () => {
    this.props.navigation.navigate({ routeName: 'ChangePassword' });
     
  };
 // when we use the componentDidMount or componentWillMount the when the page is load the function is auto call like angular ngOnInit function 
  async loadData() { //when we using componentWillMount first execte the function and then rendering the component
    console.log('..............load value......................');
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        console.log('..............user data value is......',value,'..................');
        this.setState({
          userdata: value,
       });
       console.log('..............user state value is......',this.state.userdata,'..................');
       this.setState({
         name: JSON.parse(this.state.userdata).name,
         email: JSON.parse(this.state.userdata).email,
         address: JSON.parse(this.state.userdata).address,
         nic: JSON.parse(this.state.userdata).nic,
         contact: JSON.parse(this.state.userdata).contact_number,
       });
       console.log('..............user state name value is......',this.state.name,'..................');
      } else {
        this.setState({
          userdata: ''
        });
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }  
 

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}> {this.state.name}</Text>
              <Text style={styles.info}> {this.state.email}</Text>
              <Text style={styles.info}> {this.state.address}</Text>
              <Text style={styles.info}> {this.state.contact}</Text>
              <Text style={styles.info}> {this.state.nic}</Text>
 
              {/* <TouchableOpacity onPress={this.changeProfile} style={styles.buttonContainer}>
              <Text style={{color: 'white',fontWeight: 'bold'}}>Change Profile</Text>
              </TouchableOpacity> */}
              {/* <TouchableOpacity onPress={this.settingAccount} style={styles.buttonContainer}>
              <Text style={{color: 'brown',fontWeight: 'bold'}}>Sign Out</Text>
              </TouchableOpacity> */}
              <Text style={{color: 'blue',fontWeight: 'bold', fontSize:18}}>Change Profile</Text>
               <Text style={{color: 'brown',fontWeight: 'bold', fontSize:20} } onPress={this.settingAccount}>Sign Out</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});