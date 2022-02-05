import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from "./navigations/navigate";

export default class App extends React.Component {
  render() {
    return ( 
      <View style={{backgroundColor:'pink', flex:1}}>
        <Text style={{marginTop:50}}>Home Screen</Text>
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
      </View> 
    
    );
  } 
}
