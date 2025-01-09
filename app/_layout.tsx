import '../global.css';

import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

export default function Layout() {
  return <Stack screenOptions={{headerShadowVisible: false}}>
    <Stack.Screen name='(tabs)' options={{
      headerLeft: () =>( 
      // اضيفي الافتار الخاص بالمستخدم بدل الايقونه
      <Ionicons name="person-outline" size={24} color="black" />),
      headerRight: () => (
        // اضيفي العنوان الخاص بالصفحه
        <Ionicons name="diamond-outline" size={24} color="black" />
      ),
      headerTitle: 'TINIKARU',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'Gugi',
      },
    }} />
  </Stack>
}
