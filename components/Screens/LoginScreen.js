import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../CustomInput/CustomInput';

export default function LoginScreen({ navigation, route }) {
  const [username, setUserName] = useState('Robotics');
  const [password, setPassWord] = useState('robotics');

  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  // store userdata
  (async () => {
    try {
      var user = {
        Username: 'Robotics',
        Password: 'robotics',
      };
      await AsyncStorage.setItem('UserData', JSON.stringify(user));
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  })
  useEffect(() => {
    getData();
  }, []);

  const checkLoginInfo = () => {
    try {
      AsyncStorage.getItem('UserData').then(value => {
        if (value != null) {
          const Info = JSON.parse(value);
          if (Info.Username !== username) {
            console.warn("username is wrong!")
          } else if (Info.Password !== password) {
            console.warn("password is wrong!")
          } else {
            navigation.navigate('HomeScreen');
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (username.length == 0 || password.length == 0) {
      Alert.alert('Warning!', 'Please write your data.');
    } else {
      try {
        var user = {
          Username: 'Robotics',
          Password: 'robotics',
        };
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
    <View style={styles.root}>
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        source={require('../../assets/PNKXLogo.png')}
      />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUserName}
        secureTextEntry={false} />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassWord}
        secureTextEntry />
      <Button title="Login" color="#1eb900" onPress={checkLoginInfo} />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    //backgroundColor: '#0080ff',
  },
});
