import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MainStackParamList} from "../stack/Navigation";
import { MainTabNavigation, MainTabParamList } from "../tab/TabNavigation";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { CENTER_BUTTON, VIDEO_SQUARE, VIDEO_SQUARE_FOCUS, CHART, CHART_FOCUS, PROFILE, PROFILE_FOCUS, MUSIC, MUSIC_FOCUS, ICON_HOME } from "../../../../assets";
import { Colors } from "../../resource/value/Colors";
import { useSelector } from "react-redux";
import { userSelecter } from "../../share-state/redux/reducers/userReducer";
const Tab = createBottomTabNavigator();
import Record from "../../container/Authorized/Home/Record";
export const AuthorNavigation = () => {

    const data = useSelector(userSelecter);

    console.log(" AuthorNavigation :")
    console.log(data.keyUser)

    return (
        <Tab.Navigator initialRouteName={ "Record"}
        detachInactiveScreens  = {false}
        backBehavior="initialRoute"
        screenOptions={({ route }) => ({
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                height: Dimensions.get('screen').height * 0.1,
                justifyContent: "center",
                backgroundColor: Colors.BLUE_PEPSI,
            },
            tabBarItemStyle: {
                marginBottom: Dimensions.get('screen').height * 0.03,
            },
            headerShown: false,
            tabBarActiveTintColor: Colors.WHITE,
            tabBarInactiveTintColor: Colors.BOTTOM_BAR,
        })}>
        <Tab.Screen name="MainVideoList" component={VideoListNavigation}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={focused ? VIDEO_SQUARE_FOCUS: VIDEO_SQUARE} style={styles.image}/>
                    </View>
                ),
                title: 'Video List',
            }} />
        <Tab.Screen name="RecordOne" component={RecordOne}
            options={{
                tabBarButton: () => undefined
        }} />
        <Tab.Screen name="BeatList" component= {BeatNavigation}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={focused? MUSIC_FOCUS : MUSIC} style={styles.image}/>
                    </View>
                ),
                title: 'Best List',
            }} />
        <Tab.Screen name="Record" component={RemixNavigation}
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
                tabBarStyle: {
                    display: 'none',
                }
            }} />
        <Tab.Screen name="Ranking" component={RankingNavigation}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={focused ? CHART_FOCUS : CHART} style={styles.image}/>
                    </View>
                ),
                title: 'Xếp hạng',
            }} />
        <Tab.Screen name="Profile" component={ProfileNavigation}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={focused ? PROFILE_FOCUS : PROFILE} style={styles.image}/>
                    </View>
                ),
                title: 'Cá nhân',
            }} />
    </Tab.Navigator>
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
        width: Dimensions.get('screen').width * 0.08,
        marginTop: Dimensions.get('screen').height * 0.03,
    },
});
