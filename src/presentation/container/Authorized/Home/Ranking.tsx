import { StyleSheet, Text, View, FlatList, Dimensions, Image, ImageBackground } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import Header from '../../../component/header/Header'
import { ICON_HOME, ICON_NOTIFICATION } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { BeatListStackScreenProps } from '../../../navigation/BeatListNavigation'

const Ranking: React.FC<BeatListStackScreenProps<'Ranking'>> = ({ navigation, route }) => {
    const goBack = () => {
        navigation.navigate('Record');
    }
    const goNotification = () => {
        navigation.navigate('Notification');
    }
    interface Item {
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

    const DATA: Item[] = [
        { id: 1, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_1.png"), imagegoc: require("../../../../../assets/Icon_1.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#1D4FD6' },
        { id: 2, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_2.png"), imagegoc: require("../../../../../assets/Icon_2.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#40AFFF' },
        { id: 3, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_3.png"), imagegoc: require("../../../../../assets/Icon_3.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#40AFFF' },
        { id: 4, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_1.png"), imagegoc: require("../../../../../assets/Icon_4.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#215EAC' },
        { id: 5, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_2.png"), imagegoc: require("../../../../../assets/Icon_4.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#40AFFF' },
        { id: 6, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_3.png"), imagegoc: require("../../../../../assets/Icon_4.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#40AFFF' },
        { id: 7, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_1.png"), imagegoc: require("../../../../../assets/Icon_4.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#1D4FD6' },
        { id: 8, title: "Đom Đóm", titleTime: "Jack", image: require("../../../../../assets/Banner_like_2.png"), imagegoc: require("../../../../../assets/Icon_4.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageLike: require("../../../../../assets/Icon_like.png"), textWatch: "11.8K", textLike: "10.203", borderColor: '#40AFFF' },
    ];

    const renderItem = ({ item }: { item: Item }) => (
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
                        <Text style={styles.txt}>{item.textWatch}</Text>
                    </View>
                    <View style={styles.grLike}>
                        <Image style={styles.eye} source={item.imageLike} />
                        <Text style={styles.txt}>{item.textLike}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <Background>
            <Header
                iconLeft={ICON_HOME}
                leftHeader={goBack}
                centerHeader={"Bảng xếp hạng"}
                iconRight={ICON_NOTIFICATION}
                rightHeader={goNotification}
            />
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
    txt: {
        color: Colors.WHITE,
        fontFamily: 'Monterrat',
        fontSize: 8,
        fontWeight: '500',
        lineHeight: 9.6,
    },
})