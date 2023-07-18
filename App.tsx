import React from 'react'
import LogIn from './src/presentation/container/Authentication/LogIn/LogIn'
import { StyleSheet } from 'react-native'
import LogInOTP from './src/presentation/container/Authentication/LogIn/LogInOTP'
import RegisterSplash from './src/presentation/container/Authentication/Register/RegisterSplash'
import LogInSplash from './src/presentation/container/Authentication/LogIn/LogInSplash'
import Register from './src/presentation/container/Authentication/Register/Register'
import RegisterOTP from './src/presentation/container/Authentication/Register/RegisterOTP'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './src/presentation/navigation/StackNavigation'
import SplashScreen from './src/presentation/container/Authentication/Splash/SplashScreen'
import Instruct from './src/presentation/container/Authentication/ScreenSplash/Instruct'
import Rules from './src/presentation/container/Authentication/ScreenSplash/Rules'
import BeatOutstand from './src/presentation/container/Authorized/Home/BeatOutstand'
import MostUsed from './src/presentation/container/Authentication/BestList/MostUsed'
import RecordedRecently from './src/presentation/container/Authentication/BestList/RecordedRecently'
import Propose from './src/presentation/container/Authentication/BestList/Propose'
import Notification from './src/presentation/container/Authentication/Notification/Notification'
import MyGift from './src/presentation/container/Authentication/Notification/MyGift'
import Thanks from './src/presentation/container/Authorized/Remix/Thanks'
import Record from './src/presentation/container/Authorized/Home/Record'
import { AuthorizedNavigator } from './src/presentation/navigation/AuthorizedNavigator'


const Stack = createStackNavigator<MainStackParamList>();


const App = () => {
  return (
    // <SplashScreen/>
    // <LogIn/>
    // <LogInOTP/>
    // <LogInSplash/>
    // <Rule/>
    // <Instruct />
    // <BeatOutstand/>
    // <MostUsed />
    // <RecordedRecently/>
    // <Propose />
    //<Notification/>
    // <Thanks/>
    // <MyGift />
    // <Record/>
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="SplashScreen">
        <Stack.Screen name='SplashScreen'component={SplashScreen}/>
        <Stack.Screen name='Instruct'component={Instruct}/>
        <Stack.Screen name='Rules'component={Rules}/>
        <Stack.Screen name='LogInSplash' component={LogInSplash} />
        <Stack.Screen name='LogIn' component={LogIn} />
        <Stack.Screen name='RegisterSplash' component={RegisterSplash} />
        <Stack.Screen name='RegisterOTP' component={RegisterOTP} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='LogInOTP' component={LogInOTP} />
        <Stack.Screen name='BeatOutstand' component={BeatOutstand} />
      </Stack.Navigator> */}
      <AuthorizedNavigator/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})