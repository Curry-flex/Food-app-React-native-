import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../color/color'
import { TextInput } from 'react-native-paper'
import  Icon  from 'react-native-vector-icons'
import Ionicons from "react-native-vector-icons/Ionicons"
import Categories from './Categories'
import clothes from '../Data/clothes'

const width =Dimensions.get("screen").width/2-30
const Home = ({navigation}) => {

    const Card=({Allclothes})=>{
          return(
              <TouchableOpacity
              onPress={()=>navigation.navigate("details",Allclothes)}
              >
        <View style={styles.card}>
          
            <View style={{alignItems:"flex-end"}}>
           <Ionicons name="heart" color="red" size={25}/> 
           </View>

           <View style={{height:100,alignItems:"center"}}>
            <Image 
            style={{
                flex:1,
                resizeMode:"contain"
            }}
             source={Allclothes.image}
            />
           </View>
           
            <Text style={styles.text}>{Allclothes.name}</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <Text style={styles.price}>Tsh {Allclothes.price}</Text>
                <View style={{
                    backgroundColor:Colors.green ,
                    height:30,
                    width:25,
                    justifyContent:"center",
                    alignItems:"center",
                    borderRadius:10}}>
                 <Text style={{fontSize:22,color:"white",fontWeight:"bold"}}>+</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
          )
    }
  return (
    <SafeAreaView
    style={{
      flex:1,
      paddingHorizontal:20,
      backgroundColor:Colors.white,
    }}
    >
    <View style={styles.header}>
       <View>
           <Text style={{fontSize:25 ,fontWeight:"bold" ,color:"black"}}>Welcome To</Text>
           <Text style={{fontSize:38,fontWeight:"bold",color:Colors.green}}>CurryFlex Shop</Text>
       </View>
       <Ionicons name="cart" color="black" size={28}/>
    
    </View>

    <View style={{flexDirection:"row" ,marginTop:30 }}>
        <View style={styles.search}>
            <Ionicons name="search" size={25} color="black"  style={{marginLeft:20}}/>
            
           <TextInput 
           placeholder="search"
           style={{
             flex:1,
             height:50
             
           }}
           />
        </View>
        <View style={styles.sort}>
            <Ionicons   name="cart" color="black" size={30}/>
        </View>
       
    </View>

    <Categories />
    <FlatList 
     numColumns={2}
     data={clothes}
     columnWrapperStyle={{justifyContent:"space-between"}}
     contentContainerStyle={{
         marginTop:10,
         paddingBottom:50
     }}
     renderItem={({item})=> <Card  Allclothes={item}/>}
    />

    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:30
    },

    search:{
        flex:1,
        height:50 ,
        backgroundColor:Colors.light,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center"
       
    },

    sort:{
        height:50,
        width:50,
        backgroundColor:Colors.green,
        marginLeft:5,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
       
    },

    card:{
       height:225,
       backgroundColor:Colors.light,
       width,
       marginHorizontal:2,
       marginBottom:20,
       padding:15,
       borderRadius:10
       

    },
    text:{
        color:"black",
        fontSize:18,
        marginTop:20,
        fontWeight:"700"
    },
    price:{
        color:"black",
        fontSize:18,
        marginTop:10,
        fontWeight:"700"
    }
})

export default Home