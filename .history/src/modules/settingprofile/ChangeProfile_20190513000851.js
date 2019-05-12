 
import React, {Component}  from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import { Input } from 'react-native-elements';
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
          <Input ref="name" onChangeText={(name) => this.setState({name})} value={this.state.name} />
          <Input ref="email" onChangeText={(email) => this.setState({email})} value={this.state.email} />
          <Input ref="number" onChangeText={(number) => this.setState({number})} value={this.state.number} />
          <Iput ref="date" onChangeText={(date) => this.setState({date})} value={this.state.date} />
          {this.isFieldInError('date') && this.getErrorsInField('date').map(errorMessage => <Text>{errorMessage}</Text>) }

          <TouchableHighlight onPress={this._onPressButton}>
            <Text>Submit</Text>
          </TouchableHighlight>

          <Text>
            {this.getErrorMessages()}
          </Text>
        </View>
      );
  }

}

 
 
