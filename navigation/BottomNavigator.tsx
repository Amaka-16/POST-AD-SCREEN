import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import PostAdScreen from '../app/screens/PostAdScreen';


const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Post" 
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = 'help-circle-outline' as any;

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Messages') iconName = 'chatbubble-outline';
          else if (route.name === 'Post') iconName = 'add-circle';
          else if (route.name === 'Wallet') iconName = 'wallet-outline';
          else if (route.name === 'Settings') iconName = 'settings-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Post" component={PostAdScreen} />
    </Tab.Navigator>
  );
}
