import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useRoute } from '@react-navigation/native';
import { useAppContext } from '../Context';
import { Easing } from 'react-native-reanimated';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { value } = useAppContext();

  console.log(value)
  // Access the parameter value
  // const paramValue = route.params?.paramKey;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        tabBarStyle: { display: value === 'show' ? 'flex' : 'none' },
        tabBarHideOnKeyboard: true,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
          headerLeft: () => (
            <Ionicons name="menu" size={24} color={Colors[colorScheme ?? 'light'].text} />
          ),
          headerRight: () => (
            <Ionicons name="settings" size={24} color={Colors[colorScheme ?? 'light'].text} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
