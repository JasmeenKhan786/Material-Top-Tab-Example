import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import Profile from "../screens/Profile";
import Aboutus from "../screens/Aboutus";
import Home from "../screens/Home";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
 
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ 
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: 'powderblue'},  
    }}> 
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Aboutus" component={Aboutus} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default MyTabs;
