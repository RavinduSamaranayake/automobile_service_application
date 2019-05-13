 
import React, {Component}  from 'react';
import {View, Text, TextInput, TouchableHighlight,  TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import { Button } from '../../components';
export default class ChangeProfile extends ValidationComponent {

  constructor(props) {
    super(props);
    
  }

  state = {
    userdata: '',
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

  changeProfile = () => {
    this.props.navigation.navigate({ routeName: 'ChangeProfile' });
   
  };

  settingAccount = () => {
    //this.props.navigation.navigate({ routeName: 'ChangeProfile' });
    console.log('..............................clicked nav btn...............');
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
         username: JSON.parse(this.state.userdata).username,
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
  saveC = () => {
 

  _onPressButton() {
    // Call ValidationComponent validate method
    this.validate({
      name: {minlength:3, maxlength:7, required: true},
      email: {email: true},
      number: {numbers: true},
      date: {date: 'YYYY-MM-DD'}
    });
  }

  render() {
      return (
        <View>
          
          <TextInput  style={styles.input}  ref="name" onChangeText={(name) => this.setState({name})} value={this.state.name} />
          <TextInput  style={styles.input}  ref="username" onChangeText={(username) => this.setState({username})} value={this.state.username} />
          <TextInput  style={styles.input}   ref="email" onChangeText={(email) => this.setState({email})} value={this.state.email} />
          <TextInput  style={styles.input}  ref="address" onChangeText={(address) => this.setState({address})} value={this.state.address} />
          <TextInput  style={styles.input}   ref="contact" onChangeText={(contact) => this.setState({contact})} value={this.state.contact} />
          <TextInput  style={styles.input}  ref="nic" onChangeText={(nic) => this.setState({nic})} value={this.state.nic} />
          {this.isFieldInError('name') && this.getErrorsInField('name').map(errorMessage => <Text>{errorMessage}</Text>) }

          {/* <TouchableHighlight style={styles.buttonsContainer} onPress={this._onPressButton}>
            <Text>Submit</Text>
          </TouchableHighlight> */}
           {/* <View style={styles.buttonsContainer}>
           <TouchableOpacity onPress={this.sendLocation} style={[styles.bubble2,styles.button]}>
               <Text style={{color: 'white',fontWeight: 'bold'}}>Send Location</Text>
          </TouchableOpacity> */}
          <View style={styles.buttonsContainer}>
        <Button
          small
          secondary
          rounded
          style={styles.button}
          caption="        Save Changes       "
          onPress={this.signIn}
        />
      </View>
  
          <Text>
            {this.getErrorMessages()}
          </Text>
        </View>
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
    //backgroundColor: "#00008b",
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  }
});

 