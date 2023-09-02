import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext } from 'react'
import { color } from 'react-native-reanimated'
import { AppContext } from './Ultil/AppContext'
import AxiosIntance from './Ultil/AxiosIntance'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const UpdateProfile = (props) => {
    const { inforUser, setinforUser } = useContext(AppContext);
    console.log(inforUser);
    const capture = async () => {
        const result = await launchCamera();
        console.log(result.assets[0].uri);


        //Upload anh
        const formData = new FormData();
        formData.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg'
        })

        const response = await AxiosIntance("multipart/form-data").post('media/upload', formData);
        console.log(response);
        //Thay đổi 1 giá trị trong 1 object
        setinforUser({...inforUser, avatar: response.data.path});
        // if (response.error == false){
        //     setimageNe(response.data.path);
        //     ToastAndroid.show("Upload success", ToastAndroid.SHORT);
        // }else{
        //     ToastAndroid.show("Upload failed", ToastAndroid.SHORT);
        // }
       
    }

    const updateProfile = async () => {
        const response = await AxiosIntance().post('users/update-profile', 
        {name : inforUser.name, address : inforUser.address, phone : inforUser.phone, avatar : inforUser.phone, dob : inforUser.dob});
        if (response.error == false){
            ToastAndroid.show("Update Success", ToastAndroid.SHORT);
        }else{
            ToastAndroid.show("Update Failed", ToastAndroid.SHORT);
        }
    }

    return (
        <View style={styles.container}>
            <Pressable>
                <View style={styles.header}>
                    <Image style={styles.arrow} source={require("./img/IconArrowBack.png")} />
                    <Text style={styles.textProfile}>Fill your Profile</Text>
                </View>
            </Pressable>


            <TouchableOpacity onPress={capture}>
                {
                    inforUser.avatar == ""
                        ?
                        <Image style={styles.image} source={require("../ASM/img/Avatar.png")} />
                        :
                        <Image style={styles.image} source={{ uri: inforUser.avatar }} />
                }
            </TouchableOpacity>




            <View style={[styles.text]}>
                <Text style={styles.textUsername} >Fullname</Text>
                <Text style={[styles.textUsername, { color: '#C30052' }]}>*</Text>
            </View>
            <TextInput style={styles.textInput} value={inforUser.name} onChangeText={(text) => setinforUser({...inforUser, name: text})}/>

            <View style={[styles.text]}>
                <Text style={styles.textUsername} >Address</Text>
                <Text style={[styles.textUsername, { color: '#C30052' }]}>*</Text>
            </View>
            <TextInput style={styles.textInput} value={inforUser.address} onChangeText={(text) => setinforUser({...inforUser, address: text})} />

            <View style={[styles.text]}>
                <Text style={styles.textUsername} >Phone Number</Text>
                <Text style={[styles.textUsername, { color: '#C30052' }]}>*</Text>
            </View>
            <TextInput style={styles.textInput} value={inforUser.phone} onChangeText={(text) => setinforUser({...inforUser, phone: text})} />


            <View style={[styles.text]}>
                <Text style={styles.textUsername} >Date Of Birth</Text>
                <Text style={[styles.textUsername, { color: '#C30052' }]}>*</Text>
            </View>
            <TextInput style={styles.textInput} value={inforUser.dob} onChangeText={(text) => setinforUser({...inforUser, dob: text})}/>

            <Pressable style={styles.buttonNext} onPress={updateProfile}>
                <Text style={styles.textNext}>Cập nhật</Text>
            </Pressable>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginStart: 15,
        marginEnd: 15,
        flexDirection: 'column'
    },
    header: {
        flexDirection: 'row',
    },
    arrow: {
        marginTop: 5
    },
    textProfile: {
        fontFamily: 'Poppins',
        fontSize: 17,
        marginLeft: 102,
        fontWeight: 'bold',
        color: 'black'
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 16,
        marginLeft: 80
    },
    text: {
        flexDirection: 'row',

    },
    textUsername: {
        marginTop: 16,
        fontSize: 16,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        color: '#4E4B66',
    },
    textInput: {
        height: 48,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 2,
        borderColor: '#4E4B66'
    },
    buttonNext: {
        marginTop: 15,
        height: 48,
        backgroundColor: '#1877F2',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textNext: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: 'bold',

    },
})