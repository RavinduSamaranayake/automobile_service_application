
// import React, { Component } from 'react';

// import { StyleSheet, FlatList, Text, View, Alert, ActivityIndicator, Platform} from 'react-native';

// export default class VehicleList extends Component {
  
//   constructor(props)
//   {

//     super(props);

//     this.state = { 
//     isLoading: true
//   }
//   }

//   componentDidMount() {
    
//        return fetch('http://shan-motors.herokuapp.com/api/inventory/ViewItemList')//fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
//          .then((response) => response.json())
//          .then((responseJson) => {
//            this.setState({
//              isLoading: false,
//              dataSource: responseJson
//            }, function() {
//              // In this block you can do something with new state.
//            });
//          })
//          .catch((error) => {
//            console.error(error);
//          });
//      }

// FlatListItemSeparator = () => {
//     return (
//       <View
//         style={{
//           height: 1,
//           width: "100%",
//           backgroundColor: "#607D8B",
//         }}
//       />
//     );
//   }

//   GetFlatListItem (item) {
   
//   Alert.alert(item.itemName,"item qty is "+item.quantity+"\nitem price is "+item.sellingPrice+"\nitem brand name is "+item.brandName);

//   }


//   render() {

//     if (this.state.isLoading) {
//       return (
//         <View style={{flex: 1, paddingTop: 20}}>
//           <ActivityIndicator />
//         </View>
//       );
//     }

//     return (

// <View style={styles.MainContainer}>
  
//        <FlatList
       
//           data={ this.state.dataSource }
          
//           ItemSeparatorComponent = {this.FlatListItemSeparator}

//           // renderItem={({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item.fruit_name)}> {item.fruit_name} </Text>}
//           renderItem={({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item)}> {item.itemName} </Text>}

//           keyExtractor={(item, index) => index}
          
//          />
    
    
// </View>
            
//     );
//   }
// }

// const styles = StyleSheet.create({

// MainContainer :{

// justifyContent: 'center',
// flex:1,
// margin: 10,
// paddingTop: (Platform.OS === 'ios') ? 20 : 0,

// },

// FlatListItemStyle: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },

// });