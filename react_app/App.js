import React from 'react';
import Login from './component/Login';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './component/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
} from 'react-native';
import Welcome from './component/Welcome';

const Stack = createNativeStackNavigator();

const App=()=>{
  return(
  //  <View>
  //    <Text>hem</Text>
  //  </View>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="login" component={Login} />
          <Stack.Screen options={{headerShown:false}} name="register" component={Signup} />
          <Stack.Screen options={{headerShown:false}} name="home" component={Welcome} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}


export default App;
