import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import Background from '../../../component/background/Background'
import { BACK, BACKGROUND_TOOLBAR } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'

interface Item {
    id: number;
    title: string;
    titleTime: string;
    image: any;
}

// const DATA: Item[] = [
//     { id: 1, title: "Bạn đã đăng tải video mới", titleTime: "21 giờ trước", image: require("../../../../../assets/Img_Notification.png") },
//     { id: 2, title: "Bạn đã nhận được IPHONE 13 ProMax\nGiải thưởng cho quán quân tuần", titleTime: "28/11/2021", image: require("../../../../../assets/Img_Notification.png") },
//     { id: 3, title: "Bạn đã đạt TOP 1 người có lượt\nyêu thích cao nhất tuần", titleTime: "26/11/2021", image: require("../../../../../assets/Img_Notification.png") },
//     { id: 4, title: "Bạn đã đăng tải video mới", titleTime: "26/11/2021", image: require("../../../../../assets/Img_Notification.png") },
//     { id: 5, title: "Bạn đã nhận được Samsung Tab S7+\nGiải thưởng cho á quân tuần", titleTime: "26/11/2021", image: require("../../../../../assets/Img_Notification.png") },
//     { id: 6, title: "Bạn đã đạt TOP 2 người có lượt\nyêu thích cao nhất tuần", titleTime: "21/11/2021", image: require("../../../../../assets/Img_Notification.png") },
//     { id: 7, title: "Bạn đã đăng tải video mới", titleTime: "21/11/2021", image: require("../../../../../assets/Img_Notification.png") },
// ];

const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.gr1}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.titleTime}>{item.titleTime}</Text>
        </View>
    </View>
);

const MyGift = () => {
    return (
        <Background>
            <View style={styles.container}>
                <ImageBackground source={BACKGROUND_TOOLBAR} style={styles.headline}>
                    <Image source={BACK} style={styles.iconBack} />
                    <Text style={styles.rule}>Quà của tôi</Text>
                </ImageBackground>
                {/* <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                /> */}
            </View>
        </Background>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headline: {
        height: Dimensions.get('window').height * 0.13,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconBack: {
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').width * 0.03,
    },
    rule: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE,
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').width * 0.28,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.WHITE,
        width: Dimensions.get('window').width * 0.92,
        backgroundColor: Colors.BLUE_BG,
    },
    image: {
        borderWidth: 0.5,
        borderRadius: 9,
        borderColor: Colors.WHITE_BORDER,
    },
    gr1:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft:Dimensions.get('window').width * 0.05
    },
    title: {
        marginBottom:Dimensions.get('window').height * 0.03,
        fontFamily:'Montserrat',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.WHITE,
    },
    titleTime: {
        fontFamily:'Montserrat',
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 18,
        color: Colors.WHITE,
    },
});

export default MyGift;