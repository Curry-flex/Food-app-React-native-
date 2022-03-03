import React from 'react'
import { StyleSheet, Text ,Image, ScrollView } from 'react-native'
import { View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Divider } from 'react-native-elements'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
//import { Image } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'



const MenuItem = ({restaurantName,hideCheckbox,marginLeft ,foods}) => {
    const dispatch = useDispatch()

const selectItem =(item,checkboxValue)=> dispatch({
    type:"ADD_TO_CART",
    payload:{...item,
        restaurantName:restaurantName,
        checkboxValue:checkboxValue}
    

}

)

const cartItems = useSelector((state) =>state.cartReducer.selectedItems.items)

const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {
        foods.map((food,index)=>(
         <View>
             <View key={index} style={styles.menuItemStyle}>
                 {hideCheckbox ? (<></>):(
                   <BouncyCheckbox 
                   iconStyle={{borderColor:"lightgray" ,borderRadius:0}}
                   fillColor="green"
                   onPress={(checkboxValue) => selectItem(food,checkboxValue)}
                   isChecked={isFoodInCart(food,cartItems)}
                   />  
                 )}
              
            <FoodInfo foodTitle={food.title} foodDescription={food.description} foodPrice={food.price} />
            <FoodImage image={food.image} marginLeft={marginLeft ? marginLeft: 0}/>
           </View>

           <Divider
           width={0.5}
           orientation="vertical"

           style={{
               marginHorizontal:20
           }}
           />
         </View>

        ))
    }
  </ScrollView>
  )
}

const styles = StyleSheet.create({
    menuItemStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:20,
    
        
    },
    text:{
        color:"black"
    },

    title:{
        fontSize:19,
        fontWeight:"600"
    }

})

const FoodInfo=({foodTitle,foodDescription,foodPrice})=>(
  <View style={{width:240 ,justifyContent:"space-evenly"}}>
      <Text style={[styles.text,styles.title]} >{foodTitle}</Text>
      <Text  style={styles.text}>{foodDescription}</Text>
      <Text  style={styles.text}>{foodPrice}</Text>
  </View>
)

const FoodImage =({image,marginLeft})=>(
    <View>
        <Image
        source={{uri:image}}
        style={{
            width:100,
            height:100,
            borderRadius:8,
            marginLeft:marginLeft
           
        }}
        />
    </View>
)

export default MenuItem