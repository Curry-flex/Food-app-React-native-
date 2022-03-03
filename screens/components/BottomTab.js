import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomTab = () => {
  return (
    <View 
    style={{
       flexDirection:"row" ,
       justifyContent:"space-between",
       margin:10,
       marginHorizontal:30
    }}
    >
            <Icon iconName="home" text="Home" />
            <Icon iconName="search" text="Browse" />
            <Icon iconName="shopping-bag" text="Grocery" />
            <Icon iconName="receipt" text="Orders" />
            <Icon iconName="user" text="Account" />
    </View>
  )
}

const Icon =(props)=>(
 <TouchableOpacity>
        <View>
        <FontAwesome5
         name={props.iconName}
         size={25}

         style={{
             marginBottom:3,
             alignSelf:"center",
             color:"black"
         }}
        />

        <Text style={{color:"black"}}>{props.text}</Text>
    </View>
 </TouchableOpacity>
)

export default BottomTab