import React,{useState,useEffect} from 'react'
import { Button, ScrollView, TextInput, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomTab from './components/BottomTab'
import Category from './components/Category'

import Header from './components/Header'
import RestaurantItems from './components/RestaurantItems'
import SerchBar from './components/SerchBar'
import  Restaurant from './components/Service'

const YELP_API_KEY="M4wLoYK4kg5xP72DjgG3TYQRD0xDPl0traJ6WyKBq80_gyqcrt2H-AQ1qpfDJJvsTiHBUoeY2R57UfZnABGkNW9QVrdUxFeWYUu6lGa1zHgVHUXBUoT4A6QqozYdYnYx"

const Home = ({navigation}) => {
  const[restaurantsData ,setRestaurantData] =useState([])
  const [activeTab ,setActiveTab] =useState("Delivery")
  const [city,setCity] =useState('Miami')
 
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((businesses)=>
          businesses.transactions.includes(activeTab.toLowerCase())
          ))
        )
      
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [activeTab]);


  return (
    <SafeAreaView style={{backgroundColor:"#eee",flex:1}}>
        <View style={{backgroundColor:"white",padding:15}}>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />

        <View >
         <SerchBar />
           </View>

        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Category />
        <RestaurantItems restaurantsData={restaurantsData} navigation={navigation} /> 
        </ScrollView>
        
        <Divider width={1}/>
        <BottomTab />
       
    </SafeAreaView>

   
  )
}

export default Home