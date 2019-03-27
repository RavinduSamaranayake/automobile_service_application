import { Platform } from 'react-native';
const API = Platform.OS === 'android'
  ? 'http://10.0.3.2:3000/api' // works for Genymotion
  : 'http://localhost:3000/api';



export const fetchItems = () =>
     fetch(`${API}/items`)
      .then(res => res.json())