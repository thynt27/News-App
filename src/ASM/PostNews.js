import { Button, StyleSheet, Text, TextInput, View, Image, ToastAndroid, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import AxiosIntance from './Ultil/AxiosIntance'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
const PostNews = () => {

    const [imageNe, setimageNe] = useState("");
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [quantity, setquantity] = useState("");
    const [category, setcategory] = useState("");
    const [showImage, setshowImage] = useState(false);



    const capture = async () => {
        const result = await launchCamera();
        console.log(result);


        const response = await AxiosIntance().post('/product/upload-image');
        console.log(response);
        if (response) {
            setimageNe(response.product.image);
            setshowImage(true);
            ToastAndroid.show("Upload success", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Upload failed", ToastAndroid.SHORT);
        }

    }



    const post = async () => {
        const response = await AxiosIntance().post('/product/new', { name: name, price: price, quantity : quantity,  image: imageNe , category : category});
        if (response) {
            ToastAndroid.show("Post success", ToastAndroid.SHORT);  
        } else {
            ToastAndroid.show("Post failed", ToastAndroid.SHORT);
        }
    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable>
                    <Image style={styles.arrow} source={require('./img/IconArrowBack.png')} />
                </Pressable>

                <Text style={styles.textCreateNews}>Add Products</Text>
                <Image style={styles.more} source={require('./img/More.png')} />
            </View>
            <View style={{
                paddingLeft: 10,
                height: 200, marginBottom: 10, marginTop: 10,
                borderWidth: 2,
                borderStyle: 'dashed',
                borderColor: 'black',
                backgroundColor: '#EEF1F4',
                borderRadius: 3
            }}>
                <TouchableOpacity onPress={capture}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
                        <Image source={require('./img/plus.png')} />
                        <Text>Add Cover Photo</Text>
                    </View>
                    <Image style={styles.image} source={{ uri: imageNe }} />

                </TouchableOpacity>



            </View>

            <View>
                <TextInput placeholder='Name' style={{ borderWidth : 1, borderRadius :5,  fontSize: 17, marginTop : 10 }} onChangeText={setname} />
                <TextInput placeholder='Price' style={{ borderWidth : 1, borderRadius :5,  fontSize: 17 , marginTop : 10  }} onChangeText={setprice} />
                <TextInput placeholder='Quantity' style={{ borderWidth : 1, borderRadius :5,  fontSize: 17 , marginTop : 10 }} onChangeText={setquantity} />
                <TextInput placeholder='Category' style={{borderWidth : 1, borderRadius :5,  fontSize: 17 , marginTop : 10 }} onChangeText={setcategory} />
            </View>

            <Pressable style={styles.buttonPost} onPress={post}>
                <Text style={styles.textPost}>Đăng Tin</Text>
            </Pressable>




        </View>
    )
}

export default PostNews

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginStart: 15,
        marginEnd: 15,
        flexDirection: 'column'

    },
    image: {
        height: 190, width: 340,
        marginTop: -110
    },
    header: {
        flexDirection: 'row'
    },
    arrow: {
        marginTop: 5,
        marginLeft: 5
    },
    textCreateNews: {
        fontFamily: 'Poppins',
        fontSize: 17,
        marginLeft: 120,
        fontWeight: 'bold',
        color: 'black'
    },
    more: {
        marginTop: 3,
        marginLeft: 100,
    },  

    textPost: {
        color: "#ffff",
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: 'bold',

    },
    buttonPost: {
        marginTop : 15,
        Width: 100,
        height: 48,
        backgroundColor: '#1877F2',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
 


})