import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MainScreen from '../screens/MainScreen';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Clrs from "../constants/Colors";
import { Text, View } from 'react-native';
import { AntDesign, Feather, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeBackgroundColor: Clrs.DGreen,
        inactiveBackgroundColor: Clrs.DGreen,
        tabStyle: {
          paddingTop: 10,
          // marginTop:10,
        },
        style: {
          // borderTopWidth: 0,
          height: 100

        }
      }}
    >
      <BottomTab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarLabel: ({ focused }) => { return <Text style={{ fontFamily: "Cairo_400Regular", color: focused ? Clrs.BGreen : Clrs.tabIconDefault, paddingTop: 5, paddingBottom: 2 }}>المحول</Text> },
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="sync" />,
        }}
      />
      <BottomTab.Screen
        name="Sc2"
        component={Screen2}
        options={{
          tabBarLabel: ({ focused }) => { return <Text style={{ fontFamily: "Cairo_400Regular", color: focused ? Clrs.BGreen : Clrs.tabIconDefault, paddingTop: 5, paddingBottom: 2 }}>قائمة الاسعار</Text> },
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="bars" />,
        }}
      />
      <BottomTab.Screen
        name="Sc3"
        component={Screen3}
        options={{
          tabBarLabel: ({ focused }) => { return <Text style={{ fontFamily: "Cairo_400Regular", color: focused ? Clrs.BGreen : Clrs.tabIconDefault, paddingTop: 5, paddingBottom: 2 }}>اسعار الذهب</Text> },
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons
            name="gold"
            size={24}
            style={{ paddingTop: 5, paddingBottom: 2 }}
            color={focused ? Clrs.BGreen : Clrs.tabIconDefault}
          />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home Page';
    case 'Sc2':
      return 'Page 2';
    case 'Sc3':
      return 'Page 3';
  }
}
