import { Pressable, StyleSheet, Text, TextInput, View, Image, ToastAndroid  } from 'react-native'
import React, { useContext, useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { color } from 'react-native-reanimated';
import AxiosIntance from './Ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from './Ultil/AppContext';

const Login = (props) => {
    const {navigation}=props;
    const [emailUser, setemailUser] = useState("");
    const [passwordUser, setpasswordUser] = useState("");

    const {setisLogin, setinforUser} = useContext(AppContext);

    const dangNhapNe = async () => {

        try {
            const response = await AxiosIntance().post("/user/login",
                { email: emailUser, password: passwordUser });
            console.log(response);
            if (response.error == false) {
                console.log(response.data.token);
                await AsyncStorage.setItem("token", response.data.token);
                ToastAndroid.show("Login Success", ToastAndroid.SHORT);
                setinforUser(response.data.user);
                setisLogin(true);
            } else {
                ToastAndroid.show("Login Failed", ToastAndroid.SHORT);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello</Text>
            <Text style={[styles.text, { color: '#1877F2' }]}>Again!</Text>
            <Text style={styles.welcomeText}>Welcome back you’ve{'\n'}been missed</Text>
            <View style={[styles.usernameandpassword]}>
                <Text style={styles.textUsernameandPassword} >Username</Text>
                <Text style={[styles.textUsernameandPassword, { color: '#C30052' }]}>*</Text>
            </View>
            <TextInput onChangeText={setemailUser}  style={styles.textInput} />

            <View style={[styles.usernameandpassword]}>
                <Text style={styles.textUsernameandPassword} >Password</Text>
                <Text style={[styles.textUsernameandPassword, { color: '#C30052' }]}>*</Text>
            </View>
            <TextInput onChangeText={setpasswordUser} style={[styles.textInput, { marginBottom: 10 }]} />

            <View style={[styles.viewRemember, { justifyContent: 'space-between' }]}>
                <View style={styles.viewRemember}>
                    <BouncyCheckbox style={{height : 5 , marginTop: 8}} fillColor='#1877F2' />
                    <Text style={styles.remember} >Remember me</Text>
                </View>
                <Text style={styles.forgotpassword}>Forgot the password ?</Text>
            </View>

            <Pressable onPress={dangNhapNe}  style={styles.buttonLogin}>
                <Text style={styles.textLogin}>Login</Text>
            </Pressable>

            <Text style={styles.continuewith}>or continue with</Text>



            <View style={[styles.viewRemember, {justifyContent: 'space-between'}]}>
                <Pressable style={styles.buttonSocial}>
                    <Image style={styles.imgSocial} source={require('./img/IconFB.png')} />
                    <Text>Facebook</Text>
                </Pressable>

                <Pressable style={styles.buttonSocial}>
                    <Image style={styles.imgSocial} source={require('./img/IconGG.png')} />
                    <Text>Google</Text>
                </Pressable>
            </View>



            <View style={styles.donthaveacc}>
                <Text style={styles.textdonthaveacc}>don’t have an account ?</Text>
                <Text onPress={() => navigation.navigate('Signup')} style={[styles.textdonthaveacc, { color: '#1877F2' }]}> Sign Up</Text>
            </View>


        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginStart: 15,
        marginEnd: 15,
        flexDirection: 'column'
    },
    text: {
        fontFamily: 'Poppins',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#050505',
        marginTop : 10
    },

    welcomeText: {
        fontFamily: 'Poppins',
        fontSize: 20,
        marginTop: 4,
        color: '#4E4B66',
        marginBottom: 45
    },
    usernameandpassword: {
        flexDirection: 'row',

    },
    textUsernameandPassword: {
        marginTop: 14,
        fontSize: 16,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        color: '#4E4B66',
        
    },

    textInput: {
        height: 48,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 5.5
    },
    viewRemember: {
        flexDirection: 'row',

    },
    remember: {
        color: '#4E4B66',
        fontFamily: 'Poppins',
    },
    forgotpassword: {
        color: '#5890FF',
        fontFamily: 'Poppins',
    },
    buttonLogin: {
        marginTop: 18,
        height: 48,
        backgroundColor: '#1877F2',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLogin: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: 'bold',

    },
    continuewith: {
        color: '#4E4B66',
        fontFamily: 'Poppins',
        textAlign: 'center',
        marginTop: 16,

    },
    donthaveacc: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textdonthaveacc: {
        color: '#4E4B66',
        fontFamily: 'Poppins',
        marginTop: 16,

    },

    imgSocial: {
        width: 21,
        height: 21,
        marginEnd: 10

    },
    buttonSocial: {
        flexDirection: 'row',
        width: 174,
        height: 48,
        backgroundColor: '#EEF1F4',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,

    },
});