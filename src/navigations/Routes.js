import React from 'react'
import { Image, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import IntialScreen from "../screens/IntialScreen";
import DetailScreen from '../screens/DetailScreen';
import ExploreScreen from '../screens/ExploreScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function TabRoutes() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={DashboardScreen} options={{headerShown:false, tabBarIcon:({focused})=>(
                  <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                  <Image source={require('../assets/icons/home.png')}
                  resizeMode='contain'
                  style={{width:30, height:30, tintColor: focused? '#000000': "#BBB"}}
                  />
                </View>
            )

            }} />
            <Tab.Screen name="Explore" component={ExploreScreen} options={{headerShown:false, tabBarIcon:({focused})=>(
                 <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                 <Image source={require('../assets/icons/explore.png')}
                 resizeMode='contain'
                 style={{width:30, height:30, tintColor: focused? '#000000': "#BBB"}}
                 />
               </View>
            )}}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false, tabBarIcon:({focused})=>(
                 <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                 <Image source={require('../assets/icons/profil.png')}
                 resizeMode='contain'
                 style={{width:30, height:30, tintColor: focused? '#000000': "#BBB"}}
                 />
               </View>
            )}}/>


        </Tab.Navigator>
    )
}
const Router = ()=>{
    return(

        <Stack.Navigator initialRouteName="initial">
        <Stack.Screen name="inital" component={IntialScreen} options={{headerShown: false}} />
        <Stack.Screen name="Dashboard" component={TabRoutes} options={{headerShown: false}} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Regist" component={RegistrationScreen} options={{headerShown:false}}/>

    </Stack.Navigator>
        )
}
export default Router;