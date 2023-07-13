import React from 'react'
import LogIn from './src/presentation/container/Authentication/LogIn/LogIn'
import { StyleSheet } from 'react-native'
import LogInOTP from './src/presentation/container/Authentication/LogIn/LogInOTP'
import LogInSplash from './src/presentation/container/Authentication/LogIn/LogInSplash'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './src/presentation/navigation/Navigation'
import SplashScreen from './src/presentation/container/Authen/Splash/SplashScreen'
const Stack = createStackNavigator<MainStackParamList>();


const App = () => {
  return (
    // <SplashScreen/>
    // <LogIn/>
    // <LogInOTP/>
    // <LogInSplash/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="SplashScreen">
        <Stack.Screen name='SplashScreen'component={SplashScreen}/>
        <Stack.Screen name='LogInSplash' component={LogInSplash} />
        <Stack.Screen name='LogIn' component={LogIn} />
        <Stack.Screen name='LogInOTP' component={LogInOTP} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})