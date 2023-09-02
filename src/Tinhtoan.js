import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './MyStyle';


const Tinhtoan = () => {
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(1);
    const [result, setResult] = useState(3);

    const luaChon = (isChoose) => {

        
        let tong = num1 + num2;
        if((tong == result && isChoose == true) ||(tong != result && isChoose == false)){
            alert('Bạn đã chọn đúng! Xin chúc mừng!');
        }else{
            alert('Bạn đã chọn sai rồi! Cố gắng thêm lần sau nha!')
        }

        setnum1(Math.floor(Math.random() * 10));
        setnum1(Math.floor(Math.random() * 10));
        setResult(Math.floor(Math.random()* 10));
    }
    return (
        <View>
            <Text style={styles.texttieude} >
                Bạn Giỏi Phép Cộng
            </Text>
            <Text style={{
                color: '#fc466b',
                fontWeight: 'bold',
                fontSize: 40,
                textAlign: 'center'
            }}>
                {num1} + {num2}
            </Text>
            <Text style={styles.textnum12}>
                =   
            </Text>
            <Text style={styles.textresulttinhtoan}>
                {result}
            </Text>
            <Pressable onPress={()=> luaChon(true)} style={styles.buttonTrue}>
                <Text style={styles.textTrue}>Đúng</Text>
            </Pressable>
            <Pressable  onPress={()=> luaChon(false)}  style={styles.buttonFalse}>
                <Text style={styles.textFalse}>Sai</Text>
            </Pressable>
        </View>
    )
}

export default Tinhtoan