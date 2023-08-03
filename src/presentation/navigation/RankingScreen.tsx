import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { BeatListStackParamList } from './BeatListNavigation';
import Notification from '../container/Authentication/Notification/Notification';
import MyGift from '../container/Authentication/Notification/MyGift';
import RecordOne from '../container/Authorized/Remix/RecordOne';
import Ranking from '../container/Authorized/Home/Ranking';
import Record from '../container/Authorized/Home/Record';
import BeatList from '../container/Authorized/Home/BeatList';
import Rating from '../container/Authorized/Remix/Rating';
const Stack = createStackNavigator<BeatListStackParamList>();

const RankingScreen = () => {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName="Rating">
        <Stack.Screen name="Rating" component={Rating} />
        <Stack.Screen name="Record" component={Record} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="BeatList" component={BeatList} />
        <Stack.Screen name="MyGift" component={MyGift} />
        <Stack.Screen name="RecordOne" component={RecordOne} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RankingScreen

const styles = StyleSheet.create({})