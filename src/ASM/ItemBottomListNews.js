import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EditProfile from './EditProfile';
import Home from './Home';
import Explore from './Explore';
import ListNews from './ListNews';
import Bookmark from './Bookmark';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const ItemBottomListNews = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }} >
                <Tab.Screen name="Home" component={Home} options={{ title: "Home" }} />
                <Tab.Screen name="Explore" component={Explore} options={{ title: "Explore" }} />
                <Tab.Screen name="Bookmark" component={Bookmark} options={{ title: "Bookmark" }} />
                <Tab.Screen name="Profile" component={EditProfile} options={{ title: "Profile" }} />
            </Tab.Navigator>
        </NavigationContainer>
       

    )
}

export default ItemBottomListNews

const styles = StyleSheet.create({})