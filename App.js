import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from './src/contexts/AuthContext';

import * as SecureStorage from 'expo-secure-store';

import { Routes } from './src/pages/routes'

export default function App() {

  const keyIsLoggedIn = 'loggedin';
  const [ isLoggedIn, setIsLoggedInLocal ] = useState('n');

  function setIsLoggedIn(value){
    const newValue = value;
    setIsLoggedInLocal(newValue);
  }

  useEffect(() => {
    async function load() {
      try {
        const getLoggedIn = await SecureStorage.getItemAsync(keyIsLoggedIn);
        if (getLoggedIn) {
          setIsFirstAccessLocal(getLoggedIn);
        }
      } catch (error) {
        console.error('Error loading isLoggedIn', error);
      }
    }

    load();
  }, []);

  useEffect(() => {
    SecureStorage.setItemAsync(keyIsLoggedIn, isLoggedIn)
      .catch(error => {
        console.error('Error saving isLoggedIn', error);
      });
  }, [isLoggedIn]);



  const keyIsFirstAccess = 'firstacess';
  const [ isFirstAccess, setIsFirstAccessLocal ] = useState('y');

  function setIsFirstAccess(value){
    const newValue = value;
    setIsFirstAccessLocal(newValue);
  }

  useEffect(() => {
    async function load() {
      try {
        const getFirstAccess = await SecureStorage.getItemAsync(keyIsFirstAccess);
        if (getFirstAccess) {
          setIsFirstAccessLocal(getFirstAccess);
        }
      } catch (error) {
        console.error('Error loading firstaccess', error);
      }
    }

    load();
  }, []);

  useEffect(() => {
    SecureStorage.setItemAsync(keyIsFirstAccess, isFirstAccess)
      .catch(error => {
        console.error('Error saving isFirstAccess', error);
      });
  }, [isFirstAccess]);

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, isFirstAccess, setIsFirstAccess}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}