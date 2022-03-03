import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import LottieView from "lottie-react-native"
import db from './firebase';
import MenuItem from './DetailsComponent/MenuItem';

const OrderComplete = () => {

  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });
    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
      );
    
      const total =items.map((item)=>Number(item.price.replace("Tsh-","")))
      .reduce((prev,curr)=>prev + curr ,0)
    
        const totalTsh = total.toLocaleString("en",{
        style:"currency",
        currency:"Tsh"
        }) 
   
        useEffect(() => {
         
          const unsubscribe = db
            .collection("Orders").limit(2).onSnapshot((snapshot) => {
              snapshot.docs.map((doc) => {
                setLastOrder(doc.data());
              });
            });
    
          return () => unsubscribe();
        }, []);
       

  return (
    <SafeAreaView style={{flex:1 ,backgroundColor:"white"}}>
    <View
    style={{
      margin: 15,
      alignItems: "center",
      height: "100%",
    }}
    >
   
    <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />

        <Text style={{color:"black",fontSize:20 ,fontWeight:"bold"}}>Your order at restaurant {restaurantName} complete with total {total}</Text>

        <ScrollView>
        <MenuItem
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />

        <LottieView
          style={{ height: 200, alignSelf: "center"}}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
         
        />
        </ScrollView>
        
     </View>
    </SafeAreaView>
  )
}

export default OrderComplete