import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Rating from '../../container/Authorized/Rating/Rating';
import NotificationRanking from '../../container/Authorized/Notification/NotificationRanking';
import MyGiftRanking from '../../container/Authorized/Notification/MyGiftRanking';
import Top from '../../container/Authorized/Rating/Top';
import ProfileRecord from '../../container/Authorized/Rating/ProfileRecord';
import VideoListProfile from '../../container/Authorized/Rating/VideoListProfile';
import { ChartStackParamList } from '../Stack/RankingNavigation';
const Stack = createStackNavigator<ChartStackParamList>();

const RankingNavigation = () => {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName="Rating">
        <Stack.Screen name="Rating" component={Rating} />
        <Stack.Screen name="Top" component={Top} />
        <Stack.Screen name="NotificationRanking" component={NotificationRanking} />
        <Stack.Screen name="MyGiftRanking" component={MyGiftRanking} />
        <Stack.Screen name="ProfileRecord" component={ProfileRecord} />
        <Stack.Screen name="VideoListProfile" component={VideoListProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RankingNavigation

const styles = StyleSheet.create({})