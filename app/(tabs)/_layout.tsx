import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from '@react-navigation/material-top-tabs';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { withLayoutContext } from 'expo-router';

const {Navigator} = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function Layout() {
  return (
    <MaterialTopTabs screenOptions={{
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: '#9AA6B2',
      tabBarIndicatorStyle: {
        backgroundColor: '#000',
        width: '25%',
        height: 2,
        marginLeft: '12.5%',
      },
      tabBarLabelStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'capitalize',
      },

    }}>
      <MaterialTopTabs.Screen name="index" options={{title: 'Brends'}} />
      <MaterialTopTabs.Screen name="news" options={{title: 'News'}} />
    </MaterialTopTabs>
  );
}
