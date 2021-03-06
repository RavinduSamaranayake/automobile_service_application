

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
import TimePicker from "react-native-24h-timepicker";
// set the labels and values for the check box

const repair_items = [
  { value: 'Engine Repair', label: 'Engine Repair' },
  { value: 'Brake Systems Repair', label: 'Brake Systems Repair' },
  { value: 'Transmission Repair', label: 'Transmission Repair' },
  { value: 'Suspension and Steering Repair', label: 'Suspension and Steering Repair' },
  { value: 'Accident Repair', label: 'Accident Repair'},
  { value: 'Vehicle Tinkering', label: 'Vehicle Tinkering'},
  { value: 'Body Painting', label: 'Body Painting'}

];

const service_items = [  
  { value: 'Full Vehicle Service', label: 'Full Vehicle Service' },
  { value: 'Oil Change', label: 'Oil Change' },
  { value: 'Engine Checkup', label: 'Engine Checkup' },
  { value: 'System Scanning', label: 'System Scanning' },
  { value: 'Quick Body Wash', label: 'Quick Body Wash'},
  { value: 'Body Wax', label: 'Interior Cleanup'},
  { value: 'Interior Cleanup', label: 'Interior Cleanup'} 
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
      repairModalVisible:false,
      serviceModalVisible:false,
      userSelected: [],
      vehicle: '',
      vehicle_number: '',
      repair_type:[],
      service_type:[],
      repair_date:this.fulldate, 
      service_date:this.fulldate, 
      arrival_time:'',
      repair_additional_notes:'',
      service_additional_notes:'',
      serve_msg: '',
      description: ''
    };
  }


 //for get the select values of check boxes

  handleRepairConfirm(pItems){
    console.log('pItems =>', pItems);
    this.setState({
      repair_type: pItems
    })

  }
 
  
 //for get the select values of check boxes

  handleServiceConfirm(pItems){
    console.log('pItems =>', pItems);
    this.setState({
      service_type: pItems
    })

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


  
// when click the repair button visible the repair modal and get the vehicle id
  setRepairModalVisible(item , visible) {
    this.setState({userSelected: item,
                   vehicle: item,
                   vehicle_number: item.vehicle_number,
                   repairModalVisible: visible
                  });
  }

   // when click the service button visible the repair modal and get the vehicle id
  setServiceModalVisible(item , visible) {
    this.setState({userSelected: item,
                   vehicle: item,
                   vehicle_number: item.vehicle_number,
                   serviceModalVisible: visible
                  });
  } 
  
   // handle the service modal visibility
   serviceModalVisible(visible) {
    this.setState({serviceModalVisible: visible
                  });
  } 

  // handle the repair modal visibility
  repairModalVisible(visible) {
    this.setState({repairModalVisible: visible
                  });
  } 

  //close time picker
  onCancel() {
    this.TimePicker.close();
  }
 
  //set the time
  onConfirm(hour, minute) {
    this.setState({ arrival_time: `${hour}:${minute}` });
    this.TimePicker.close();
  }

 // confirm the serviceBooking

 confirmService(){

  const Service = {
    vehicle:this.state.vehicle,
    vehicle_number:this.state.vehicle_number,
    service_type:this.state.service_type,
    date:this.state.service_date,
    arrival_time:this.state.arrival_time,
    additional_notes:this.state.service_additional_notes
  }

  axios.post('api/appointments/book-service',Service)
      .then(res=>{
        this.setState({
          vehicle:'',
          vehicle_number:'',
          service_type:[],
          service_date:'',
          service_additional_notes:'',
          serve_msg:res.data.msg,
          description:'You have been recieve a new service request '
        })
      })
      const RequestNotification = {
        description:this.state.description,
        date_time:this.state.service_date + ' ' 
      }
      axios.post('api/appointments/send-request-notifications',RequestNotification)
          .then(res=>{
            this.setState({
              description:'',
              date_time:''
            })
          })
          .catch(err=>{
            console.log(err);
          })
      .catch(res=>{
        this.setState({
          visible:true,
          serve_err:res.response.data.err
        })
      })

      this.setState({    
        serve_msg:'',
        serve_err:''
    });


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
          <TouchableOpacity style={styles.card} onPress={() => {}}>
             <Image style={styles.image} source={require('./mylogo.png')}/>
         {/* <Image style={styles.image} source={{uri: item.image}}/> */}
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.vehicle_number}</Text>
                <Text style={styles.position}>{item.vehicle_type}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.setRepairModalVisible(item,true)}>
                  <Text style={styles.followButtonText}>Repair</Text>  
                </TouchableOpacity>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.setServiceModalVisible(item,true)}>
                  <Text style={styles.followButtonText}>Service</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>
        

        
       {/* .............modal for repair............ */}

        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this.repairModalVisible(false)}
          visible={this.state.repairModalVisible}>

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
                            data={repair_items}
                            headerComponent={<Text style={{fontSize:25}} >Repairs</Text>}
                            OnConfirm={(pItems) => this.handleRepairConfirm(pItems)}
                            ConfirmButtonTitle='OK'
                            DescriptionField='label'
                            KeyField='value'
                            placeholder='select some items'
                            arrowColor='#FFD740'
                            arrowSize={10}
                            placeholderSelectedItems ='$count selected item(s)'
                            />

                       <Text style={styles.name}>Your repair date</Text>
 
                      <DatePicker
                              style={{width: 200}}
                              date={this.state.repair_date}
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
                              onDateChange={(date) => {this.setState({repair_date: date})}}
                            />
                      <Text style={styles.name}>Additional note (if required)</Text>
                      <Textarea
                          containerStyle={styles.textareaContainer}
                          style={styles.textarea}
                          onChangeText={(text) => {
                            this.setState({ repair_additional_notes: text });
                          }}
                          defaultValue={this.state.repair_additional_notes}
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
                <TouchableOpacity style={styles.followButton} onPress={()=> {this.repairModalVisible(false) }}>
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
          onRequestClose={() => this.serviceModalVisible(false)}
          visible={this.state.serviceModalVisible}>

          <View style={styles.popupOverlay}>
            <View style={styles.popup}>
              <View style={styles.popupContent}>
                <ScrollView contentContainerStyle={styles.modalInfo}>
                    {/* <Image style={styles.image} source={{uri: this.state.userSelected.image}}/> */}
                    <Text style={styles.name}>Select your service type</Text>
                    {/* <Text style={styles.name}>{this.state.userSelected.vehicle_number}</Text>
                    <Text style={styles.position}>{this.state.userSelected.vehicle_brand}</Text>
                    <Text style={styles.about}>Vehicle Type : {this.state.userSelected.vehicle_type}</Text>
                    <Text style={styles.about}>Meter Reading : {this.state.userSelected.meter_reading} km</Text> */}
                    

                      <PickerCheckBox
                            data={service_items}
                            headerComponent={<Text style={{fontSize:25}} >Services</Text>}
                            OnConfirm={(pItems) => this.handleServiceConfirm(pItems)}
                            ConfirmButtonTitle='OK'
                            DescriptionField='label'
                            KeyField='value'
                            placeholder='select some items'
                            arrowColor='#FFD740'
                            arrowSize={10}
                            placeholderSelectedItems ='$count selected item(s)'
                            />

                       <Text style={styles.name}>Your service date</Text>
 
                      <DatePicker
                              style={{width: 200}}
                              date={this.state.service_date}
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
                              onDateChange={(date) => {this.setState({service_date: date})}}
                            />



                      
                      <Text style={styles.name} onPress={() => this.TimePicker.open()}>Set the time(Click here)</Text>
                      
                          <Text style={styles.text}>{this.state.arrival_time}</Text>
                          <TimePicker
                            ref={ref => {
                              this.TimePicker = ref;
                            }}
                            onCancel={() => this.onCancel()}
                            onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
                          />


                      <Text style={styles.name}>Additional note (if required)</Text>
                      <Textarea
                          containerStyle={styles.textareaContainer}
                          style={styles.textarea}
                          onChangeText={(text) => {
                            this.setState({ service_additional_notes: text });
                          }}
                          defaultValue={this.state.service_additional_notes}
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
                <TouchableOpacity style={styles.followButton} onPress={()=> {this.serviceModalVisible(false) }}>
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
    width:130,
    height:130,
    marginTop:20,
    marginBottom:20,
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
  text: {
    fontSize: 20,
    marginTop: 10
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600"
  }
}); 