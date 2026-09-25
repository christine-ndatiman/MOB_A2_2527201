import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ProfileProvider } from './src/context/ProfileContext';
import HomeScreen from './src/screens/HomeScreen';
import SkillsScreen from './src/screens/SkillsScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import ProjectDetailScreen from './src/screens/ProjectDetailScreen';
import EditorScreen from './src/screens/EditorScreen';
import AboutScreen from './src/screens/AboutScreen';
import { Project, RootStackParamList, TabParamList } from './src/types';

const Tabs = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function MainTabs() {
  return (
    <Tabs.Navigator screenOptions={{
      headerTitleStyle: { fontWeight: '700' },
      tabBarActiveTintColor: '#315C4B',
      tabBarLabelStyle: { fontSize: 12, fontWeight: '600' }
    }}>
      <Tabs.Screen name="Home" component={HomeScreen} options={{ title: 'Home', tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} /> }} />
      <Tabs.Screen name="Skills" component={SkillsScreen} options={{ title: 'Skills', tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'construct' : 'construct-outline'} size={size} color={color} /> }} />
      <Tabs.Screen name="Projects" component={ProjectsScreen} options={{ title: 'Projects', tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'folder-open' : 'folder-open-outline'} size={size} color={color} /> }} />
      <Tabs.Screen name="EditProfile" component={EditorScreen} options={{ title: 'Edit profile', tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'create' : 'create-outline'} size={size} color={color} /> }} />
      <Tabs.Screen name="About" component={AboutScreen} options={{ title: 'About', tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} size={size} color={color} /> }} />
    </Tabs.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts(Ionicons.font);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ProfileProvider>
      <NavigationContainer theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: '#F6F7F4', card: '#FFFFFF', primary: '#315C4B' }
      }}>
        <StatusBar style="dark" />
        <Stack.Navigator>
          <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="ProjectDetail" component={ProjectDetailScreen} options={{ title: 'Project details' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileProvider>
  );
}
