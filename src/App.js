// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './utils/AuthContext'; // app에서 navigation을 AuthProvider로 감싸야 함
import MyportfolioScreen from './screens/MyportfolioScreen';
import LoginScreen from './screens/LoginScreen';
import ActivityScreen from './screens/ActivityScreen';
import ActListScreen from './screens/ActListScreen';
import RegisterScreen from './screens/RegisterScreen';
import EmailScreen from './screens/EmailScreen';
import SchoolActListScreen from './screens/SchoolActListScreen';
import SchoolActivityScreen from './screens/SchoolActivityScreen';
import MainScreen from './screens/MainScreen';
import PortfolioListScreen from './screens/PortfolioListScreen';
import viewNoticeLike from './screens/viewNoticeLike';
import ChatScreen from './screens/ChatScreen';
import CreatePortfolioScreen from './screens/CreatePortfolioScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    // for app test
    <AuthProvider> 
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* 포트폴리오 리스트 */}
        <Stack.Screen
          name="PortfolioList"
          component={PortfolioListScreen}
          options={{ headerShown: false }}
        /> 
        </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
  );
}