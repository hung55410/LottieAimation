import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch(e) {
      console.log("ERROR SET")
    }
    console.log('Done.')
}

export const getItem = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value
    } catch(e) {
      console.log("ERROR GET")
    }
}

export const removeItem = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      console.log('ERROR REMOVE')
    }
    console.log('Done.')
  }