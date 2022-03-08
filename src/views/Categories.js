import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../color/color'

const Categories = () => {
    const categories=["Men","Women","Kids","Sport"]
    const [selectCategoryIndex,setSelectedCategoryIndex] =useState(0)
  return (
    <View style={styles.category}>
      {
          categories.map((category,index)=>(
              <TouchableOpacity
              activeOpacity={0.7}
              key={{index}}
              onPress={() => setSelectedCategoryIndex(index)}
              >
              <Text style={[styles.catText ,selectCategoryIndex ==index && styles.selectedCategory]}>{category}</Text>
              </TouchableOpacity>
          ))
      }
    </View>
  )
}

const styles=StyleSheet.create({
    category:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:40,
        marginBottom:20
    },

    catText:{
        fontSize:18,
        color:"black",
        fontWeight:"700"
    },
    selectedCategory:{
    color:Colors.green,
    paddingBottom:5,
    borderBottomWidth:2,
    borderBottomColor:Colors.green
    }
})

export default Categories