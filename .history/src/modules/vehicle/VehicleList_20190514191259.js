

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

export default class VehicleList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      modalVisible:false,
      userSelected: [],
      // userSelected:[],
      // data: [
      //   {id:1,  name: "Mark Doe",   position:"CEO",               image:"https://bootdey.com/img/Content/avatar/avatar7.png", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},
      //   {id:2,  name: "John Doe",   position:"CTO",               image:"https://bootdey.com/img/Content/avatar/avatar1.png", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."},
      //   {id:3,  name: "Clark Man",  position:"Creative designer", image:"https://bootdey.com/img/Content/avatar/avatar6.png", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
      //   {id:4,  name: "Jaden Boor", position:"Front-end dev",     image:"https://bootdey.com/img/Content/avatar/avatar5.png", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
      //   {id:5,  name: "Srick Tree", position:"Backend-end dev",   image:"https://bootdey.com/img/Content/avatar/avatar4.png", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
      //   {id:6,  name: "John Doe",   position:"Creative designer", image:"https://bootdey.com/img/Content/avatar/avatar3.png", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
      //   {id:7,  name: "John Doe",   position:"Manager",           image:"https://bootdey.com/img/Content/avatar/avatar2.png", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
      //   {id:8,  name: "John Doe",   position:"IOS dev",           image:"https://bootdey.com/img/Content/avatar/avatar1.png", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
      //   {id:9,  name: "John Doe",   position:"Web dev",           image:"https://bootdey.com/img/Content/avatar/avatar4.png", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
      //   {id:10, name: "John Doe",   position:"Analyst",           image:"https://bootdey.com/img/Content/avatar/avatar7.png", about:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."} ,
      // ]
    };
  }

  componentDidMount(){
    this.loadData();
    console.log('..............user state id value is......',this.state.userid,'..................');

    
  }

  
  //for get the current user id
  async loadData() {  
    
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        
        this.setState({
          userdata: value,
       });
      // console.log('..............user state value is......',this.state.userdata,'..................');
       this.setState({
         userid: JSON.parse(this.state.userdata).id,
       });
       console.log('..............user load state id value is......',this.state.userid,'..................');
      
      
      
       //get the vehicle data from api
    axios.get('http://shan-motors.herokuapp.com/api/users/view-vehicle-details/'+this.state.userid)
    .then((res)=>{
      this.setState({
        vehicle_details:res.data,
        isLoading: false,
      })
      console.log('..............read succcess......',this.state.vehicle_details,'..................');
    })
    .catch((err)=>{
     // console.log(err);
      console.log('..............read fail......',err,'..................');
    })
     



      } else {
        this.setState({
          userdata: ''
        });
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }  


 //click the list event
  clickEventListener = (item) => {
    this.setState({userSelected: item}, () =>{
      this.setModalVisible(true);
      console.log('..............vehicle number is......',this.state.userSelected.vehicle_number,'..................');
    });
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {

    //for load  the activity indicator untill data is load to state
    if (this.state.isLoading) {
      return (
        <View style={styles.actvit}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
          
        <FlatList 
          style={styles.userList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.vehicle_details}
          keyExtractor= {(item) => {
            return item.vehicle_number;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              {/* <Image style={styles.image} source={{uri: item.image}}/> */}
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.vehicle_number}</Text>
                <Text style={styles.position}>{item.vehicle_brand}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>View Details</Text>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Appointment</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>

        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this.setModalVisible(false)}
          visible={this.state.modalVisible}>

          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupContent}>
                <ScrollView contentContainerStyle={styles.modalInfo}>
                    {/* <Image style={styles.image} source={{uri: this.state.userSelected.image}}/> */}
                    <Text style={styles.name}>{this.state.userSelected.vehicle_number}</Text>
                    <Text style={styles.position}>{this.state.userSelected.vehicle_brand}</Text>
                    <Text style={styles.about}>Vehicle Type : {this.state.userSelected.vehicle_type}</Text>
                    <Text style={styles.about}>Meter Reading : {this.state.userSelected.meter_reading} km</Text>
                </ScrollView>
              </View>
              <View style={styles.popupButtons}>
                <TouchableOpacity onPress={() => {this.setModalVisible(false) }} style={styles.btnClose}>
                  <Text style={styles.txtClose}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#eeeeee"
  },
  header:{
    backgroundColor: "#00CED1",
    height:200
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
    flex:1,
  },
  detailContent:{
    top:80,
    height:500,
    width:Dimensions.get('screen').width - 90,
    marginHorizontal:30,
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  userList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
  },



  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal:20,
    backgroundColor:"white",
    flexBasis: '46%',
    padding: 10,
    flexDirection:'row'
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  about:{
    marginHorizontal:10
  },

  followButton: {
    marginTop:10,
    height:35,
    width:200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
 /************ modals ************/
  popup: {
    backgroundColor: 'white',
    marginTop: 80,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1,
    marginTop: 30
  },
  popupContent: {
    //alignItems: 'center',
    margin: 5,
    height:250,
  },
  popupHeader: {
    marginBottom: 45
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent:'center'
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  btnClose:{
    height:20,
    backgroundColor:'#20b2aa',
    padding:20
  },
  modalInfo:{
    alignItems:'center',
    justifyContent:'center',
  }
}); 