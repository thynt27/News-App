import { StyleSheet, Text, View, Image, TextInput, Pressable, Animatable } from 'react-native'
import React, { useState, useEffect } from 'react'

const Test = () => {
    const [email, onChangeEmail] = useState('');
    const [isValidEmail, setValidEmail] = useState (true);
    const [password, onChangePassword] = useState('');
    const [isValidPassword, setValidPassword] = useState (true);


    const verifyEmail = (email) => {
        let regex = new RegExp (/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/);
        if (!email) return true;
        if (regex.test(email)) {
            return true;
        }else{
            return false;
        }
    }

    const verifyPassWord = (password) => {
        let regexpassword = new RegExp (/^[A-Za-z,0-9]\w{5,14}$/);
        if (!password) return true;
        if (regexpassword.test(password)){
            return true;
        }else{
            return false;
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={require('./img/IconLayfuu.png')} />
                <Text style={[styles.text, { fontSize: 16, fontWeight: 'bold', marginTop: 16 }]}>Welcome to Lafyuu</Text>
                <Text style={[styles.text, { marginTop: 8 }]}>Sign in to continue</Text>
            </View>

            <View style={styles.usernamecontainer}>
                <Image style={{ marginTop: 35, marginRight: 10 }} source={require('./img/IconUsername.png')} />
                <TextInput onChangeText={(text) => {
                    onChangeEmail (text); 
                    const isValid = verifyEmail(text);
                    isValid ? setValidEmail(true) : setValidEmail(false);
                }} 
                    
                    value={email} placeholder='Your Email' style={{ fontSize: 14, marginTop: 26, flex: 1 }} />
            </View>

            <Text style={{ marginTop : 5, fontSize: 14, color: 'red' }}>{isValidEmail ? '' : 'Email không được để trống !'} </Text>

            <View style={styles.usernamecontainer}>
                <Image style={{ marginTop: 20, marginRight: 10 }} source={require('./img/IconPassword.png')} />
                <TextInput  onChangeText={(text) => {
                    onChangePassword (text); 
                    const isValid = verifyPassWord(text);
                    isValid ? setValidPassword(true) : setValidPassword(false);
                
            }} 
                value={password} placeholder='Password' style={{ fontSize: 14, marginTop: 8, flex: 1 }} />
            </View>

            <Text style={{ marginTop : 5, fontSize: 14, color: 'red' }}>{isValidPassword ? '' : 'Password không được để trống !'}</Text>

            <Pressable style={styles.buttonLogin}>
                <Text style={styles.textLogin}>Sign In</Text>
            </Pressable>

            <Text style={[styles.text, { textAlign: 'center', marginTop: 21 }]}>OR</Text>





            <Pressable style={[styles.buttonSocial, { flexDirection: 'row', marginTop: 20 }]}>
                <Image style={styles.imgSocial} source={require('./img/IconFB.png')} />
                <Text style={[styles.text, { marginLeft: 90 }]}>Login with Facebook</Text>
            </Pressable>


            <Pressable style={[styles.buttonSocial, { flexDirection: 'row', marginTop: 20 }]}>
                <Image style={styles.imgSocial} source={require('./img/IconGG.png')} />
                <Text style={[styles.text, { marginLeft: 96 }]}>Login with Google</Text>
            </Pressable>


            <Text style={[styles.text, { textAlign: 'center', marginTop: 30, color: '#40BFFF', fontWeight: 'bold' }]}>Forgot Password?</Text>

            <View style={styles.donthaveacc}>
                <Text style={styles.textdonthaveacc}>Don’t have an account ?</Text>
                <Text onPress={() => navigation.navigate('Signup')} style={[styles.textdonthaveacc, { color: '#40BFFF', fontWeight: 'bold' }]}> Register</Text>
            </View>
        </View >
    )
}

export default Test

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginStart: 15,
        marginEnd: 15,
        flexDirection: 'column'

    },
    usernamecontainer: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 68,

    },
    text: {
        fontFamily: 'Poppins'
    },
    buttonLogin: {
        marginTop: 18,
        height: 48,
        backgroundColor: '#40BFFF',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLogin: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: 'bold',

    },
    buttonSocial: {

    },
    imgSocial: {
        marginRight: 10,

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



})