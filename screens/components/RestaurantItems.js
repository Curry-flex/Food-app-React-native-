import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const RestaurantItems = ({restaurantsData,navigation}) => {
  return (
    <>
      {
          restaurantsData.map((restaurant,index)=>(
            <TouchableOpacity activeOpacity={0.8} style={{marginBottom:30}}
             onPress={() => navigation.navigate("RestaurantDetails",
             {
               name:restaurant.name,
               image:restaurant.image_url,
               price:restaurant.price,
               reviews:restaurant.review_count,
               rating:restaurant.rating,
               categories:restaurant.categories
             }
             )}
            >
            <View key={index} style={{marginTop:10,padding:10,backgroundColor:"white"}}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo  name={restaurant.name} />
            </View>
            </TouchableOpacity>
          ))
      }
   </>
  )
}

const RestaurantImage =({image})=>{
   return(
       <>
       <Image
        source={{uri:image}}
        style={{
            width:"100%",
            height:180
        }}
       />

       <TouchableOpacity
       style={{
          position:"absolute",
          right:20,
          top:20 
       }}
       >
          <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
       </TouchableOpacity>
       </>
   )
}

const RestaurantInfo=({name})=>(
    <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:10
    }}>
       <View>
       <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>{name}</Text>
        <Text style={{color:"black" ,color:"gray"}}>40-35 min</Text>
       </View>
       <View style={{height:30,width:30 
       ,backgroundColor:"#eee",
       justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    }}>
       <Text style={{color:"black"}}>4.5</Text>
       </View>
       
    </View>
)

export default RestaurantItems