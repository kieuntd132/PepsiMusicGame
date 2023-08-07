import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../container/Authentication/Splash/SplashScreen";
import Instruct from "../../container/Authentication/ScreenSplash/Instruct";
import Rules from "../../container/Authentication/ScreenSplash/Rules";
import LogInSplash from "../../container/Authentication/LogIn/LogInSplash";
import LogIn from "../../container/Authentication/LogIn/LogIn";
import RegisterSplash from "../../container/Authentication/Register/RegisterSplash";
import RegisterOTP from "../../container/Authentication/Register/RegisterOTP";
import Register from "../../container/Authentication/Register/Register";
import LogInOTP from "../../container/Authentication/LogIn/LogInOTP";
import { MainStackParamList } from "../Stack/LoginNavigation";

const Stack = createStackNavigator<MainStackParamList>();
export const AuthenNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='Instruct' component={Instruct} />
            <Stack.Screen name='Rules' component={Rules} />
            <Stack.Screen name='LogInSplash' component={LogInSplash} />
            <Stack.Screen name='LogIn' component={LogIn} />
            <Stack.Screen name='RegisterSplash' component={RegisterSplash} />
            <Stack.Screen name='RegisterOTP' component={RegisterOTP} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='LogInOTP' component={LogInOTP} />
        </Stack.Navigator>
    )
}