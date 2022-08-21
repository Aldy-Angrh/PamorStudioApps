import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import IntialScreen from "../screens/IntialScreen";
import DetailScreen from '../screens/DetailScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function TabRoutes() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={DashboardScreen} options={{headerShown:false}} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />


        </Tab.Navigator>
    )
}
const Router = ()=>{
    return(

        <Stack.Navigator initialRouteName="initial">
        <Stack.Screen name="inital" component={IntialScreen} options={{headerShown: false}} />
        <Stack.Screen name="Dashboard" component={TabRoutes} options={{headerShown: false}} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
        )
}
export default Router;