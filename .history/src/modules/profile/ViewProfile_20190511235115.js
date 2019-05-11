// import React from 'react';
// import { AsyncStorage } from 'react-native';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
  
// } from 'react-native';

// import { fonts, colors } from '../../styles';
 

// export default class ViewProfile extends React.Component {

//   state = {
//     userdata: '',
//     name: '',
//   }

//   componentDidMount(){
//     this.loadData();
//   }
//  // when we use the componentDidMount or componentWillMount the when the page is load the function is auto call like angular ngOnInit function 
//   async loadData() { //when we using componentWillMount first execte the function and then rendering the component
//     console.log('..............load value......................');
//     try {
//       const value = await AsyncStorage.getItem('user');
//       if (value !== null) {
//         console.log('..............user data value is......',value,'..................');
//         this.setState({
//           userdata: value,
//        });
//        console.log('..............user state value is......',this.state.userdata,'..................');
//        this.setState({
//          name: JSON.parse(this.state.userdata).name,
//        });
//        console.log('..............user state name value is......',this.state.name,'..................');
//       } else {
//         this.setState({
//           userdata: ''
//         });
//       }
//     } catch (error) {
//       console.log('AsyncStorage Error: ' + error.message);
//     }
//   }  
 
 
// render(){
//   return (
//    <ImageBackground 
//        source={require('../../../assets/images/background.png')}
//        style={styles.container}
//     > 
//     <View style={styles.textContainer}>
//         <Text style={styles.availableText}>MyProfile Details are : {this.state.name} </Text>
         
//       </View>
      
//     </ImageBackground>
//   );
// }

// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingHorizontal: 30,
//     paddingVertical: 50,
//     justifyContent: 'space-around',
     
//   },
   
//   availableText: {
//     color: colors.white,
//     fontFamily: fonts.primaryRegular,
//     fontSize: 40,
//     marginVertical: 3,
//   },
//   textContainer: {
//     alignItems: 'center',
//   },
  
// });



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
              <Text style={styles.info}>nic {this.state.name}</Text>
              {/* <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text> */}
{/*               
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 1</Text>  
              </TouchableOpacity>               */}
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Change Profile</Text> 
              </TouchableOpacity>
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
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});