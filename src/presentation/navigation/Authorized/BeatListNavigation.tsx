import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { BeatListStackParamList } from '../Stack/BeatListNavigation';
import BeatList from '../../container/Authorized/Home/BeatList';
import Notification from '../../container/Authorized/Notification/Notification';
import Record from '../../container/Authorized/Home/Record';
import MyGift from '../../container/Authorized/Notification/MyGift';
import MostUsed from '../../container/Authorized/BestList/MostUsed';
import RecordedRecently from '../../container/Authorized/BestList/RecordedRecently';
import Propose from '../../container/Authorized/BestList/Propose';
import NewBeat from '../../container/Authorized/BestList/NewBeat';
const Stack = createStackNavigator<BeatListStackParamList>();

const StackScreen = () => {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName="BeatList">
        <Stack.Screen name="BeatList" component={BeatList} />
        <Stack.Screen name="Record" component={Record} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="MyGift" component={MyGift} />
        <Stack.Screen name="NewBeat" component={NewBeat} />
        <Stack.Screen name="MostUsed" component={MostUsed} />
        <Stack.Screen name="RecordedRecently" component={RecordedRecently} />
        <Stack.Screen name="Propose" component={Propose} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackScreen

const styles = StyleSheet.create({})