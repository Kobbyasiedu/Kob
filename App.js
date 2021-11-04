import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screen/Homepage';
import Login from './Screen/Login';
import Cart from './Screen/cart';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Homepage"

        screenOptions={ 
          ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Homepage') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Login') {
              iconName = focused ? 'user' : 'user';
            } if (route.name === 'Cart') {
              iconName = focused
                ? 'shopping-cart'
                : 'shopping-cart';
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Homepage" component={Home} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Cart" component={Cart} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}