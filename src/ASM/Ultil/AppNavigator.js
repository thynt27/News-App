import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import Login from '../Login'
import Signup from '../Signup'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListNews from '../ListNews';
import Profile from '../Profile';
import NewsDetail from '../NewsDetail';
import UpdateProfile from '../UpdateProfile'
import { AppContext } from './AppContext';
import { NavigationContainer } from '@react-navigation/native';
import PostNews from '../PostNews';
import Test from '../Test';
import ProductsGridView from './ProductsGridView';
import ProductsDetails from '../ProductsDetails';

//Quản lý login, register sử dụng stack
const Stack = createNativeStackNavigator();
const Users = () => {
    return (

        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
             <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="ProductsGridView" component={ProductsGridView} /> */}
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ListNews" component={ListNews} />
            <Stack.Screen name="News" component={News} />
            <Stack.Screen name="PostNews" component={PostNews} />
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} />


        </Stack.Navigator>

    )
}

const News = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="ProductsGridView" component={ProductsGridView}/>
            <Stack.Screen name="ProductsDetails" component={ProductsDetails}/>
        </Stack.Navigator>
    )
}


//Quản lý listnews, profile, news manager sử dụng tab
const Tab = createBottomTabNavigator();
const Main = () => {
    return (

        <Tab.Navigator screenOptions={{ tabBarLabelStyle: { fontSize: 12.5 }, headerShown: false }}>
            <Tab.Screen name="News" component={News}
                options={{
                    title: "Home",
                    tabBarIcon: () => (<Image source={require('../img/Home.png')} style={styles.image} />)
                }} />
            <Tab.Screen name="PostNews" component={PostNews}
                options={{
                    title: "PostNews ",
                    tabBarIcon: () => (<Image source={require('../img/plus.png')} style={styles.image} />)
                }}
            />
            <Tab.Screen name="UpdateProfile" component={UpdateProfile}
                options={{
                    title: "UpdateProfile ",
                    tabBarIcon: () => (<Image source={require('../img/Profile.png')} style={styles.image} />)
                }} />


        </Tab.Navigator>

    )
}

const AppNavigator = () => {
    const { isLogin } = useContext(AppContext);
    return (
        <>
            {
                //Nếu chưa login thì hiển thị User còn không thì hiển thị Main
                isLogin == false ? <Users /> : <Main />

            }
        </>
    )
}

export default AppNavigator

const styles = StyleSheet.create({
    image: {
        width: 25,
        height: 25
    },
    text: {
        fontSize: 20
    }
});