import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { BeatListStackParamList } from './StackNavigationBeatList';
import BeatList from '../container/Authorized/Home/BeatList';
import Notification from '../container/Authentication/Notification/Notification';
import Record from '../container/Authorized/Home/Record';
import BeatOutstand from '../container/Authorized/Home/BeatOutstand';
import MyGift from '../container/Authentication/Notification/MyGift';
import MostUsed from '../container/Authentication/BestList/MostUsed';
import RecordOne from '../container/Authorized/Remix/RecordOne';
import RecordedRecently from '../container/Authentication/BestList/RecordedRecently';
import Propose from '../container/Authentication/BestList/Propose';
import Ranking from '../container/Authorized/Home/Ranking';
import Remix from '../container/Authorized/Remix/Remix';
import AnimationEnd from '../container/Authorized/Remix/AnimationEnd';
import AnimationNext from '../container/Authorized/Remix/AnimationNext';
import AnimationSplash from '../container/Authorized/Remix/AnimationSplash';
import Search from '../container/Authorized/Remix/Search';
import Thanks from '../container/Authorized/Remix/Thanks';
const Stack = createStackNavigator<BeatListStackParamList>();

const StackScreen = () => {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName="BeatList">
        <Stack.Screen name="BeatList" component={BeatList} />
        <Stack.Screen name="Record" component={Record} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="MyGift" component={MyGift} />
        <Stack.Screen name="BeatOutstand" component={BeatOutstand} />
        <Stack.Screen name="MostUsed" component={MostUsed} />
        <Stack.Screen name="RecordOne" component={RecordOne} />
        <Stack.Screen name="RecordedRecently" component={RecordedRecently} />
        <Stack.Screen name="Propose" component={Propose} />

        <Stack.Screen name="Remix" component={Remix} />
        <Stack.Screen name="AnimationEnd" component={AnimationEnd} />
        <Stack.Screen name="AnimationNext" component={AnimationNext} />
        <Stack.Screen name="AnimationSplash" component={AnimationSplash} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Thanks" component={Thanks} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackScreen

const styles = StyleSheet.create({})