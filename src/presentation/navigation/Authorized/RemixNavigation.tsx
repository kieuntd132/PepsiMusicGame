import { createStackNavigator } from "@react-navigation/stack";
import { RemixStackParamList } from "../stack/RemixNavigation";
import RecordOne from "../../container/Authorized/Remix/RecordOne";
import Remix from "../../container/Authorized/Remix/Remix";
import AnimationSplash from "../../container/Authorized/Remix/AnimationSplash";
import AnimationEnd from "../../container/Authorized/Remix/AnimationEnd";
import AnimationNext from "../../container/Authorized/Remix/AnimationNext";
import Thanks from "../../container/Authorized/Remix/Thanks";
import Search from "../../container/Authorized/Remix/Search";

const Stack = createStackNavigator<RemixStackParamList>();

export const RemixNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
           
            <Stack.Screen name='RecordOne' component={RecordOne}/>
            <Stack.Screen name='Remix' component={Remix} />
            <Stack.Screen name='AnimationSplash' component={AnimationSplash} />
            <Stack.Screen name='AnimationNext' component={AnimationNext} />
            <Stack.Screen name='AnimationEnd' component={AnimationEnd} />
            <Stack.Screen name='Search' component={Search} />
            <Stack.Screen name='Thanks' component={Thanks} />
        </Stack.Navigator>
    )
}