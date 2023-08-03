import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import VideoList from '../Home/VideoList';
import Background from '../../../component/background/Background';
import Header from '../../../component/header/Header'

import { ICON_HOME, ICON_NOTIFICATION } from '../../../../../assets';

const Tab = createMaterialTopTabNavigator();
type CustomTopTabBarProps = {
    state: any;
    descriptors: any;
    navigation: any;
};
const CustomTopTabBar = ({ state, descriptors, navigation }: CustomTopTabBarProps) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
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
                            marginVertical: 5,
                            height: 40,
                            paddingHorizontal: 25,
                        }}
                    >
                        <Text
                            style={{
                                color: isFocused ? '#215EAC' : '#FFFFFF',
                                fontFamily: 'Montserrat',
                                fontSize: 12,
                                fontWeight: '500',
                                lineHeight: 18,
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

const VideoNew = () => {
    return <Text>Video mới</Text>;
};

const Favorite = () => {
    return <Text>Yêu thích</Text>;
};

const MostViewed = () => {
    return <Text>Xem nhiều</Text>;
};

const VideoList2 = () => {
    return (
        <Background>
            <Header
                iconLeft={ICON_HOME}
                // leftHeader={goBack}
                centerHeader={"Video List"}
                iconRight={ICON_NOTIFICATION}
            // rightHeader={Notification}
            />
            <NavigationContainer independent={true}>
                {/* <NavigationContainer> */}
                <Tab.Navigator
                    tabBar={(props: any) =>
                        <CustomTopTabBar {...props} />
                        // <ScrollView
                        //     style={{ backgroundColor: 'red' ,height:'0.001%'}}
                        //     horizontal={true}>
                        //     <CustomTopTabBar {...props} />
                        // </ScrollView>
                    }>
                    <Tab.Screen name="VideoList" component={VideoList} options={{ tabBarLabel: 'Video mới' }} />
                    <Tab.Screen name="Favorite" component={VideoList} options={{ tabBarLabel: 'Yêu thích' }} />
                    <Tab.Screen name="MostViewed" component={VideoList} options={{ tabBarLabel: 'Xem nhiều' }} />
                </Tab.Navigator>
            </NavigationContainer>
        </Background>
    );
};

export default VideoList2;