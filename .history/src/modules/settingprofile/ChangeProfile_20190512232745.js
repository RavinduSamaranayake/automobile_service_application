// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
  
// } from 'react-native';

// import {
//   ActionsContainer,
//   Button,
//   FieldsContainer,
//   Fieldset,
//   Form,
//   FormGroup,
//   Input,
//   Label,
//   Switch,
// } from 'react-native-clean-form';

 

// //import { fonts, colors } from '../../styles';
 

// export default class ChangeProfile extends React.Component {
  
//    changeProfile = () =>{
//         console.log("changed profile");
//    }
 
 
 
//   render() {
//     const { handleSubmit, submitting } = this.props

//     return (
//       <Form>
//         <FieldsContainer>
//           <Fieldset label="Contact details">
//             <Input name="first_name" label="First name" placeholder="John" />
//             <Input name="last_name" label="Last name" placeholder="Doe" />
//             <Input name="email" label="Email" placeholder="something@domain.com" keyboardType="email-address" returnKeyType="next" blurOnSubmit={false} />
//             <Input name="telephone" label="Phone" placeholder="+45 88 88 88 88" dataDetectorTypes="phoneNumber" keyboardType="phone-pad" />
//             <Input name="message" label="Message" placeholder="" multiline={true} numberOfLines={5}  inlineLabel={false} />
//           </Fieldset>
//           <Fieldset label="Shipping details" last>
//             <Input name="address" label="Address" placeholder="Hejrevej 33" />
//             <Input name="city" label="City" placeholder="Copenhagen" />
//             <Input name="zip" label="ZIP Code" placeholder="2400" />
//             {/* <Select
//               name="country"
//               label="Country"
//               options={countryOptions}
//               placeholder="Denmark"
//             /> */}
//             <Switch label="Save my details" border={false} name="save_details" />
//           </Fieldset>
//         </FieldsContainer>
//         <ActionsContainer>
//           <Button icon="md-checkmark" iconPlacement="right" onPress={this.changeProfile} submitting={submitting}>Save</Button>
//         </ActionsContainer>
//       </Form>
//     )
//   }
// }
   


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     paddingHorizontal: 30,
// //     paddingVertical: 50,
// //     justifyContent: 'space-around',
     
// //   },
   
// //   availableText: {
// //     color: colors.white,
// //     fontFamily: fonts.primaryRegular,
// //     fontSize: 40,
// //     marginVertical: 3,
// //   },
// //   textContainer: {
// //     alignItems: 'center',
// //   },
  
// // });



// import React, {Component}  from 'react';
// import {View, Text, TextInput, TouchableHighlight} from 'react-native';
// import ValidationComponent from 'react-native-form-validator';

// export default class ChangeProfile extends ValidationComponent {

//   constructor(props) {
//     super(props);
//     this.state = {name : "My name", email: "tibtib@gmail.com", number:"56", date: "2017-03-01"};
//   }

//   _onPressButton() {
//     // Call ValidationComponent validate method
//     this.validate({
//       name: {minlength:3, maxlength:7, required: true},
//       email: {email: true},
//       number: {numbers: true},
//       date: {date: 'YYYY-MM-DD'}
//     });
//   }

//   render() {
//       return (
//         <View>
//           <TextInput ref="name" onChangeText={(name) => this.setState({name})} value={this.state.name} />
//           <TextInput ref="email" onChangeText={(email) => this.setState({email})} value={this.state.email} />
//           <TextInput ref="number" onChangeText={(number) => this.setState({number})} value={this.state.number} />
//           <TextInput ref="date" onChangeText={(date) => this.setState({date})} value={this.state.date} />
//           {this.isFieldInError('date') && this.getErrorsInField('date').map(errorMessage => <Text>{errorMessage}</Text>) }

//           <TouchableHighlight onPress={this._onPressButton}>
//             <Text>Submit</Text>
//           </TouchableHighlight>

//           <Text>
//             {this.getErrorMessages()}
//           </Text>
//         </View>
//       );
//   }

// }


import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DocForm from 'react-cross-form';
// or any pure javascript modules available in npm
import { Card, Button } from 'react-native-elements'; // Version can be specified in package.json
import TextInput from './TextInput';
import CheckBox from './CheckBox';

const FORM_FIELDS = [
  {
    key: 'firstName',
    label: 'First Name',
    required: true,
    component: TextInput,
    placeholder: 'Type your first name...',
    validators: {
      presence: { message: 'is required' },
      length: { minimum: 3 },
    },
  },
  {
    key: 'lastName',
    label: 'Last Name',
    required: true,
    component: TextInput,
    placeholder: 'Type your last name...',
    validators: {
      presence: { message: 'is required' },
      length: { minimum: 3 },
    },
  },
  {
    key: 'email',
    label: 'Email',
    component: TextInput,
    placeholder: 'Type your name...',
    validators: { email: true },
  },
  {
    key: 'confirm',
    label: 'Confirm term',
    component: CheckBox,
    validators: { presence: { message: 'please confirm terms' } },
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstName: null,
        lastName: null,
        email: null,
        confirm: null,
      },
      isFormValid: false,
      validateType: 'onFocus',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a example of react-cross-form</Text>
        <Card>
          <DocForm
            fields={FORM_FIELDS}
            data={this.state.form}
            onChange={({ key, updateData }) => {
              this.setState({ form: updateData });
              if (key === 'lastName') {
                this.setState({ validateType: 'all' });
              }
            }}
            validateType={this.state.validateType}
            onValidateStateChanged={({ isValid }) => {
              this.setState({ isFormValid: isValid });
            }}
          />
          <Button
            disabled={!this.state.isFormValid}
            title={'Submit'}
            onPress={() => alert(JSON.stringify(this.state.form))}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  }
});
