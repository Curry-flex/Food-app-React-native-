import React from 'react'
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../color/color'
import Ionicons from "react-native-vector-icons/Ionicons"
import { transparent } from 'react-native-paper/lib/typescript/styles/colors'


const ViewClothes = ({navigation,route}) => {
    const clothes =route.params
    
  return (
    <SafeAreaView style={{flex:1,backgroundColor:Colors.white}}>
        <View style={{position:"absolute" ,top:0,right:10}}>
            <Ionicons name="cart" color="black" size={30}/>
        </View>
        
        <View style={styles.imageContainer}>
           <Image 
             style={{
                 resizeMode:"contain",
                 flex:1
             }}
             source={route.params.image}
           />
        </View>
        
        <View style={styles.detailsContainer}>
         <View style={{flexDirection:"row",marginLeft:20,alignItems:"flex-end"}}>
            <View style={styles.line}/>
            <Text style={{color:"black",fontSize:20, fontWeight:"700"}}>Buy with CurryFlex</Text>
         </View>

         <View style={{
           flexDirection:"row",
           justifyContent:"space-between",
           marginTop:20,
           marginLeft:20
        }}>
            <Text style={{color:"black",fontSize:30, fontWeight:"700"}}>{route.params.name}</Text>

            <View
             style={{
                 backgroundColor:Colors.green,
                 width:100,
                 height:50,
                 justifyContent:"center",
                 alignItems:"center",
                 borderTopLeftRadius:20,
                 borderBottomLeftRadius:20
             }}
            >
                <Text style={{color:"white" ,fontWeight:"700" ,fontSize:15}}>Tsh {route.params.price}</Text>
            </View>

        </View>

           <View style={{
                marginTop:10
            }}>
                <Text style={{color:"black",fontSize:30, fontWeight:"700" ,marginLeft:20}}>About</Text>
                <Text style={{color:"black",fontSize:25, fontWeight:"" ,marginLeft:20}}>{route.params.description}</Text>

            </View>

            <View
            style={{
                marginTop:20,
                flexDirection:"row",
                justifyContent:"space-between"
            }}
            
            >
                <View style={{
                   backgroundColor:"orange",
                    width:100,
                   height:50,
                   justifyContent:"center",
                   alignItems:"center",
                   borderRadius:20
                  
                }}>
                    <TouchableOpacity>
                    <Text style={{color:"black",fontSize:15,fontWeight:"700",marginLeft:20,width:30}}>Buy </Text>
                    </TouchableOpacity>
                </View>


            </View>

        </View>
        
       

    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    imageContainer:{
        flex:0.45,
        marginTop:20,
        justifyContent:"center",
        alignItems:"center"

    },
    detailsContainer:{
        flex:0.5,
        backgroundColor:Colors.light,
        marginHorizontal:7,
        marginTop:20,
        borderRadius:10,
        paddingTop:30
    },

    line:{
        width:25,
        height:2,
        backgroundColor:Colors.dark,
        marginBottom:5,
        marginRight:3
    }
})

export default ViewClothes