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
   <ImageBackground 
       source={require('../../../assets/images/background.png')}
       style={styles.container}
    > 
    <View style={styles.textContainer}>
        <Text style={styles.availableText}>Change Profile</Text>
         
      </View>
      
    </ImageBackground>
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
     
  },
   
  availableText: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 40,
    marginVertical: 3,
  },
  textContainer: {
    alignItems: 'center',
  },
  
});


