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
} from 'react-native';

export default class ViewProfile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

                <Text style={styles.name}>John Doe </Text>
                <Text style={styles.userInfo}>jhonnydoe@mail.com </Text>
                <Text style={styles.userInfo}>Florida,wdhgejf,fdegfrj </Text>
                <Text style={styles.userInfo}>tel 071 741 1392 </Text>
                <Text style={styles.userInfo}>nic 071 741 1392 </Text>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/home/win8/50/ffffff'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Home</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/settings/win8/50/ffffff'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Settings</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/news/win8/50/ffffff'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>News</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/shopping-basket/ios11/50/ffffff'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Shop</Text>
              </View>
            </View>

          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});


