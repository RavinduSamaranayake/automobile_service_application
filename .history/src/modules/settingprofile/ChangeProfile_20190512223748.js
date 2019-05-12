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
} from 'react-native-clean-form';

 

//import { fonts, colors } from '../../styles';
 

export default class ChangeProfile extends React.Component {
  
   
 
 
 
  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <Form>
        <FieldsContainer>
          <Fieldset label="Contact details">
            <Input name="first_name" label="First name" placeholder="John" />
            <Input name="last_name" label="Last name" placeholder="Doe" />
            <Input name="email" label="Email" placeholder="something@domain.com" keyboardType="email-address" returnKeyType="next" blurOnSubmit={false} />
            <Input name="telephone" label="Phone" placeholder="+45 88 88 88 88" dataDetectorTypes="phoneNumber" keyboardType="phone-pad" />
            <Input name="message" label="Message" placeholder="" multiline={true} numberOfLines={5}  inlineLabel={false} />
          </Fieldset>
          <Fieldset label="Shipping details" last>
            <Input name="address" label="Address" placeholder="Hejrevej 33" />
            <Input name="city" label="City" placeholder="Copenhagen" />
            <Input name="zip" label="ZIP Code" placeholder="2400" />
            <Select
              name="country"
              label="Country"
              options={countryOptions}
              placeholder="Denmark"
            />
            <Switch label="Save my details" border={false} name="save_details" />
          </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
          <Button icon="md-checkmark" iconPlacement="right" onPress={handleSubmit(onSubmit)} submitting={submitting}>Save</Button>
        </ActionsContainer>
      </Form>
    )
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


