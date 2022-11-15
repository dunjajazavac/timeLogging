import React, {
  Component,
  useState,
  useEffect,
  useContext,
  createContext,
} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { decode as atob, encode as btoa } from 'base-64';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

import Input from './Input';
import Card from './Card';
import Colors from '../assets/colors/colors';
import { AuthContext } from '../Context/AuthContext';
const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [token, setToken] = useState('');
  const { login } = useContext(AuthContext);
  //KeyboardAvoidingView ----> this component will automatically adjust its height, position, or bottom padding based on the keyboard height to remain visible while the virtual keyboard is displayed
  //TouchableWithoutFeedback ---> reduces the opacity when the user presses a specific touchable element
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 200}
            enabled={Platform.OS === 'ios' ? true : false}
          >
            <Image
              source={{ uri: 'https://i.imgur.com/ioBtu3H.png' }}
              style={{
                width: '70%',
                height: '35%',
                alignSelf: 'center',
                marginTop: 10,
              }}
              resizeMethod="auto"
              resizeMode="stretch"
            />
            <LinearGradient
              colors={[Colors.orange]}
              style={styles.linear}
              start={[0.6, 0.9]}
              end={[0.7, 0]}
              locations={[0, 1]}
            >
              <View style={styles.inputView}>
                <View style={styles.inputSolo}>
                  <Input
                    style={styles.input}
                    placeholder="username"
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setUsername({ username: text })}
                  />
                </View>
                <View style={styles.inputSolo}>
                  <Input
                    style={styles.input}
                    placeholder="password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword({ password: text })}
                  />
                </View>
              </View>
            </LinearGradient>
            <View style={styles.button}>
              <TouchableOpacity style={styles.buttonTouchable}>
                <Button
                  mode="outlined"
                  style={{
                    borderWidth: 2,
                   // borderColor: RedmineColors.darker,
                    height: 50,
                    alignContent: 'center',
                    justifyContent: 'center',
                  }}
                  title="LOGOUT"
                  //color={RedmineColors.lighter}
                  fontSize="55"
                  onPress={() => login(username, password)}
                >
                  LOGIN
                </Button>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const styles = StyleSheet.create({
    style: {
      flex: 1,
    },
    title: {
      fontFamily: 'opensans',
      alignSelf: 'center',
      color: 'blue',
      fontSize: 25,
      padding: 20,
    },
    inputView: {},

    inputSolo: {
      flexDirection: 'row',
      alignContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
    },

    input: {
      color: 'black',
      alignSelf: 'center',
      height: '70%',
      width: '70%',
      borderBottomColor: 'transparent',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 8,
      backgroundColor: 'white',
      marginVertical: '7%',
      marginHorizontal: '4%',
      marginBottom: 20,
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: 3,
      fontFamily: 'opensans',
    },

    button: {
      flex: 1,
      height: 100,
      width: '100%',
      alignSelf: 'center',
      padding: 30,
    },
    image: {
      flex: 1,
      alignSelf: 'center',
      width: 320,
      height: 300,
      marginRight: 10,
    },
    buttonTouchable: {
      flex: 2,
      height: 100,
      margin: 10,
      width: '80%',
      color: 'white',
      alignSelf: 'center',
      borderColor: 'black',
    },
    linear: {
      minWidth: '88%',
      width: '90%',
      height: '41%',
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: 'transparent',
      marginVertical: 1,
      paddingBottom: 15,
      borderRadius: 10,
      shadowColor: 'black',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 8,
    },
  });
export default LoginForm;