
import { AsyncStorage } from 'react-native';

const deviceStorage = {
    async saveItem(token , user) {
        try {
          await AsyncStorage.setItem('id_token', token);
          await AsyncStorage.setItem('user',  JSON.stringify(user)); // // local storage can store only styings. can't store json objects
         
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },
      async deleteJWT() {
        try{
          await AsyncStorage.clear();
          console.log('....................log out success...............');
            }catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
    }
      
    
      
};

export default deviceStorage;