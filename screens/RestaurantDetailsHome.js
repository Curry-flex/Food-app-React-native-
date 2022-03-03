import React from 'react'

import { Text, TouchableOpacity, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import About from './DetailsComponent/About'
import MenuItem from './DetailsComponent/MenuItem'
import ViewCart from './DetailsComponent/ViewCart'

const RestaurantDetailsHome = ({route ,navigation}) => {

  const foods=[
    {
        title:"Soup",
        description:"Meat and chapati soup",
        price:"Tsh-3000",
        image:"https://img.taste.com.au/gKH2kAqD/taste/2016/11/easy-chicken-noodle-soup-23912-1.jpeg"
    },

    {
        title:"chicken masalla",
        description:"Very delicious chicken",
        price:"Tsh-6000",
        image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
    },

    {
        title:"Pizza",
        description:"Bes pizza to eat",
        price:"Tsh-3000",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKnAGueOJG0A-6QX5SmYO5FZAxyRABZjq9Q&usqp=CAU"
    },
    
    {
        title:"Pilau",
        description:"it is incredible dish",
        price:"Tsh-5000",
        image:"https://img.buzzfeed.com/thumbnailer-prod-us-east-1/9b3cd1b6c9f74e4e89604e94c3951bd0/BFV43575_PartyRiceAroundAfrica-FB-V2.jpg?output-format=auto&output-quality=auto&resize=600:*"
    },
    
    {
        title:"Biryan",
        description:"Curry flex bet biryan",
        price:"Tsh-3000",
        image:"https://m5.paperblog.com/i/81/810968/chicken-briyani-how-to-make-chicken-briyan-in-L-cDJAHX.jpeg"
    }
    ,
    {
        title:"Soup",
        description:"wali samaki wa bahari na jiuce baridi",
        price:"Tsh-5000",
        image:"https://img.taste.com.au/gKH2kAqD/taste/2016/11/easy-chicken-noodle-soup-23912-1.jpeg"
    }

]

  return (
    
   <SafeAreaView style={{backgroundColor:"#eee" ,flex:1}}>

 <View>
   
    <About route={route}/>
    <MenuItem restaurantName={route.params.name} foods={foods} marginRight={10}/>
    <ViewCart navigation={navigation} />
    <ViewCart  navigation={navigation}/>
    
    </View>

   </SafeAreaView>
  )
}

export default RestaurantDetailsHome