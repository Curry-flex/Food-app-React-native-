import React from 'react'
import {Text,TouchableOpacity,View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"
import AntiDesign from "react-native-vector-icons/AntDesign"
const SerchBar = () => {


  return (
    <View style={{marginTop:15 ,flexDirection:"row"}}>
        

        <GooglePlacesAutocomplete  
        placeholder='Search'
        placeholderTextColor="#000"
        color="black"
        styles={{
            textInput:{
                backgroundColor:"#000",
                borderRadius:20,
                fontWeight:"700",
                marginTop:7
            },
            textInputContainer:{
                backgroundColor:"#000",
                borderRadius:50,
                flexDirection:"row",
                alignItems:"center",
                marginRight:10
            }
            
        }}

        renderLeftButton={()=>(
            <View style={{marginLeft:10}}> 
                <Ionicons name="location" size={24} color="white" />
            </View>
        )}

        renderRightButton={()=>(
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                backgroundColor:"blue",
                padding:13,
                borderRadius:30
            }}>
                <AntiDesign name="clockcircle" size={11} style={{marginRight:10,}} />
                <TouchableOpacity
                onPress={console.log("pressed")}
                >
                <Text>search</Text>
                </TouchableOpacity>
               
            </View>
        )}
        />
    </View>
  )
}



export default SerchBar