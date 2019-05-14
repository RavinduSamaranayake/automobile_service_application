// import { connect } from 'react-redux';
// import { compose } from 'recompose';

// import { loadItems } from './CalendarState';

// import CalendarScreen from './CalendarView';

// export default compose(
//   connect(
//     state => ({
//       items: state.calendar.items,
//     }),
//     dispatch => ({
//       loadItems: items => dispatch(loadItems(items)),
//     }),
//   ),
// )(CalendarScreen);


import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  
} from 'react-native';

import { fonts, colors } from '../../styles';
 

class CalendarViewContainer extends React.Component {

   
 
 
render(){
  return (
   <ImageBackground 
       source={require('../../../assets/images/background.png')}
       style={styles.container}
    > 
    <View style={styles.textContainer}>
        <Text style={styles.availableText}>Service N</Text>
         
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

export default CalendarViewContainer

