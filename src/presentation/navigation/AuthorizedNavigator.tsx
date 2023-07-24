import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions, Image, ImageBackground, StyleSheet, View } from "react-native";
import { BACKGROUND_TOOLBAR, CENTER_BUTTON, ICON_BEATLIST, ICON_BEATLIST_FOCUS, ICON_PROFILE, ICON_PROFILE_FOCUS, ICON_RANKING, ICON_RANKING_FOCUS, ICON_VIDEOLIST, ICON_VIDEOLIST_FOCUS } from "../../../assets";
import { Colors } from "../resource/value/Colors";
import VideoList from "../container/Authorized/Home/VideoList";
import BeatList from "../container/Authorized/Home/BeatList";
import StackScreen from "./StackScreen";
import RankingScreen from "./RankingScreen"
import Ranking from "../container/Authorized/Home/Ranking";
import Profile from "../container/Authorized/Home/Profile";
import Record from "../container/Authorized/Home/Record";
import Background from "../component/background/Background";
const Tab = createBottomTabNavigator();

export const AuthorizedNavigator = () => {

    return (
            <Tab.Navigator initialRouteName="Record"
                screenOptions={({ route }) => ({
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                        height: Dimensions.get('screen').height * 0.1,
                        justifyContent: "center",
                        backgroundColor: 'black',
                    },
                    tabBarItemStyle: {
                        marginBottom: Dimensions.get('screen').height * 0.03,
                    },
                    headerShown: false,
                    tabBarActiveTintColor: Colors.WHITE,
                    tabBarInactiveTintColor: Colors.BOTTOM_BAR,
                })}>
                <Tab.Screen name="VideoList" component={VideoList}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Image source={focused ? ICON_VIDEOLIST_FOCUS : ICON_VIDEOLIST} style={styles.image} />
                            </View>
                        ),
                        title: 'Video List',
                    }} />
                <Tab.Screen name="BeatList" component={StackScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Image source={focused ? ICON_BEATLIST_FOCUS : ICON_BEATLIST} style={styles.image} />
                            </View>
                        ),
                        title: 'Beat List',
                    }} />
                <Tab.Screen name="Record" component={Record}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    top: - Dimensions.get('screen').height * 0.03,
                                    borderRadius: 45,
                                    width: Dimensions.get('screen').width / 5,
                                }}>
                                <Image source={CENTER_BUTTON} style={styles.imageRecord} />
                            </View>
                        ),
                        title: 'Thu âm',
                    }} />
                <Tab.Screen name="Ranking" component={RankingScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Image source={focused ? ICON_RANKING_FOCUS : ICON_RANKING} style={styles.image} />
                            </View>
                        ),
                        title: 'Xếp hạng',
                    }} />
                <Tab.Screen name="Profile" component={Profile}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View>
                                <Image source={focused ? ICON_PROFILE_FOCUS : ICON_PROFILE} style={styles.image} />
                            </View>
                        ),
                        title: 'Cá nhân',
                    }} />
            </Tab.Navigator>
        // </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
    },
    imageRecord: {
        resizeMode: 'contain',
        height: Dimensions.get('screen').height * 0.13,
        marginStart: -Dimensions.get('screen').width * 0.23,
    },
    image: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.08
    },
});
