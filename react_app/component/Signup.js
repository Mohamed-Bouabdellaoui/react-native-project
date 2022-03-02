import React, { useState } from 'react';
import {
    
    ScrollView,
    StyleSheet,
    Text,
    Button, 
    TextInput,
    View,
  } from 'react-native';
  const Signup=({navigation})=>{

    const [email,setemail]=useState("");
    const [name,setname]=useState("");
    const [pass,setpass]=useState("");
  

   const InsertRecord=async()=>
   {
     if(name.length==0 || email.length==0 || pass.length==0){
      alert("fieled is messing");
     }else{
      //  alert("fetch api");
      await fetch("http://172.16.1.155/api/register.php",{
        method:"POST",
        body:JSON.stringify({
          name:name,
          email:email,
          password:pass
        })
      }).then(res=>{
        return res.json();
      }).then(data=>{
        alert(data.message)
      })
      .catch(e=>{
        console.log(e);
      })
      
     }
   }
  
    return(
        <ScrollView>
        <View style={styles.maincontent}>
          <View>
        <TextInput
         style={styles.input} placeholder='your username'
         onChangeText={n=>setname(n)}
         
         />
         <TextInput 
         style={styles.input} 
         placeholder='your email'
         onChangeText={e=>setemail(e)}
        
         />
          <TextInput 
         style={styles.input} 
         placeholder='your password'
         secureTextEntry
         onChangeText={p=>setpass(p)}
         />
    
           <Button 
          title="Signup" color='black'
          onPress={()=>InsertRecord() }
          />
          <View style={styles.btnmain}> 
           <Button onPress={()=>navigation.navigate("login")} title="login" color='black'/>
           </View>
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
  
  export default Signup;

