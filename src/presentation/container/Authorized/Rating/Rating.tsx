import { MaterialTopTabBarProps, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Dimensions, StyleSheet, ImageBackground, ScrollView, Text, View, FlatList, Image, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Background from '../../../component/background/Background';
import Header from '../../../component/header/Header';
import { BACKGROUND_RANK, ICON_HOME, ICON_NOTIFICATION, IMAGE_BUC, IMAGE_RANK_1, IMAGE_RANK_2, IMAGE_RANK_3, IMAGE_RANK_4 } from '../../../../../assets';
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { Colors } from '../../../resource/value/Colors';
import { CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileRecord from './ProfileRecord';
import VideoListProfile from './VideoListProfile';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BeatListStackScreenProps } from '../../../navigation/Stack/BeatListNavigation'
import Ranking from './Ranking';

type ProfileRecordProps = {
    id: number;
};

type VideoListProfileProps = {
    id: number;
}

type Ranking = {
    id: number;
}

type TopProps = {
    id: number;
};

type TopViewProps = {

};
type RakingViewProps = {

};
export type MaterialTopTab = {
    TopView: TopViewProps | undefined;
    RankingView: RakingViewProps | undefined;
}

export type StackTopView = {
    Top: TopProps | undefined;
    ProfileRecord: ProfileRecordProps | undefined;
    VideoListProfile: VideoListProfileProps | undefined;
}

export type StackRankingView = {
    Ranking:  Ranking| undefined;
    ProfileRecord: ProfileRecordProps | undefined;
    VideoListProfile: VideoListProfileProps | undefined;
}



const Tab = createMaterialTopTabNavigator<MaterialTopTab>();
const StackTopView = createStackNavigator<StackTopView>();
const StackRankingView = createStackNavigator<StackRankingView>();


const TopView = () => {
    return (
        <StackTopView.Navigator screenOptions={{ headerShown: false }} initialRouteName='Top'>
            <StackTopView.Screen name="Top" component={Top} />
            <StackTopView.Screen name="ProfileRecord" component={ProfileRecord} />
            <StackTopView.Screen name="VideoListProfile" component={VideoListProfile} />
        </StackTopView.Navigator>
    )
}
const RankingView = () => {
    return (
        <StackRankingView.Navigator screenOptions={{ headerShown: false }} initialRouteName='Ranking'>
            <StackRankingView.Screen name="Ranking" component={Ranking} />
            <StackRankingView.Screen name="ProfileRecord" component={ProfileRecord} />
            <StackRankingView.Screen name="VideoListProfile" component={VideoListProfile} />
        </StackRankingView.Navigator>
    )
}


const Top = () => {
    interface Item {
        id: number,
        name: string,
        rank: number,
        image: any,
        view: number,
        imageEye: any,
    }

    const DATA: Item[] = [
        { id: 1, name: 'Janne', rank: 4, image: require("../../../../../assets/avatar.png"), view: 9.023, imageEye: require("../../../../../assets/eye.png") },
        { id: 2, name: 'Janne', rank: 5, image: require("../../../../../assets/avatar.png"), view: 9.023, imageEye: require("../../../../../assets/eye.png") },
        { id: 3, name: 'Janne', rank: 6, image: require("../../../../../assets/avatar.png"), view: 9.023, imageEye: require("../../../../../assets/eye.png") },
        { id: 4, name: 'Janne', rank: 7, image: require("../../../../../assets/avatar.png"), view: 9.023, imageEye: require("../../../../../assets/eye.png") },
        { id: 5, name: 'Janne', rank: 8, image: require("../../../../../assets/avatar.png"), view: 9.023, imageEye: require("../../../../../assets/eye.png") },
        { id: 6, name: 'Janne', rank: 9, image: require("../../../../../assets/avatar.png"), view: 9.023, imageEye: require("../../../../../assets/eye.png") },
        { id: 7, name: 'Janne', rank: 10, image: require("../../../../../assets/avatar.png"), view: 9.023, imageEye: require("../../../../../assets/eye.png") },


    ];
    const goProfile = () => {
        // navigation.navigate('ProfileRecord');
    }
    const Notification = () => {
        // navigation.navigate('Record');
    }
    const renderItem = ({ item }: { item: Item }) => (
        <View>
            <TouchableOpacity style={styles.item} onPress={goProfile}>
                <View style={styles.borderRank} >
                    <Text style={styles.txt} >{item.rank}</Text>
                    <Image source={IMAGE_RANK_4} style={styles.imgBorderRank} />
                </View>
                <View style={styles.boxContent} >
                    <Image source={item.image} style={styles.imgAvatar} />
                    <View style={styles.boxInfor}>
                        <Text style={styles.txtName}>{item.name}</Text>
                        <View style={styles.boxView}>
                            <Image source={item.imageEye} />
                            <Text style={styles.txtView}>{item.view}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );


    return (
        <Background>
            <View style={styles.container1}>
                <ImageBackground style={{ width: Dimensions.get('screen').width, paddingHorizontal: 22 }} source={BACKGROUND_RANK}>
                    <View style={styles.boxTop}>
                        <Text style={styles.txtTop}>Hạng của tôi : <Text style={styles.txtRank}>1000000</Text></Text>
                    </View>
                    <View style={styles.boxRanks}>
                        <View style={styles.boxRank}>
                            <View style={styles.boxRank2}>
                                <Image source={IMAGE_RANK_2} style={styles.imgRank2} />
                                <Text style={styles.textName2}>Bruno</Text>
                                <Text style={styles.textView}>1.2tr lượt xem</Text>
                            </View>
                            <View style={styles.boxRank1}>
                                <Image source={IMAGE_RANK_1} style={styles.imgRank1} />
                                <Text style={styles.textName1}>Bruno</Text>
                                <Text style={styles.textView}>1.2tr lượt xem</Text>
                            </View>
                            <View style={styles.boxRank3}>
                                <Image source={IMAGE_RANK_3} style={styles.imgRank3} />
                                <Text style={styles.textName3}>Bruno</Text>
                                <Text style={styles.textView}>1.2tr lượt xem</Text>
                            </View>
                        </View>
                        <Image source={IMAGE_BUC} style={styles.imgBuc} />
                    </View>
                </ImageBackground>
                <FlatList
                    style={{ marginBottom: Dimensions.get('screen').height * 0.22 }}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    
                />

            </View>

        </Background>


    )
};
type CustomTabBarProps = {
    state: any;
    descriptors: any;
    navigation: any;
};

const CustomTabBar = ({ state, descriptors, navigation }: CustomTabBarProps) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: isFocused ? '#FFFFFF' : '#215EAC',
                            borderRadius: 6,
                            marginHorizontal: 5,
                            height: Dimensions.get('window').height * 0.05,
                            width: Dimensions.get('window').width * 0.55,
                        }}
                    >
                        <Text
                            style={{
                                color: isFocused ? '#215EAC' : '#FFFFFF',
                                fontFamily: 'Montserrat',
                                fontSize: 12,
                                fontWeight: '500',
                                lineHeight: 18,
                                padding: 2,
                            }}
                        >
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>

    );
};

const Rating = () => {
   
  
    const goBack = () => {
        // navigation.dispatch(CommonActions.goBack());
    }

    // return(
    //     <NavigationContainer independent={true}>
    //         <Tab.Navigator>
    //            <Tab.Screen name="TopView" component={TopView}/> 
    //            <Tab.Screen name="RankingView" component={RankingView}/> 
    //         </Tab.Navigator>
    //     </NavigationContainer>
    // )
    return (
        <Background>
            <Header
                iconLeft={ICON_HOME}
                // leftHeader={goBack}
                centerHeader={"Nhạc thịnh hành"}
                iconRight={ICON_NOTIFICATION}
            // rightHeader={goNotification}
            />
            <NavigationContainer independent={true}>
                <Tab.Navigator
                    //      tabBar={(props: any) => (
                    //         <CustomTabBar {...props} />
                    // //         <ScrollView
                    // //             style={{ backgroundColor: 'red' }}
                    // //             horizontal={true}>
                    // //             <CustomTabBar {...props} />
                    // //         </ScrollView>
                    //     )
                    // }


                    screenOptions={{
                        tabBarScrollEnabled: true,
                        tabBarStyle: {
                            backgroundColor: 'transparent',
                            marginHorizontal: -13,
                        },

                        tabBarLabelStyle: {
                            fontSize: 12,
                            textTransform: 'capitalize',
                            borderRadius: 6,
                            paddingVertical: 10,
                            paddingHorizontal: 30,
                        },

                        tabBarActiveTintColor: Colors.BLACK,
                        tabBarInactiveTintColor: Colors.WHITE,
                        tabBarItemStyle: {
                            width: 290,
                        },
                        tabBarIndicatorStyle: {
                            backgroundColor: 'transparent'
                        },
                    }}
                >
                    <Tab.Screen
                        name="TopView"
                        component={TopView}
                        options={{ tabBarLabel: 'Người có lượt tương tác nhiều nhất', lazy: true, }}
                    />
                    <Tab.Screen
                        name="RankingView"
                        component={RankingView}
                        options={{ tabBarLabel: 'Video có lượt tương tác nhiều nhất', lazy: true }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Background>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: Dimensions.get('screen').scale * 5,
    },
    header_1: {
        marginTop: Dimensions.get('window').height * 0.04,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontWeight: '600',
        fontSize: 18,
        color: Colors.WHITE,
        textAlign: 'center',
    },
    toptab: {
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: Colors.WHITE_BORDER3,
        borderColor: Colors.WHITE_BORDER3,
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.05,
        marginHorizontal: Dimensions.get('screen').width * 0.05,
        marginVertical: Dimensions.get('screen').height * 0.015,
    },
    texttab: {
        fontFamily: 'Monterrat',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: Colors.WHITE,
        paddingVertical: Dimensions.get('screen').width * 0.02,
    },
    gr: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.SOLID,
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.25,
        marginHorizontal: Dimensions.get('screen').width * 0.05,
        marginBottom: Dimensions.get('screen').height * 0.015,
    },
    txtID: {
        fontFamily: 'Monterrat',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        color: Colors.WHITE,
        position: 'absolute',
        top: -1,
        left: 8,
    },
    img1: {
        position: 'relative',
        width: Dimensions.get('screen').width * 0.895,
        height: Dimensions.get('screen').height * 0.247,
        borderWidth: 1,
        borderRadius: 8,
    },
    imgGoc: {
        position: 'absolute',
        top: -1,
        left: -1,
    },
    grbottom: {
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        position: 'absolute',
        bottom: -1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.895,
        height: Dimensions.get('screen').height * 0.07,
        backgroundColor: Colors.BANNER_1,
        opacity: 0.800000011920929,
        paddingHorizontal: Dimensions.get('screen').width * 0.07,
    },
    grleft: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    text1: {
        color: Colors.WHITE,
        fontFamily: 'Monterrat',
        fontSize: 12,
        fontWeight: '800',
        lineHeight: 19,
    },
    text2: {
        color: Colors.TEXT1,
        fontFamily: 'Monterrat',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 15,
    },
    grright: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    grWatch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.RED1,
        padding: Dimensions.get('screen').width * 0.015,
        borderColor: Colors.RED1,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,

    },
    grLike: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BLUEW,
        padding: Dimensions.get('screen').width * 0.015,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    eye: {
        width: 10,
        height: 10,
        marginRight: Dimensions.get('screen').width * 0.015,

    },
    txt1: {
        color: Colors.WHITE,
        fontFamily: 'Monterrat',
        fontSize: 8,
        fontWeight: '500',
        lineHeight: 9.6,
    },
    textHeader1: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE
    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 22,
        // marginTop: Dimensions.get('window').height * 0.05,
    },
    boxTop: {
        borderWidth: 1,
        borderColor: Colors.YELLOW,
        borderRadius: 4,
        backgroundColor: Colors.WHITE,
        padding: 5,
        alignSelf: 'flex-end',
        marginTop: '5%',
    },
    txtTop: {
        fontWeight: '400',
        fontSize: 12,
        color: Colors.BLUE_PEPSI
    },
    txtRank: {
        fontWeight: '700',
        fontSize: 12,
        color: Colors.RED_BACK
    },
    boxRanks: {

    },
    boxRank: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    boxRank2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    imgRank2: {
    },
    textName2: {
        fontWeight: '500',
        fontSize: 10,
        color: 'rgba(255, 222, 229, 1)'
    },
    textView: {
        fontWeight: '700',
        fontSize: 10,
        color: Colors.WHITE,
        marginTop: 10,
    },
    boxRank1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgRank1: {},
    textName1: {
        fontWeight: '700',
        fontSize: 12,
        color: Colors.YELLOW
    },
    boxRank3: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 110
    },
    imgRank3: {},
    textName3: {
        fontWeight: '700',
        fontSize: 12,
        color: 'rgba(173, 225, 255, 1)'
    },
    imgBuc: {
        // marginTop: 20,
    },
    item: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    borderRank: {
    },
    txt: {
        position: 'absolute',
        zIndex: 1,
        color: Colors.WHITE,
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
    },
    imgBorderRank: {},
    boxContent: {
        marginTop: '10%',
        flexDirection: 'row',
        width: "90%",
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    imgAvatar: {
        // width: "100%",
        zIndex: 1
    },
    boxInfor: {
        width: "75%",
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: Colors.DARK_BLUE_MODE,
        marginStart: "-10%",
        borderRadius: 8,
        borderColor: Colors.WHITE,
    },
    txtName: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.WHITE,
        marginStart: '20%',
    },
    boxView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: Colors.WHITE,
        padding: 3,
        marginEnd: "3%",
    },
    imgb: {
        color: Colors.RED
    },
    txtView: {
        fontSize: 11,
        fontWeight: '700',
        color: Colors.BLUE_PEPSI,
    }
});

export default Rating;