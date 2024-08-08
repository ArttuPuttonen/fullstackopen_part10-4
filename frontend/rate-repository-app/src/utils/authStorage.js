import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    try {
      const token = await AsyncStorage.getItem(`${this.namespace}:token`);
      return token;
    } catch (e) {
      console.log('Failed to fetch the access token from storage');
      throw e;
    }
  }

  async setAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem(`${this.namespace}:token`, accessToken);
    } catch (e) {
      console.log('Failed to save the access token to storage');
      throw e;
    }
  }

  async removeAccessToken() {
    try {
      await AsyncStorage.removeItem(`${this.namespace}:token`);
    } catch (e) {
      console.log('Failed to remove the access token from storage');
      throw e;
    }
  }
}

export default AuthStorage;
