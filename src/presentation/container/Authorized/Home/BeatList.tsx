import { StyleSheet, Text, View, ScrollView, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import { BeatListStackScreenProps } from '../../../navigation/StackNavigationBeatList'
import { BANNER, ICON_HOME, ICON_MUSIC, ICON_VOLUMN_HIGH, ICON_NOTIFICATION } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import Button from '../../../component/button/Button'
import Header from '../../../component/header/Header'

interface Item {
    id: number,
    title: string,
    view: string,
    like: string,
    image: any,
    imageMic: any,
    imageEye: any,
    imageHeart: any,
}
interface ItemList {
    id: number;
    title: string;
    titleWatch: string;
    titleMini: string;
    image: any;
    imageMiniMicro: any;
    imageMic: any;
}
const DATA: Item[] = [
    { id: 1, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon_eye.png"), imageHeart: require("../../../../../assets/Icon_Tym.png"), view: '11000', like: '10000', image: require("../../../../../assets/Img_item1.png"), imageMic: require("../../../../../assets/Icon_Mic.png") },
    { id: 2, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon_eye.png"), imageHeart: require("../../../../../assets/Icon_Tym.png"), view: '11000', like: '10000', image: require("../../../../../assets/Img_item2.png"), imageMic: require("../../../../../assets/Icon_Mic.png") },
    { id: 3, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon_eye.png"), imageHeart: require("../../../../../assets/Icon_Tym.png"), view: '11000', like: '10000', image: require("../../../../../assets/Img_item1.png"), imageMic: require("../../../../../assets/Icon_Mic.png") },
    { id: 4, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon_eye.png"), imageHeart: require("../../../../../assets/Icon_Tym.png"), view: '11000', like: '10000', image: require("../../../../../assets/Img_item2.png"), imageMic: require("../../../../../assets/Icon_Mic.png") },
    { id: 5, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon_eye.png"), imageHeart: require("../../../../../assets/Icon_Tym.png"), view: '11000', like: '10000', image: require("../../../../../assets/Img_item1.png"), imageMic: require("../../../../../assets/Icon_Mic.png") },
    { id: 6, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon_eye.png"), imageHeart: require("../../../../../assets/Icon_Tym.png"), view: '11000', like: '10000', image: require("../../../../../assets/Img_item2.png"), imageMic: require("../../../../../assets/Icon_Mic.png") },
    { id: 7, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon_eye.png"), imageHeart: require("../../../../../assets/Icon_Tym.png"), view: '11000', like: '10000', image: require("../../../../../assets/Img_item1.png"), imageMic: require("../../../../../assets/Icon_Mic.png") },
    { id: 8, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon_eye.png"), imageHeart: require("../../../../../assets/Icon_Tym.png"), view: '11000', like: '10000', image: require("../../../../../assets/Img_item2.png"), imageMic: require("../../../../../assets/Icon_Mic.png") },
    { id: 9, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon_eye.png"), imageHeart: require("../../../../../assets/Icon_Tym.png"), view: '11000', like: '10000', image: require("../../../../../assets/Img_item1.png"), imageMic: require("../../../../../assets/Icon_Mic.png") },
    { id: 10, title: 'Tiền nhiều để làm gì', imageEye: require("../../../../../assets/Icon_eye.png"), imageHeart: require("../../../../../assets/Icon_Tym.png"), view: '11000', like: '10000', image: require("../../../../../assets/Img_item2.png"), imageMic: require("../../../../../assets/Icon_Mic.png") },


];

const DATALIST: ItemList[] = [
    { id: 1, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', titleWatch: ' 9.023 lượt cover', image: require("../../../../../assets/Icon_pepsi.png"), imageMic: require("../../../../../assets/Icon_Mic.png"), imageMiniMicro: require("../../../../../assets/Icon_litleMicro.png") },
    { id: 2, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', titleWatch: ' 9.023 lượt cover', image: require("../../../../../assets/Icon_pepsi.png"), imageMic: require("../../../../../assets/Icon_Mic.png"), imageMiniMicro: require("../../../../../assets/Icon_litleMicro.png") },
    { id: 3, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', titleWatch: ' 9.023 lượt cover', image: require("../../../../../assets/Icon_pepsi.png"), imageMic: require("../../../../../assets/Icon_Mic.png"), imageMiniMicro: require("../../../../../assets/Icon_litleMicro.png") },
    { id: 4, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', titleWatch: ' 9.023 lượt cover', image: require("../../../../../assets/Icon_pepsi.png"), imageMic: require("../../../../../assets/Icon_Mic.png"), imageMiniMicro: require("../../../../../assets/Icon_litleMicro.png") },
];





const BeatList: React.FC<BeatListStackScreenProps<'BeatList'>> = ({ navigation, route }) => {
    const goRecord = () => {
        navigation.navigate('Record');
    }
    const goNotification = () => {
        navigation.navigate('Notification');
    }
    const goBeatOutstand = () => {
        navigation.navigate('BeatOutstand');
    }
    const goMostUser = () => {
        navigation.navigate('MostUsed');
    }
    const goRecordedRecently = () => {
        navigation.navigate('RecordedRecently');
    }
    const goRecordOne = () => {
        navigation.navigate('RecordOne');
      }
      const goPropose = () => {
        navigation.navigate('Propose');
      }
      const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.item}>
            <View style={styles.card}>
                <View>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.text}>{item.title}</Text>
                </View>
    
            </View>
            <View style={styles.gr}>
                <View style={styles.group}>
                    <Image source={item.imageEye} style={styles.imageEye} />
                    <Text style={styles.view}>{item.view}</Text>
                </View >
                <View style={styles.group1}>
                    <Image source={item.imageHeart} style={styles.imageHeart} />
                    <Text style={styles.like}>{item.like}</Text>
                </View>
                <TouchableOpacity onPress={goRecordOne}>
                    <Image source={item.imageMic} style={styles.imageMic} />
                </TouchableOpacity>
            </View>
        </View>
    );
    
    const Item = ({ item }: { item: ItemList }) => (
        <View style={styles.item1}>
            <View style={styles.card1}>
                <Image source={item.image} style={styles.image1} />
                <View style={styles.card2}>
                    <Text style={styles.title1}>{item.title}</Text>
                    <Text style={styles.titleMini}>{item.titleMini}</Text>
                    <View style={styles.card3}>
                        <Image source={item.imageMiniMicro} />
                        <Text style={styles.titleWatch}>{item.titleWatch}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={goRecordOne}>
                <Image source={item.imageMic} style={styles.imageMic1} />
            </TouchableOpacity>
        </View>
    );
    
    
    return (
        <Background>
            <Header
                iconLeft={ICON_HOME}
                leftHeader={goRecord}
                centerHeader={"BeatList"}
                iconRight={ICON_NOTIFICATION}
                rightHeader={goNotification}
            />
            <ScrollView style={styles.container}>
                <Image source={BANNER} style={styles.imageBanner} />
                <View style={styles.boxButton}>
                    <Button containerStyle={styles.btn}
                        title='Beat mới nhất'
                        titleStyle={styles.titleStyle}
                        icon={ICON_MUSIC}
                        onPress={goBeatOutstand}
                    />
                    <Button containerStyle={styles.btn}
                        title='Sử dụng nhiều'
                        titleStyle={styles.titleStyle}
                        icon={ICON_VOLUMN_HIGH}
                        onPress={goMostUser}
                    />
                </View>
                <View style={styles.boxHistory}>
                    <View style={styles.boxTitle}>
                        <Text style={styles.title}>Đã thu gần đây</Text>
                        <TouchableOpacity style={styles.btnSeeAll} onPress={goRecordedRecently}>
                            <Text style={styles.seeAll}>Xem tất cả {'>'}</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false} />
                </View>
                <View style={styles.boxPropose}>
                    <View style={styles.boxTitle}>
                        <Text style={styles.title}>Đề xuất cho bạn</Text>
                        <TouchableOpacity style={styles.btnSeeAll} onPress={goPropose}>
                            <Text style={styles.seeAll}>Xem tất cả {'>'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listPropose}>
                        <FlatList
                            data={DATALIST}
                            renderItem={Item}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                </View>
            </ScrollView>
        </Background>
    )
}

export default BeatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Dimensions.get('screen').scale * 5,
    },
    beat: {

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    beatlist: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: '900',
        lineHeight: 27,
        color: Colors.WHITE,
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').width * 0.15,
    },


    imageBanner: {
        resizeMode: 'stretch',
        width: "100%",
        height: Dimensions.get('screen').height * 0.25,
        borderRadius: 8,
    },
    boxButton: {
        marginTop: Dimensions.get('screen').height * 0.03,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        width: "45%",
        height: Dimensions.get('screen').height * 0.05,
    },
    titleStyle: {

    },
    boxTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.02,
    },
    title: {
        fontSize: 16,
        color: Colors.WHITE,
        fontWeight: '700',
        lineHeight: 24,
    },
    seeAll: {
        fontSize: 12,
        color: Colors.WHITE,
        fontWeight: '400',
        lineHeight: 18,
    },
    btnSeeAll: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxHistory: {},
    boxPropose: {
        marginTop: -Dimensions.get('screen').height * 0.02,
    },
    listPropose: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Dimensions.get('screen').height * 0.08,

    },
    item: {
        margin: Dimensions.get('screen').width * 0.03,
        width: Dimensions.get('screen').width * 0.4 + 4,
        height: Dimensions.get('screen').height * 0.22,
        justifyContent: 'space-between',
        padding: 3,
        borderRadius: 8,
        backgroundColor: Colors.DARK_BLUE_2
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('screen').width * 0.39,
        height: Dimensions.get('screen').height * 0.145,
        borderRadius: 10,

    },
    imageMic: {
        marginRight: - Dimensions.get('screen').width * 0.045,
    },
    imageEye: {

    },
    imageHeart: {

    },
    text: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 18,
        color: Colors.WHITE,
        marginTop: Dimensions.get('screen').width * 0.01,

    },
    gr: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: - Dimensions.get('window').height * 0.1,

    },
    group: {
        paddingVertical: Dimensions.get('window').height * 0.003,
        marginTop: Dimensions.get('window').height * 0.023,
        marginLeft: - Dimensions.get('window').height * 0.022,
        width: '30%',
        flexDirection: 'row',
        backgroundColor: Colors.RED_BACK, //rgba(237, 25, 65, 1)
        borderTopStartRadius: 5,
        borderBottomStartRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        fontSize: 8,
    },
    like: {

        fontSize: 8,
    },
    group1: {
        paddingVertical: Dimensions.get('window').height * 0.003,
        marginTop: Dimensions.get('window').height * 0.023,
        marginLeft: - Dimensions.get('window').height * 0.024,
        width: '30%',
        flexDirection: 'row',
        backgroundColor: Colors.TYM_BACK, //rgba(16, 76, 231, 1)
        borderTopEndRadius: 4,
        borderBottomEndRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    item1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.WHITE,
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: Colors.BLUE_BG,
    },
    card1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    card2: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: Dimensions.get('window').width * 0.04,
    },
    card3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.BLUE_TITLE,
        borderRadius: 4,
        backgroundColor: Colors.BLUE_TITLE,
        padding: Dimensions.get('window').width * 0.01,
    },
    image1: {
        marginLeft: -Dimensions.get('window').width * 0.12,
    },
    title1: {
        fontFamily: 'Montserrat',
        color: Colors.WHITE,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 21,
    },
    titleMini: {
        fontFamily: 'Montserrat',
        color: Colors.WHITE,
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 15,
    },
    titleWatch: {
        fontFamily: 'Montserrat',
        color: Colors.WHITE,
        fontSize: 8,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 9.6,
    },
    imageMic1: {
        marginRight: -Dimensions.get('window').width * 0.08,

    },

    boxReact: {
        flexDirection: 'row',
        width: "70%",
    },

})