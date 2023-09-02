import { StyleSheet, Text, View, ScrollView, Image, Pressable, FlatList, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemListNews from './ItemListNews'
import AxiosIntance from './Ultil/AxiosIntance';

const NewsDetail = (props) => {
    const { route } = props;
    const { params } = route;
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const [imageUrl, setimageUrl] = useState("");
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const getDetails = async () => {
            ///articles/6316bbd5562ab100165ade5b/detail
            const response = await AxiosIntance().get("/articles/" + params.id + "/detail");
            console.log(response);
            if (response.error == false) {
                //Lay du lieu thanh cong
                settitle(response.data[0].title);
                setcontent(response.data[0].content);
                setimageUrl(response.data[0].image);
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
                    <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Image source={require('./img/Elipse.png')}></Image>

                            <View>
                                <Text style={[styles.textChannel, { fontWeight: 'bold' }]}>BBC News</Text>
                                <Text style={[styles.textChannel, { color: '#4E4B66', fontSize: 14 }]}>14m ago</Text>
                            </View>

                        </View>
                        <Pressable style={styles.btn}>
                            <Text style={{ color: 'white' }}>Following</Text>
                        </Pressable>
                    </View>
                    <Image style={styles.img} source={{ uri: imageUrl }} />
                    <Text style={styles.textContinent}>Europe</Text>
                    <Text style={styles.textTitle}>{title}</Text>
                    <Text style={[styles.content]}>{content}</Text>
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

export default NewsDetail

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
        width: 400,
        height: 200,

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
        color: 'gray'
    },
    textDocThem: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

