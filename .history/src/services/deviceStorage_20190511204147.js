
import { AsyncStorage } from 'react-native';

const deviceStorage = {
    async saveItem(to) {
        try {
          await AsyncStorage.setItem(key, value);
         
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },
      async deleteJWT() {
        try{
          await AsyncStorage.removeItem('id_token');
          console.log('....................log out success...............');
            }catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
    }
      
    
      
};

export default deviceStorage;