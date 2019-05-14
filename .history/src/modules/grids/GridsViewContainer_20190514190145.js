// import { compose, withState } from 'recompose';

// import GridView from './GridsView';

// const listData = [
//   {
//     id: 1,
//     brand: 'Citizen',
//     title: 'CITIZEN ECO-DRIVE',
//     subtitle: 'Limited Edition',
//     price: '$129.99',
//     badge: 'NEW',
//     badgeColor: '#3cd39f',
//     image:
//       'https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg',
//   },
//   {
//     id: 2,
//     brand: 'Weeknight',
//     title: 'NEXT-LEVEL WEAR',
//     subtitle: 'Office, prom or special parties is all dressed up',
//     price: '$29.99',
//     priceFrom: true,
//     image: 'https://reactnativestarter.com/demo/images/pexels-photo-26549.jpg',
//   },
//   {
//     id: 3,
//     brand: 'Mad Perry',
//     title: 'CITIZEN ECO-DRIVE',
//     subtitle: 'Office, prom or special parties is all dressed up',
//     price: '$29.99',
//     priceFrom: true,
//     badge: 'SALE',
//     badgeColor: '#ee1f78',
//     image: 'https://reactnativestarter.com/demo/images/pexels-photo-30360.jpg',
//   },
//   {
//     id: 4,
//     brand: 'Citizen',
//     title: 'CITIZEN ECO-DRIVE',
//     subtitle: 'Limited Edition',
//     price: '$129.99',
//     badge: 'NEW',
//     badgeColor: 'green',
//     image: 'https://reactnativestarter.com/demo/images/pexels-photo-37839.jpg',
//   },
//   {
//     id: 5,
//     brand: 'Weeknight',
//     title: 'NEXT-LEVEL WEAR',
//     subtitle: 'Office, prom or special parties is all dressed up',
//     price: '$29.99',
//     priceFrom: true,
//     image: 'https://reactnativestarter.com/demo/images/pexels-photo-69212.jpg',
//   },
//   {
//     id: 6,
//     brand: 'Mad Perry',
//     title: 'CITIZEN ECO-DRIVE',
//     subtitle: 'Office, prom or special parties is all dressed up',
//     price: '$29.99',
//     priceFrom: true,
//     badge: 'SALE',
//     badgeColor: 'red',
//     image: 'https://reactnativestarter.com/demo/images/pexels-photo-108061.jpg',
//   },
//   {
//     id: 7,
//     brand: 'Citizen',
//     title: 'CITIZEN ECO-DRIVE',
//     subtitle: 'Limited Edition',
//     price: '$129.99',
//     badge: 'NEW',
//     badgeColor: '#3cd39f',
//     image: 'https://reactnativestarter.com/demo/images/pexels-photo-126371.jpg',
//   },
//   {
//     id: 8,
//     brand: 'Weeknight',
//     title: 'NEXT-LEVEL WEAR',
//     subtitle: 'Office, prom or special parties is all dressed up',
//     price: '$29.99',
//     priceFrom: true,
//     image: 'https://reactnativestarter.com/demo/images/pexels-photo-165888.jpg',
//   },
//   {
//     id: 9,
//     brand: 'Mad Perry',
//     title: 'CITIZEN ECO-DRIVE',
//     subtitle: 'Office, prom or special parties is all dressed up',
//     price: '$29.99',
//     priceFrom: true,
//     badge: 'SALE',
//     badgeColor: '#ee1f78',
//     image: 'https://reactnativestarter.com/demo/images/pexels-photo-167854.jpg',
//   },
//   {
//     id: 10,
//     brand: 'Citizen',
//     title: 'CITIZEN ECO-DRIVE',
//     subtitle: 'Limited Edition',
//     price: '$129.99',
//     badge: 'NEW',
//     badgeColor: 'green',
//     image: 'https://reactnativestarter.com/demo/images/pexels-photo-173427.jpg',
//   },
//   {
//     id: 11,
//     brand: 'Weeknight',
//     title: 'NEXT-LEVEL WEAR',
//     subtitle: 'Office, prom or special parties is all dressed up',
//     price: '$29.99',
//     priceFrom: true,
//     image: 'https://reactnativestarter.com/demo/images/pexels-photo-175696.jpg',
//   },
//   {
//     id: 12,
//     brand: 'Mad Perry',
//     title: 'CITIZEN ECO-DRIVE',
//     subtitle: 'Office, prom or special parties is all dressed up',
//     price: '$29.99',
//     priceFrom: true,
//     badge: 'SALE',
//     badgeColor: 'red',
//     image: 'https://reactnativestarter.com/demo/images/pexels-photo-175733.jpg',
//   },
// ];

// export default compose(
//   withState('tabIndex', 'setTabIndex', 0),
//   withState('tabs', 'setTabs', ['Grid', 'List 1', 'List 2']),
//   withState('data', 'setData', listData),
// )(GridView);





// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   ActivityIndicator
  
// } from 'react-native';

// import { fonts, colors } from '../../styles';
 
// //import {fetchItems} from '../../../constants/api'
 
 

// class GridsViewContainer extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       isLoading: true,
//       dataSource: null,
//     }
//   }

//   componentDidMount(){

//     return fetch(`http://shan-motors.herokuapp.com/api/auth/get-list-of-users`)//fetch(`https://facebook.github.io/react-native/movies.json`)
//            .then((response) => response.json()) //covert to the json object
//            .then((responsJson) => {

//              this.setState({
//                isLoading:false,
//                dataSource: responsJson.users,//responsJson.movies, //array of the movies
//              })
//            })
//     .catch((error) => {
//       console.log(error)
//     });
//   }
//   // static defaultProps = {
//   //   fetchItems
//   // }

//   // state = {
//   //   loading: false,
//   //   items: []
//   // }

//   // async componentDidMount() {
//   //   this.setState({ loading: true });
//   //   const data = await this.props.fetchItems();
//   //   setTimeout(() => this.setState({ loading: false, items: data.items }), 2000);
//   //   //this.setState({ loading: false, items: data.items });
//   // }


   
 
 
// render(){
//   if (this.state.isLoading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator/>
//       </View>
//     )
//   }
//   else{
//     let movies = this.state.dataSource
//     // let movies = this.state.dataSource.map((val,key)=>{
//     //   return <View key = {key} style={styles.item}>
//     //              <Text>{val.name} is {val.username}</Text>
//     //          </View>
//     // })
//   return (
//    <ImageBackground 
//        source={require('../../../assets/images/background.png')}
//        style={styles.container}
//     > 
//     <View style={styles.textContainer}>
//         {/* <Text style={styles.availableText}>Our Services and booking</Text>
//         {this.state.items.map((item, i) => (
         
//           <Text key={i}>{item.name}</Text>
//         ))}
//           */}
//           {movies}
//       </View>
      
//     </ImageBackground>
//   );
// }
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
//   item: {
//     flex: 1,
//     alignSelf: 'stretch',
//   }
  
// });

// export default GridsViewContainer



import React, { Component } from 'react';

import { StyleSheet, FlatList, Text, View, Alert, ActivityIndicator, Platform} from 'react-native';

export default class Project extends Component {
  
  constructor(props)
  {

    super(props);

    this.state = { 
    isLoading: true
  }
  }

  componentDidMount() {
    
       return fetch('http://shan-motors.herokuapp.com/api/inventory/ViewItemList')//fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }

FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }

  GetFlatListItem (item) {
   
  Alert.alert(item.itemName,"item qty is "+item.quantity+"\nitem price is "+item.sellingPrice+"\nitem brand name is "+item.brandName);

  }


  render() {

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (

<View style={styles.MainContainer}>
  
       <FlatList
       
          data={ this.state.dataSource }
          
          ItemSeparatorComponent = {this.FlatListItemSeparator}

          // renderItem={({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item.fruit_name)}> {item.fruit_name} </Text>}
          renderItem={({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item)}> {item.itemName} </Text>}

          keyExtractor={(item, index) => index}
          
         />
    
    
</View>
            
    );
  }
}

const styles = StyleSheet.create({

MainContainer :{

justifyContent: 'center',
flex:1,
margin: 10,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,

},

container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 30,
      paddingVertical: 50,
      justifyContent: 'space-around',
       
    },

FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});

 
