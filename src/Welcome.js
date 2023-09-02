import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'

const Welcome = (props) => {
    const {name, old, address} = props;
    //useStateSnippet
    const [hoTen, sethoTen] = useState('Nguyen A');

    const clickDiNe = () => {

    }
    
    const XuLy = (luaChon) => {
      if(luaChon){
        console.log("Welcome FPT");
      }else{
        console.log("Goodbye")
      }
    }
  return (
    <View>
      <Text>Welcome to Summoner's Rift - {name} </Text>
      <Text>Welcome to Summoner's Rift - {old} </Text>
      <Text>Welcome to Summoner's Rift - {address} </Text>
      <Text>Welcome to Summoner's Rift - {hoTen} </Text>
      <Button title='Click em di' onPress={clickDiNe} />
      <Button title='Dung' onPress={()=> XuLy(true)}  />
      <Button title='Sai' onPress={()=> XuLy(false)}  />
    </View>
  )
}

export default Welcome

