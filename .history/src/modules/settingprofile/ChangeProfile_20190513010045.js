 
import React, {Component}  from 'react';
import {View, Text, TextInput, TouchableHighlight, StyleSheet} from 'react-native';
import ValidationComponent from 'react-native-form-validator';

export default class ChangeProfile extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {name : "My name", email: "tibtib@gmail.com", number:"56", date: "2017-03-01"};
  }

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
          <TextInput  style={styles.input}  ref="username" onChangeText={(name) => this.setState({name})} value={this.state.name} />
          <TextInput  style={styles.input}   ref="email" onChangeText={(email) => this.setState({email})} value={this.state.email} />
          <TextInput  style={styles.input}  ref="address" onChangeText={(name) => this.setState({name})} value={this.state.name} />
          <TextInput  style={styles.input}   ref="number" onChangeText={(number) => this.setState({number})} value={this.state.number} />
          <TextInput  style={styles.input}  ref="idnum" onChangeText={(date) => this.setState({date})} value={this.state.date} />
          {this.isFieldInError('date') && this.getErrorsInField('date').map(errorMessage => <Text>{errorMessage}</Text>) }

          {/* <TouchableHighlight style={styles.buttonsContainer} onPress={this._onPressButton}>
            <Text>Submit</Text>
          </TouchableHighlight> */}
           <View style={styles.buttonContainer}>
           <TouchableOpacity onPress={this.sendLocation} style={[styles.bubble2, styles.button]}>
               <Text style={{color: 'white',fontWeight: 'bold'}}>Send Location</Text>
          </TouchableOpacity>
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
  button: {
    alignSelf: 'stretch',
    marginBottom: 15,
  },
  bubble2: {
    flex: 1,
    backgroundColor: "#00008b",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  }
});

 