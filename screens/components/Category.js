import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

const Category = () => {

    const items =[
        {
            image:require('../assets/images/coffee.png'),
             text:"Pick-up"
        },

        {
            image:require("../assets/images/bread.png"),
             text:"Backery items"
        },

        {
            image:require("../assets/images/soft-drink.png"),
             text:"Soft drinks"
        },

        {
            image:require("../assets/images/fast-food.png"),
             text:"Fast food"
        },

        {
            image:require("../assets/images/deals.png"),
             text:"Deals"
        },

        {
            image:require("../assets/images/coffee.png"),
             text:"Coffee"
        }

    ]
  return (
    <View style={{
        magrinTop:5,
        backgroundColor:"#fff",
        paddingVertical:10,
        paddingLeft:20

    }}>
     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
          items.map((item,index)=>(
              <View key={index} style={{alignItems:'center' ,marginRight:30}}>
                  <Image
                   source={item.image}

                   style={{
                       width:50,
                       height:40,
                       resizeMode:"contain"
                   }}
                  />
                  <Text style={{fontSize:13, fontWeight:"900", color:"black"}}>{item.text}</Text>
              </View>
          ))
      }
     </ScrollView>
    </View>
  )
}

export default Category