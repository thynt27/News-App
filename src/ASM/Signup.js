import { Pressable, StyleSheet, Text, TextInput, Image, View, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { debug, set } from 'react-native-reanimated';
import AxiosIntance from './Ultil/AxiosIntance';

const Signup = (props) => {
    const { navigation } = props;
    const [emailUser, setemailUser] = useState("");
    const [passwordUser, setpasswordUser] = useState("");
    const [nameUser, setNameUser] = useState("");
    const dangKyNe = async () => {
        console.log(emailUser, passwordUser, nameUser);
        try {
            const response = await AxiosIntance().post("/user/register",
                { email: emailUser, password: passwordUser, name: nameUser });
            console.log(response)
            if (response.error === false) {
                ToastAndroid.show("Đăng ký thành công", ToastAndroid.SHORT);
                navigation.navigate("Login")
            } else {
                ToastAndroid.show("Đăng ký thất bại", ToastAndroid.SHORT);
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello!</Text>
            <Text style={styles.welcomeText}>Signup to get Started</Text>


            <View style={[styles.usernameandpassword]}>
                <Text style={styles.textUsernameandPassword} >Username</Text>
                <Text style={[styles.textUsernameandPassword, { color: '#C30052' }]}>*</Text>
            </View>
            <TextInput value={emailUser} onChangeText={setemailUser} style={styles.textInput} />

            <View style={[styles.usernameandpassword]}>
                <Text style={styles.textUsernameandPassword} >Password</Text>
                <Text style={[styles.textUsernameandPassword, { color: '#C30052' }]}>*</Text>
            </View>
            <TextInput value={passwordUser} onChangeText={setpasswordUser} style={[styles.textInput, { marginBottom: 10 }]} />


            <View style={[styles.usernameandpassword]}>
                <Text style={styles.textUsernameandPassword} >Name</Text>
                <Text style={[styles.textUsernameandPassword, { color: '#C30052' }]}>*</Text>
            </View>
            <TextInput value={nameUser} onChangeText={setNameUser} style={[styles.textInput, { marginBottom: 10 }]} />

            <View style={[styles.viewRemember, { justifyContent: 'space-between' }]}>
                <View style={styles.viewRemember}>
                    <BouncyCheckbox fillColor='#1877F2' />
                    <Text style={styles.remember} >Remember me</Text>
                </View>
                <Text style={styles.forgotpassword}>Forgot the password ?</Text>
            </View>

            <Pressable onPress={dangKyNe} style={styles.buttonLogin}>
                <Text style={styles.textLogin}>Register</Text>
            </Pressable>

            <Text style={styles.continuewith}>or continue with</Text>



            <View style={[styles.viewRemember, { justifyContent: 'space-between' }]}>
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
                <Text style={styles.textdonthaveacc}>Already have an account ? </Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={[styles.textdonthaveacc, { color: '#1877F2' }]}> Login</Text>
                </Pressable>

            </View>


        </View>
    )
}

export default Signup

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
        color: '#1877F2',
        marginTop: 10
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
})