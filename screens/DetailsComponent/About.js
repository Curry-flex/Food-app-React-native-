import React from 'react'
import { Text, View ,Image} from 'react-native'
import { color } from 'react-native-reanimated'

const image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmidfQ_ihLTZYKOOr_g4MUBbbIsw42Xdmzdw&usqp=CAU"
const title ="Curryflex Restaurant"
const description ="curry flex best restaturant in tows"
const About = ({route}) => {
    const{name,image,reviews,categories,rating,price} =route.params

    const formatedCategories =categories.map((cat)=>cat.title).join( " • ")

    const description = `${formatedCategories} ${
        price ? " • " + price : ""
      } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    
    <View style={{marginBottom:10}}>
      <Immage image={image} />
      <Title title={name}/>
      <Description description={description} />
    </View>
  )
}

const Immage =(props)=>(
    <Image 
    source={{uri:props.image}}
    style={{
        width:"100%",
        height:180 
    }}
    />
)

const Title =(props)=>(
    <Text  style={{
        fontSize:30,
        fontWeight:"600",
        marginTop:10,
        marginHorizontal:15,
        color:"black"
        
    }}>
      {props.title}
    </Text>
)

const Description =(props)=>(
    <Text
    style={{
        marginTop:10,
        marginHorizontal:15,
        fontWeight:"400",
        fontSize:15.5,
        color:"black"
    }}
    >
      {props.description}
    </Text>
)

export default About