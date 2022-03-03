import React, { useState } from 'react'
import { TouchableHighlight, TouchableOpacity, View } from 'react-native'

import { Text } from 'react-native-paper'

const Header = ({activeTab,setActiveTab}) => {
   // const [activeTab ,setActiveTab] =useState("Delivery")
  return (
    <View style={{alignSelf:"center" ,flexDirection:"row"}}>
       <HeaderButton text="Delivery" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab}/>   
       <HeaderButton text="Pickup"  btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />   
    </View>
  )
}



const HeaderButton = (props) => {
  return (
    
           <TouchableOpacity
          style={{backgroundColor:props.activeTab == props.text ? "black" : "white"
             ,paddingHorizontal:16 
             ,paddingVertical:6 
             , borderRadius:30}}

            onPress={()=>props.setActiveTab(props.text)}
        >
            <Text style={{color:props.activeTab == props.text ? "white" : "black" ,fontSize:16,fontWeight:"900"}}>{props.text}</Text>
        </TouchableOpacity>

       
        
       

  )
}

export default Header
