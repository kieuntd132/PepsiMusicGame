import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../../container/Authorized/Home/Profile";
import VideoList from "../../container/Authorized/Home/VideoList";
import Record from "../../container/Authorized/Home/Record";
import { ProfileParamList } from "../stack/ProfileNavigation";

const Stack = createStackNavigator<ProfileParamList>();

export const ProfileNavigation = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='VideoList' component={VideoList}/>
            <Stack.Screen name='Record' component={Record}/>
        </Stack.Navigator>
    )
}