import { StyleSheet, Text, View, FlatList, Image, ToastAndroid, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native'

import React, { useState, useEffect } from 'react'
import ItemListNews from './ItemListNews'
import NewsDetail from './NewsDetail'
import Login from './Login'
import Signup from './Signup'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import AxiosIntance from './Ultil/AxiosIntance'

const dataNe = [
    {
        "_id": "1",
        "title": "Trường công lập đầu tiên dạy và thi chương trình dự bị đại học Mỹ",
        "content": "Phổ thông Năng khiếu là trường công lập đầu tiên ở Việt Nam dạy và thi 6 môn của chương trình Advanced Placement (AP), thường gọi là chương trình dự bị đại học Mỹ.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/02/02/328463889-891024988600042-6177-9136-2603-1675295134.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=BCVEDMn0Smx1XLiCRi0rrA",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "2",
        "title": "Lịch thi đánh giá năng lực, tư duy năm 2023",
        "content": "Các kỳ thi đánh giá năng lực, tư duy diễn ra từ tháng 3 đến 7, thí sinh có thể tham dự nhiều đợt và đăng ký từ đầu tháng 2.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/117f5804708184dfdd90-162556098-1999-1999-1675148782.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=Ie6cEqbs1YL8PDAG85QrsA",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "3",
        "title": "Đối phó với bài tập Tết",
        "content": "Ngày nghỉ Tết cuối cùng, hàng chục trang bài tập Toán, Tiếng Việt và Tiếng Anh của Anh Thư được giải quyết, nhưng do mẹ và dì làm giúp.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/4313-1662984910-1675082690-4516-1675083076.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=BnjiAv8Bq8iaZcGQ2jJC3Q",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "4",
        "title": "Đường trở thành giáo viên ở Mỹ của một phụ nữ Việt",
        "content": "Chị Đinh Thu Hồng phải theo học chương trình đào tạo giáo viên và hoàn thành nhiều thủ tục để được cấp phép hành nghề dạy học ở Mỹ.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/giao-vien3-7193-1674696213-167-6044-9285-1675150549.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=GJm7EfgbBZ4Pvlut0Bl1rw",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "5",
        "title": "Cô giáo đèo hai con giữa mưa rét, vượt 100 km đến trường",
        "content": "Cô Nguyễn Thị Hà gây xúc động khi đèo hai con, vượt 100 km trong mưa lạnh để trở lại điểm trường ở xã Trà Dơn, huyện Nam Trà My, sau Tết.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/untitled-1675115482-6811-1675116325.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=sDv36arZmV-B6KEYjStHbA",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "6",
        "title": "Nam sinh trả lại hơn 40 triệu đồng nhặt được",
        "content": "Lê Hải Thăng, 17 tuổi, được tuyên dương vì nộp lại túi nylon đựng hơn 40 triệu đồng nhặt được hôm 29 Tết.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/tuyenduongnamsinh-1675076463-2581-1675077291.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=vlqGCurXgocetWe4SYl13g",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    },
    {
        "_id": "7",
        "title": "Cho con đi ngắm trăng, sao từ bé",
        "content": "Từ khi 4 tuổi, con trai chị Hồng Anh đã được đưa đi ngắm nhật thực, mưa sao băng và tham gia câu lạc bộ thiên văn trẻ em.",
        "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/danny-kim-png-1929-1673698701-1199-6656-1675037287.png?w=300&h=180&q=100&dpr=1&fit=crop&s=uYWNW2YjIsttuhLT4s8fqQ",
        "createdAt": "2023-01-12T06:26:17.539Z",
        "createdBy": {
            "_id": "63ac39aeedf7c80016c57a67",
            "name": "",
            "avatar": ""
        }
    }
]

const ListNews = (props) => {
    const { navigation } = props;
    const [dataNe, setdataNe] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        const getNews = async () => {
            const response = await AxiosIntance().get("/product/get");
            console.log(response);
            if (response.error == false) { //Lay du lieu thanh cong
                setdataNe(response.data);
                setisLoading(false);
            } else {
                ToastAndroid.show("Lay du lieu that bai!", ToastAndroid.SHORT)
            }
        }

        getNews();

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

        <View style={styles.container}>

            <View style={styles.img}>
                <Image style={styles.imglogo} source={require('./img/Iconlogo.png')} />
                <Image style={styles.imgthongbao} source={require('./img/Iconthongbao.png')} />
            </View>

            <View style={styles.search}>
                <TouchableOpacity onPress={search}>
                    <Image style={styles.imgsearch} source={require('./img/Search.png')} />
                </TouchableOpacity>

                <TextInput onChangeText={(text) => coutdownSearch(text)} style={styles.inputsearch} placeholder='Search' />
                <Image style={styles.imgthongbao} source={require('./img/SearchDetails.png')} />

            </View>

            <View style={[styles.img, { marginTop: 15 }]}>
                <Text style={styles.textLastest}>Trending</Text>
                <Text style={styles.textSeeall2}>See all</Text>
            </View>

            <Image style={{ marginTop: 5, borderRadius: 5 }} source={require('./img/hinhtau.png')} />
            <Text style={{ marginTop: 5 }}>Europe</Text>
            <Text style={{ marginTop: 5, fontWeight: 'bold', color: 'black' }}>Russian warship: Moskva sinks in Black Sea</Text>
            <View style={styles.img}>
                <Image style={{ width: 30, height: 30, marginTop: 5 }} source={require('./img/Elipse.png')} />
                <Text style={{ marginLeft: 5, marginTop: 10, fontWeight: 'bold' }}>BBC News</Text>
                <Image style={{ marginLeft: 13, marginTop: 14 }} source={require('./img/Clock.png')} />
                <Text style={{ marginLeft: 2, marginTop: 10 }} >4h ago</Text>
                <Image style={{ marginLeft: 170, marginTop: 15 }} source={require('./img/etc.png')} />
            </View>

            <View style={[styles.img, { marginTop: 35 }]}>
                <Text style={styles.textLastest}>Lastest</Text>
                <Text style={styles.textSeeall}>See all</Text>
            </View>
            <View style={styles.tabMenu}>
                <Text style={[styles.menuHeader, { borderBottomWidth: 3, borderBottomColor: '#1877F2' }]}>All</Text>
                <Text style={[styles.menuHeader, { paddingLeft: 10 }]}>Sports</Text>
                <Text style={[styles.menuHeader, { paddingLeft: 10 }]}>Politics</Text>
                <Text style={[styles.menuHeader, { paddingLeft: 10 }]}>Business</Text>
                <Text style={[styles.menuHeader, { paddingLeft: 10 }]}>Health</Text>
                <Text style={[styles.menuHeader, { paddingLeft: 10 }]}>Travel</Text>
                <Text style={[styles.menuHeader, { paddingLeft: 10 }]}>Science</Text>
            </View>

            <View style={styles.loading}>
                {
                    isLoading == true ?
                        <View>
                            <ActivityIndicator size='large' color='#1877F2' />
                            <Text>Loading...</Text>
                        </View>
                        :
                        <FlatList
                            data={dataNe}
                            renderItem={({ item }) => <ItemListNews dulieu={item} navigation={navigation} />}
                            keyExtractor={item => item._id}
                            showsVerticalScrollIndicator={false}

                        />
                }
            </View>






        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginStart: 15,
        marginEnd: 15,
        flexDirection: 'column'
    },

    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        flexDirection: 'row',

    },
    search: {
        borderColor: 'grey',
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 42
    },
    inputsearch: {
        marginLeft: 11
    },
    imgsearch: {
        marginTop: 15,
        marginLeft: 5

    },

    imglogo: {
        marginTop: 10
    },
    imgthongbao: {
        marginTop: 15,
        marginLeft: 240
    },


    textLastest: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
    },
    textSeeall: {
        color: '#4E4B66',
        fontSize: 16,
        marginLeft: 260
    },

    textSeeall2: {
        color: '#4E4B66',
        fontSize: 16,
        marginLeft: 250
    },
    tabMenu: {
        flexDirection: 'row',
        marginTop: 16
    },
    menuHeader: {
        color: '#4E4B66',
        fontSize: 16,

    },
    bottomNav: {
        width: '100%',
        height: 60,
        gap: 32,
        position: 'relative',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',

        // borderColor: 'black',
        // borderWidth: 2,
    },
    itemBottomNav: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBottomNav: {
        fontSize: 14,
        color: '#4E4B66',
    },
})


export default ListNews