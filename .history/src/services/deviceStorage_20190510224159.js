
import { AsyncStorage } from 'react-native';

const deviceStorage = {
    async saveItem(key, value) {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      }
      async loadJWT() {
        try {
          const value = await AsyncStorage.getItem('id_token');
          if (value !== null) {
             
            return true;
            
          } else {
            // this.setState({
            //   loading: false
            return false;
            });
          }
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },
    
      async deleteJWT() {
        try{
          await AsyncStorage.removeItem('id_token')
          .then(
            () => {
              this.setState({
                jwt: ''
              })
            }
          );
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      }
};

export default deviceStorage;