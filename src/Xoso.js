import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import styles from './MyStyle'
import { Pressable, TextInput } from 'react-native'
import { useState } from 'react'


const Xoso = () => {

  const [soDuDoan, setsoDuDoan] = useState(1);
  const [ketQua, setketQua] = useState('Kết quả sẽ hiển thị ở đây!');

  const DuDoan = () => {
    let numRand = Math.floor(Math.random() * 5) + 1;
    console.log(numRand);
    if (soDuDoan == numRand) {
      setketQua('Bạn đã đoán đúng số' + ' '+numRand);
    } else {
      setketQua('Bạn sai rồi! Chúc bạn may mắn lần sau! :D')
    }
  }


  return (
    <View>
      <Text style={styles.textxs}>
        Xổ Số Đê!!
      </Text>
      <Text style={styles.textinput1den100}>Nhập từ 1 đến 100</Text>
      <TextInput
        onChangeText={newText => setsoDuDoan(newText)}
        placeholder='Nhập 1 số'
        style={
          styles.textinput
          } />

      <Pressable onPress={DuDoan} style={styles.buttonDuDoan}>
        <Text style={styles.textInpressable}> Dự đoán </Text>
      </Pressable>
      <Text style={styles.textResult}>{ketQua}</Text>
    </View>
  )
}

export default Xoso