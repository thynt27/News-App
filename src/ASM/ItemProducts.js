import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Pressable, SafeAreaView, Animated, TouchableHighlight, } from 'react-native'
import React from 'react'
import Card from './Card';
import { SwipeListView } from 'react-native-swipe-list-view';
import AxiosIntance from './Ultil/AxiosIntance';
const ItemProducts = (props) => {
    const { product, navigation } = props;
    const ClickItem = () => {
        console.log('Click Item');
        navigation.navigate("ProductsDetails", { id: product._id });
    }
    const updateProduct = async () => {
        const response = await AxiosIntance().post('/:id/edit',
            { name: inforUser.name, address: inforUser.address, phone: inforUser.phone, avatar: inforUser.phone, dob: inforUser.dob });
        if (response) {
            ToastAndroid.show("Update Success", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Update Failed", ToastAndroid.SHORT);
        }
    }

    const deleteProduct = async (_id) => {
        const response = await AxiosIntance().get('/:id/delete', { id: product._id  });
        if (response) {
            ToastAndroid.show("Delete Success", ToastAndroid.SHORT);
            response.reload();
        } else {
            ToastAndroid.show("Delete Failed", ToastAndroid.SHORT);
        }
    }
   
    return (

        <SafeAreaView style={styles.container} >
            <TouchableOpacity onPress={ClickItem}>
                <Card>

                    <View style={styles.main}>
                        <View >
                            <Image style={styles.image} source={{ uri: product.image }} />
                        </View>
                        <View style={styles.content}>
                            <View style={{ flexDirection: 'row', marginBottom: 2 }}>
                                <Text style={styles.title}>Name:</Text>
                                <Text style={styles.Item}>{product.name}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 2 }}>
                                <Text style={styles.title}>Price:</Text>
                                <Text style={styles.Item}>{product.price}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 2 }}>
                                <Text style={styles.title}>Quantity:</Text>
                                <Text style={styles.Item}>{product.quantity}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 2 }}>
                                <Text style={styles.title}>Category:</Text>
                                <Text style={styles.Item}>{product.category.name}</Text>

                            </View>

                        </View>

                    </View>




                </Card>
            </TouchableOpacity>
            <View style={{flexDirection : 'column'}}>
                <TouchableOpacity onPress={updateProduct}>
                    <Image style={{ right: 70, marginTop: 40 }} source={require('./img/edit.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={deleteProduct}>
                    <Image style={{ right: 70, marginTop: 20 }} source={require('./img/delete.png')} />
                </TouchableOpacity>
            </View>

        </SafeAreaView >


    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row'
    },
    main: {
        flexDirection: 'row',
    },
    title: {
        fontWeight: 'bold',

    },
    Item: {
        marginLeft: 10
    },
    news: {
        flexDirection: 'row'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 15,
        borderWidth: 2,
        borderColor: 'black'
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    content: {
        marginStart: 10,
        marginTop: 20,
        fontSize: 20,
        ///
        width: Dimensions.get('window').width - 140
    }
})
export default ItemProducts