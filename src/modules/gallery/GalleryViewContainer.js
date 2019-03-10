// import { connect } from 'react-redux';
// import { compose, lifecycle } from 'recompose';

// import GalleryScreen from './GalleryView';
// import { loadImages, refreshImages } from './GalleryState';

// export default compose(
//   connect(
//     state => ({
//       isLoading: state.gallery.isLoading,
//       images: state.gallery.images,
//     }),
//     dispatch => ({
//       loadImages: () => dispatch(loadImages()),
//       refreshImages: () => dispatch(refreshImages()),
//     }),
//   ),
//   lifecycle({
//     componentDidMount() {
//       this.props.loadImages();
//     },
//   }),
// )(GalleryScreen);

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  
} from 'react-native';

import { fonts, colors } from '../../styles';
 

class GalleryViewContainer extends React.Component {

   
 
 
render(){
  return (
   <ImageBackground 
       source={require('../../../assets/images/background.png')}
       style={styles.container}
    > 
    <View style={styles.textContainer}>
        <Text style={styles.availableText}>Asistant Service</Text>
         
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

export default GalleryViewContainer


