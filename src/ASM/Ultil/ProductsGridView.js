import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput, Dimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { onChange } from 'react-native-reanimated';
import AxiosIntance from './AxiosIntance';
import ItemProducts from '../ItemProducts';



const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ProductsGridView = (props) => {
    const { navigation } = props;
    const [searchText, setsearchText] = useState("");
    const [isLoading, setisLoading] = useState(true);
    const [scroll, setscroll] = useState(false);
    const [imgActive, setimgActive] = useState(0);
    const [dataNe, setdataNe] = useState([]);
    const images = [
        'https://cdn.pixabay.com/photo/2021/03/13/16/00/mouse-6092073_960_720.jpg',
        'https://cdn.pixabay.com/photo/2020/01/12/08/12/keyboard-4759502_960_720.jpg',
        'https://cdn.pixabay.com/photo/2016/05/07/07/39/headphones-1377194__340.jpg'
    ];
    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide !== imgActive) {
                setimgActive(slide);
            }
        }
    }
    const handleScroll = (event) => {
        if (event.nativeEvent.contentOffset.y > 0) {
            setscroll(true);
        } else {
            setscroll(false);
        }
    }

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const response = await AxiosIntance().get("/product/get-all");
            console.log("Product", response.products);
            if (response.result == true) { //Lay du lieu thanh cong
                setProducts(response.products);
                setisLoading(false);

            } else {
                console.log("Lay du lieu that bai!");
            }
        }
        getProducts();
        return () => {

        }
    }, []);


    let timeOut = null;
    const coutdownSearch = (searchText) => {
        if (timeOut) {
            //Neu co timeout roi thi clear 
            clearTimeout(timeOut);
        }
        //Tao lai timeout moi
        timeOut = setTimeout(() => {
            search(searchText);

        }, 3000);
    }

    const search = async (searchText) => {
        setisLoading(true);
        const response = await AxiosIntance().get('/search-by-name' + searchText);
        if (response.error == false) {
            //Lay du lieu thanh cong
            setdataNe(response.data);
            setisLoading(false);
        } else {
            ToastAndroid.show("Lay du lieu that bai!", ToastAndroid.SHORT)
        }
    }
    

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <View style={styles.header}>
                <Text style={styles.textProfile}>TTMall</Text>
                <Image style={[styles.arrow, { marginLeft: 100 }]} source={require("../img/cart.png")} />
                <Image style={[styles.arrow, { marginLeft: 10 }]} source={require("../img/bell.png")} />
            </View>

            <TouchableOpacity style={styles.search}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput onChangeText={(text) => coutdownSearch(text)} style={{ marginLeft: 10 }} placeholder='Search Product Name' />
                    <Image style={{ marginTop: 10, marginLeft: 210 }} source={require('../img/Search.png')} />
                </View>
            </TouchableOpacity>


            {!scroll && (<View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >

                    {
                        images.map((e, index) =>
                            <Image
                                key={e}
                                resizeMode='stretch'
                                style={styles.wrap}
                                source={{ uri: e }}
                            />
                        )
                    }

                </ScrollView>

                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) =>
                            <Text
                                key={e}
                                style={imgActive == index ? styles.dotActive : styles.dot}
                            >
                                ●
                            </Text>
                        )
                    }
                </View>
            </View>)}


            <FlatList data={products}
                numColumns={1}
                onScroll={handleScroll}
                showsVerticalScrollIndicator={false}
                
                renderItem={({ item }) => <ItemProducts product={item} navigation={navigation} />}
            />




        </View>
    )
}

export default ProductsGridView

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: 'black'
    },
    dot: {
        margin: 3,
        color: 'white'
    },
    arrow: {
        marginTop: 15,
        marginLeft: 10,

    },
    textProfile: {
        fontFamily: 'Poppins',
        fontSize: 30,
        marginLeft: 130,
        left: 20,
        marginTop: 10,
        marginBottom: 44,
        fontWeight: 'bold',
        color: '#3669C9'
    },
    buttonLogin: {
        marginTop: 18,
        height: 48,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
        marginBottom: 10,
        marginRight: 25

    },
})
