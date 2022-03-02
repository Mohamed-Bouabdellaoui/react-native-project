import React,{useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Button,
    TextInput,
    useColorScheme,
    View,
  } from 'react-native';
  const Login=({navigation})=>{

    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");

    const login=async()=>{
      if(email && pass){
        await fetch("http://172.16.1.155/api/login.php",{
          method:"POST",
          body:JSON.stringify({
            email:email,
            password:pass
          })
        }).then(res=>{
          return res.json()
        }).then(d=>{
          if(d.success==1){
            navigation.navigate("home",{
              name:d.token
            });
          }else{
            alert(d.message)
          }
        })
      }
    }
  
    return(
        <ScrollView>
        <View style={styles.maincontent}>
          <View>
          <TextInput style={styles.input} 
         onChangeText={e=>setemail(e)} placeholder='your email '></TextInput>
         <TextInput 
         
         onChangeText={e=>setpass(e)}
         style={styles.input} 
         placeholder='your password'
         ></TextInput>
        
           <Button 
        onPress={()=>login()}
         title="LOGIN" color='black'
          />
            <View style={styles.btnmain}><Button onPress={()=>navigation.navigate("register")}
        
         title="Sign Up" color='black'
         /></View>
         
          </View>
        </View>
        </ScrollView>
  
    )
  }
  
  const styles=StyleSheet.create({
    maincontent : {
     marginTop : 160 ,
     marginLeft : 20 ,
     marginRight : 20 ,
    },
    input : {
      borderBottomColor : 'black' ,
      borderBottomWidth : 1 ,
      marginBottom : 20 , 
    },
    btnmain : {
    marginTop : 20 ,
    }
  
    
  })
  
  export default Login;

