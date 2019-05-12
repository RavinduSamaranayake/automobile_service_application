import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  
} from 'react-native';

import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
  FormGroup,
  Input,
  Label,
  Switch
} from 'react-native-clean-form'


import { fonts, colors } from '../../styles';
 

export default class ChangeProfile extends React.Component {

   
 
 
render(){
  return (
  //  <ImageBackground 
  //      source={require('../../../assets/images/background.png')}
  //      style={styles.container}
  //   > 
  //   <View style={styles.textContainer}>
  //       <Text style={styles.availableText}>Change Profile</Text>
         
  //     </View>
      
  //   </ImageBackground>

  <Form>
  <FieldsContainer>
    <Fieldset label="Contact details">
      <FormGroup>
        <Label>First name</Label>
        <Input placeholder="Esben" onChangeText={this.onFirstNameChange} />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input placeholder="esbenspetersen@gmail.com" onChangeText={this.onEmailChange} />
      </FormGroup>
    </Fieldset>
    <Fieldset label="Password" last>
      <FormGroup>
        <Label>Password</Label>
        <Input placeholder="Enter a password" onChangeText={this.onPasswordChange} />
      </FormGroup>
      <FormGroup>
        <Label>Repeat password</Label>
        <Input placeholder="Repeat your password" onChangeText={this.onRepeatPasswordChange} />
      </FormGroup>
      <FormGroup border={false}>
        <Label>Save my password</Label>
        <Switch onValueChange={this.toggleSaveMyPassword} />
      </FormGroup>     
    </Fieldset>
  </FieldsContainer>
  <ActionsContainer>
    <Button icon="md-checkmark" iconPlacement="right" onPress={this.save}>Save</Button>
  </ActionsContainer>
</Form>
  );
}

}


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


