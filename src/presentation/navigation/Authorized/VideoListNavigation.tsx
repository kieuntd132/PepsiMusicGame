import { createStackNavigator } from "@react-navigation/stack";
import { VideoListStackParamList } from "../stack/VideoListNavigation";
import VideoList from "../../container/Authorized/Home/VideoList";
import NotificationVideo from "../../container/Authorized/Notification/NotificationVideo";
import MyGiftVideo from "../../container/Authorized/Notification/MyGiftVideo";


const Stack = createStackNavigator<VideoListStackParamList>();

export const VideoListNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="VideoList" component={VideoList}/>
            <Stack.Screen name='NotificationVideo' component={NotificationVideo}/>
            <Stack.Screen name='MyGiftVideo' component={MyGiftVideo} />
        </Stack.Navigator>
    )
}