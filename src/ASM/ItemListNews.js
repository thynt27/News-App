import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'


const ItemListNews = (props) => {
    const { dulieu, navigation } = props;
    
    const ClickItem = () => {
        console.log ('Click Item');
        navigation.navigate("NewsDetail" , {id: dulieu._id});
    }

    return (
        <TouchableOpacity onPress={ClickItem}>
            <View style={styles.container}>
                <View style={styles.news}>
                    <Image style={styles.image} source={{ uri: dulieu.image }} />
                    <View style={styles.content}>
                        <Text style={styles.textTitle}>{dulieu.title}</Text>
                        <Text numberOfLines={3}>{dulieu.content}</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'column'
    },

    news: {
        flexDirection: 'row'
    },
    image: {
        width: 96,
        height: 96,
        borderRadius: 10,
        marginTop: 15
    },
    textTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    content: {
        marginStart: 10,
        marginTop: 10,
        ///
        width: Dimensions.get('window').width - 140
    }
})
export default ItemListNews