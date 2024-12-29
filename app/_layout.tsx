import '../global.css';

import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

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
      headerTitle: () => (
        // اضيفي اللوقو الخاص بالموقع
        <Ionicons name="logo-twitter" size={24} color="black" />
      ),
    }} />
      {/* <Stack.Screen name='index' options={{ headerShown: false, animation: 'fade',animationDuration: 200 }} /> */}
      {/* <Stack.Screen name='news' options={{ headerShown: false,  animation: 'fade', animationDuration: 200 }} /> */}
  </Stack>
}
