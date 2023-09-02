import { StyleSheet, Text, View, ScrollView, Image, Pressable, FlatList, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemListNews from './ItemListNews'
import AxiosIntance from './Ultil/AxiosIntance';

const ProductsDetails = (props) => {
    const { route } = props;
    const { params } = route;
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [quantity, setquantity] = useState("");
    const [category, setcategory] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    const [isLoading, setisLoading] = useState(true);
    

    useEffect(() => {
        const getDetails = async () => {
            ///articles/6316bbd5562ab100165ade5b/detail
            const response = await AxiosIntance().get("/product/get-by-id?id=" + params.id  );
            console.log(response);
            if (response) {
                //Lay du lieu thanh cong
                setname(response.product.name);
                setprice(response.product.price);
                setimageUrl(response.product.image);
                setcategory(response.product.category);
                setisLoading(false);
            } else {
                ToastAndroid.show("Lay du lieu that bai!", ToastAndroid.SHORT);
            }
        }
        getDetails();
        return () => {

        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.Header} >
                <Pressable><Image source={require('../ASM/img/IconArrowBack.png')} /></Pressable>

                <View style={[styles.iconHeader, { flexDirection: 'row' }]}>
                    <Image source={require('../ASM/img/Share.png')} />
                    <Image source={require('../ASM/img/More.png')} />
                </View>

            </View>

            {
                isLoading == true ?
                    <View style = {styles.loading}>
                        <ActivityIndicator size= 'large' color='#1877F2' />
                        <Text>Loading...</Text>
                    </View>
                    : 
                    <ScrollView>
                    
                    <Image style={styles.img} source={{ uri: imageUrl }} />
                    <Text style={styles.textTitle}>Name : {name}</Text>
                    <Text style={[styles.content]}>Price : {price} VND</Text>
                    <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
                    <View style={styles.Header}>
                        <View style={[styles.Header, {marginTop : 5}]}>
                            <Image source={require('../ASM/img/Love.png')}  />
                            <Text style={{ color: '#050505', marginTop: 5 }}> 24.5K</Text>
                        </View>
                        <View style={[styles.Header, { marginLeft: 40, marginTop : 5 }]}>
                            <Image source={require('../ASM/img/Comment.png')} />
                            <Text style={{ color: '#050505', marginTop: 2 }}> 1K</Text>
                        </View>
                        <Image style={{ marginLeft: 170 , marginTop: 5}} source={require('../ASM/img/BlueBookMark.png')} />
                    </View>

                </ScrollView>
            }




        </View>
    )
}

export default ProductsDetails

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        marginTop: 20
    },
    Header: {
        flexDirection: 'row',
    },
    iconHeader: {
        marginLeft: 290
    },
    textChannel: {
        color: '#000000',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: 16,
        marginLeft: 3,
        marginTop: 3,
        marginBottom : 5
    },
    loading : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    btn: {
        backgroundColor: '#1877F2',
        borderRadius: 5,
        width: 102,
        height: 34,
        marginTop : 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 300,
        height: 250,
        marginLeft : 30,
        borderColor : 'pink',
        borderWidth : 2,
    },
    textContinent: {
        fontSize: 14,
        color: '#4E4B66',
        marginTop: 10,
        marginBottom: 5
    },
    textTitle: {
        fontFamily: 'Poppins',
        fontSize: 24,
        color: '#000000',
        fontWeight : 'bold',
        marginBottom: 5
    },
    content: {
        fontSize: 14,
        lineHeight: 25,
        letterSpacing: 0.2,
        color: 'red',
        fontWeight : 'bold'
    },
    textDocThem: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

