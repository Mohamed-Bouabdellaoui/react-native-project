
import React, { useState } from 'react';
import {
    
    ScrollView,
    StyleSheet,
    Text,
    Button, 
    TextInput,
    View,
  } from 'react-native';

const Welcome=({route,navigation})=>{
    const {name}=route.params;
    return(
        <View  ><Text style={styles.welcome}>welcome {name}</Text>
        <Button onPress={()=>navigation.navigate("register")} title="log out" color='black'/>
        </View>
    )
 
}
const styles=StyleSheet.create({
    welcome : {
        marginTop : 20 ,
        marginLeft : 20 ,
        fontSize: 20,
        fontWeight: "bold",
        color :' black '
      
       }



})

  
  export default Welcome;

