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
import { BeatListStackScreenProps } from '../../../navigation/BeatListNavigation'

interface ItemData {
    id: number;
    title: string;
    titleTime: string;
    image: any;
    imagegoc: any;
    imageWatch: any;
    imageLike: any;
    textWatch: string;
    textLike: string;
    borderColor: string;
}


const DATA: ItemData[] = [
    { id: 1, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_1.png"), imagegoc: require("../../../../../assets/Icon_1.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#1D4FD6' },
    { id: 2, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_2.png"), imagegoc: require("../../../../../assets/Icon_2.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#40AFFF' },
    { id: 3, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_3.png"), imagegoc: require("../../../../../assets/Icon_3.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#40AFFF' },
    { id: 4, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_1.png"), imagegoc: require("../../../../../assets/Icon_4.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#215EAC' },
    { id: 5, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_2.png"), imagegoc: require("../../../../../assets/Icon_4.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#40AFFF' },
    { id: 6, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_3.png"), imagegoc: require("../../../../../assets/Icon_4.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#40AFFF' },
    { id: 7, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_1.png"), imagegoc: require("../../../../../assets/Icon_4.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#1D4FD6' },
    { id: 8, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_2.png"), imagegoc: require("../../../../../assets/Icon_4.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#40AFFF' },
];

type ItemTopViewProps = {
    item : ItemData,
    onPress?: () => void
}

const Item = ({item, onPress} : ItemTopViewProps) =>{
    return(
    <TouchableOpacity onPress={onPress}>
    <View style={[styles.gr, { borderColor: item.borderColor }]}>
        <Image style={styles.img1} source={item.image} />
        <Image source={item.imagegoc} style={styles.imgGoc} />
        <Text style={styles.txtID}>{item.id}</Text>
        <View style={styles.grbottom}>
            <View style={styles.grleft}>
                <Text style={styles.text1}>{item.title}</Text>
                <Text style={styles.text2}>{item.titleTime}</Text>
            </View>
            <View style={styles.grright}>
                <View style={styles.grWatch}>
                    <Image style={styles.eye} source={item.imageWatch} />
                    <Text style={styles.txt1}>{item.textWatch}</Text>
                </View>
                <View style={styles.grLike}>
                    <Image style={styles.eye} source={item.imageLike} />
                    <Text style={styles.txt1}>{item.textLike}</Text>
                </View>
            </View>
        </View>
    </View>
</TouchableOpacity>   )
}

const Ranking:   React.FC<BeatListStackScreenProps<'Ranking'>>  = (props) => {
    const {navigation} = props;

    const handleToProfile = () =>{
        navigation.navigate("ProfileRecord")
    }
    const renderItem = ({ item }: { item: ItemData }) => {
        return (
            <Item item={item} onPress={handleToProfile}/>
        )
}
 


return (
    <Background>
        <View style={styles.toptab}>
            <Text style={styles.texttab}>Video có lượt tương tác nhiều nhất</Text>
        </View>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    </Background>
)
}

export default Ranking

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