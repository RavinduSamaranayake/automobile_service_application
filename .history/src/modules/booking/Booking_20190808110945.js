

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
//import CheckboxFormX from 'react-native-checkbox-form';
import PickerCheckBox from 'react-native-picker-checkbox';
import DatePicker from 'react-native-datepicker';
import Textarea from 'react-native-textarea';
// set the labels and values for the check box

const items = [
  {
    itemKey:1,
    itemDescription:'Engine Repair'
    },
  {
    itemKey:2,
    itemDescription:'Break Systems Repair'
    },
  {
    itemKey:3,
    itemDescription:'Transmission Repair'
    },

  {
    itemKey:4,
    itemDescription:'Suspension and Steering Repair'
    },

];


export default class Booking extends Component {
  //Current Date
   //Current Month
    //Current Year
  fulldate = new Date().getFullYear() + '-' + (month = new Date().getMonth() + 1) + '-'+new Date().getDate(); //full current date
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      date:this.fulldate, 
      repairModalVisible:false,
      serviceModalVisible:false,
      userSelected: [],
    };
  }


 //for get the select values of check boxes

  handleConfirm(pItems){
    console.log('pItems =>', pItems);
  }
 
  
  componentDidMount(){
    this.loadData();
     

    
  }

 
   
  
  //for get the current user id
  async loadData() {  
    
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        
        this.setState({
          userdata: value,
       });
      
       this.setState({
         userid: JSON.parse(this.state.userdata).id,
       });
      
      
      
      
       //get the vehicle data from api
    axios.get('http://shan-motors.herokuapp.com/api/users/view-vehicle-details/'+this.state.userid)
    .then((res)=>{
      this.setState({
        vehicle_details:res.data,
        isLoading: false,
      })
     
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


 //click the list event and get the vehicle id
  clickEventListener = (item) => {
    this.setState({userSelected: item});
  }

  setModalVisible(visible) {
    this.setState({repairModalVisible: visible});
  }

  // when click the repair button visible the repair modal
  setRepairModalVisible(visible) {
    this.setState({repairModalVisible: visible});
  }



  render() {

    //for load  the activity indicator untill json data is load to state
    if (this.state.isLoading) {
      return (
        <View style={styles.actvityind}>
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
                <Text style={styles.position}>{item.vehicle_type}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Repair</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>
        

        
       {/* .............modal for repair............ */}

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
                    <Text style={styles.name}>Select your repair type</Text>
                    {/* <Text style={styles.name}>{this.state.userSelected.vehicle_number}</Text>
                    <Text style={styles.position}>{this.state.userSelected.vehicle_brand}</Text>
                    <Text style={styles.about}>Vehicle Type : {this.state.userSelected.vehicle_type}</Text>
                    <Text style={styles.about}>Meter Reading : {this.state.userSelected.meter_reading} km</Text> */}
                    

                      <PickerCheckBox
                            data={items}
                            headerComponent={<Text style={{fontSize:25}} >Repairs</Text>}
                            OnConfirm={(pItems) => this.handleConfirm(pItems)}
                            ConfirmButtonTitle='OK'
                            DescriptionField='itemDescription'
                            KeyField='itemKey'
                            placeholder='select some items'
                            arrowColor='#FFD740'
                            arrowSize={10}
                            placeholderSelectedItems ='$count selected item(s)'
                            />

                       <Text style={styles.name}>Your repair date</Text>
 
                      <DatePicker
                              style={{width: 200}}
                              date={this.state.date}
                              mode="date"
                              placeholder="select date"
                              format="YYYY-MM-DD"
                              minDate= {this.fulldate}
                              maxDate="2076-06-01"
                              confirmBtnText="Confirm"
                              cancelBtnText="Cancel"
                              customStyles={{
                                dateIcon: {
                                  position: 'absolute',
                                  left: 0,
                                  top: 4,
                                  marginLeft: 0
                                },
                                dateInput: {
                                  marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                              }}
                              onDateChange={(date) => {this.setState({date: date})}}
                            />
                      <Text style={styles.name}>Additional note (if required)</Text>
                      <Textarea
                          containerStyle={styles.textareaContainer}
                          style={styles.textarea}
                          onChangeText={this.onChange}
                          defaultValue={this.state.text}
                          maxLength={120}
                          placeholder={'Enter additional note here...'}
                          placeholderTextColor={'#c7c7c7'}
                          underlineColorAndroid={'transparent'}
                        />
                </ScrollView>
              </View>
              <View style={styles.popupButtons}>
                {/* <TouchableOpacity onPress={() => {this.setModalVisible(false) }} style={styles.btnClose}>
                  <Text style={styles.txtClose}>Close</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.followButton} onPress={()=> {this.setModalVisible(false) }}>
                  <Text style={styles.followButtonText}>Confirm</Text>  
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>


       {/* .............modal for services............ */}
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
                    <Text style={styles.name}>Select your repair type</Text>
                    {/* <Text style={styles.name}>{this.state.userSelected.vehicle_number}</Text>
                    <Text style={styles.position}>{this.state.userSelected.vehicle_brand}</Text>
                    <Text style={styles.about}>Vehicle Type : {this.state.userSelected.vehicle_type}</Text>
                    <Text style={styles.about}>Meter Reading : {this.state.userSelected.meter_reading} km</Text> */}
                    

                      <PickerCheckBox
                            data={items}
                            headerComponent={<Text style={{fontSize:25}} >Repairs</Text>}
                            OnConfirm={(pItems) => this.handleConfirm(pItems)}
                            ConfirmButtonTitle='OK'
                            DescriptionField='itemDescription'
                            KeyField='itemKey'
                            placeholder='select some items'
                            arrowColor='#FFD740'
                            arrowSize={10}
                            placeholderSelectedItems ='$count selected item(s)'
                            />

                       <Text style={styles.name}>Your repair date</Text>
 
                      <DatePicker
                              style={{width: 200}}
                              date={this.state.date}
                              mode="date"
                              placeholder="select date"
                              format="YYYY-MM-DD"
                              minDate= {this.fulldate}
                              maxDate="2076-06-01"
                              confirmBtnText="Confirm"
                              cancelBtnText="Cancel"
                              customStyles={{
                                dateIcon: {
                                  position: 'absolute',
                                  left: 0,
                                  top: 4,
                                  marginLeft: 0
                                },
                                dateInput: {
                                  marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                              }}
                              onDateChange={(date) => {this.setState({date: date})}}
                            />
                      <Text style={styles.name}>Additional note (if required)</Text>
                      <Textarea
                          containerStyle={styles.textareaContainer}
                          style={styles.textarea}
                          onChangeText={this.onChange}
                          defaultValue={this.state.text}
                          maxLength={120}
                          placeholder={'Enter additional note here...'}
                          placeholderTextColor={'#c7c7c7'}
                          underlineColorAndroid={'transparent'}
                        />
                </ScrollView>
              </View>
              <View style={styles.popupButtons}>
                {/* <TouchableOpacity onPress={() => {this.setModalVisible(false) }} style={styles.btnClose}>
                  <Text style={styles.txtClose}>Close</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.followButton} onPress={()=> {this.setModalVisible(false) }}>
                  <Text style={styles.followButtonText}>Confirm</Text>  
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
    marginBottom:5,
    height:35,
    width:120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
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
    margin: 10,
    padding: 5,
    height:350,
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
  },
  actvityind: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: 'space-around',
     
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
}); 