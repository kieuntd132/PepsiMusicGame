import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Background from '../../../component/background/Background'
import { BACK, CENTER_BUTTON, ICON_LYRIC, BAR_TIME } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header'
import { BeatListStackScreenProps } from '../../../navigation/StackNavigationBeatList'



const text1 = "Nhưng mà rồi một ngày vịt bị";
const boldAndUpperTexts1 = ["Nhưng mà rồi một ngày vịt bị"];
const regex1 = new RegExp(`(${boldAndUpperTexts1.join('|')})`, 'gi');

const getTextWithBoldAndUpper1 = (text1: string, boldAndUpperTexts1: any) => {
    const parts1 = text1.split(regex1);
    return parts1.map((part, index) => {
        const isBoldAndUpper1 = boldAndUpperTexts1.includes(part);
        return isBoldAndUpper1 ? (
            <Text key={index} style={{ fontWeight: 'bold', fontSize: 16, color: '#ffe512' }}>{part}</Text>
        ) : (
            <Text key={index}>{part}</Text>
        );
    });
};
const text2 = "cuốn phăng đi";
const boldAndUpperTexts2 = ["cuốn phăng đi"];
const regex2 = new RegExp(`(${boldAndUpperTexts2.join('|')})`, 'gi');

const getTextWithBoldAndUpper2 = (text2: string, boldAndUpperTexts2: any) => {
    const parts2 = text2.split(regex2);
    return parts2.map((part, index) => {
        const isBoldAndUpper2 = boldAndUpperTexts2.includes(part);
        return isBoldAndUpper2 ? (
            <Text key={index} style={{ fontWeight: 'bold', fontSize: 16, color: '#ffe512' }}>{part}</Text>
        ) : (
            <Text key={index}>{part}</Text>
        );
    });
};


const RecordOne: React.FC<BeatListStackScreenProps<'RecordOne'>> = ({ navigation, route }) => {
    const goBack = () => {
        navigation.navigate('BeatList');
    }
    return (
        <Background>
            <Header
                iconLeft={BACK}
                leftHeader={goBack}
                centerHeader={"Tiền nhiều để làm gì"}
                centerHeaderMini={"Gducky ft.Lưu Hiền Trinh"}
                iconRight={ICON_LYRIC}
            // rightHeader={goNotification}
            />
            <ScrollView>
                <View style={styles.gr}>
                    <Text style={styles.loi}>Lại là Ducky và sau nhiều lần </Text>
                    <Text style={styles.loi}>đã bị trói buộc thì</Text>
                    <Text style={styles.loi}>Thử đoán xem hôm nay</Text>
                    <Text style={styles.loi}>thằng Ducky này có thể nói được gì</Text>
                    <Text style={styles.loi}>Three of them say to me</Text>
                    <Text style={styles.loi}>"Baby I choose this rhymes"</Text>
                    <Text style={styles.loi}>Để rồi thì chú vịt vàng</Text>
                    <Text style={styles.loi}>lại làm cho cả sở thú nhịp nhàng</Text>
                    <Text style={styles.loi}>{getTextWithBoldAndUpper1(text1, boldAndUpperTexts1)}</Text>
                    <Text style={styles.loi}>{getTextWithBoldAndUpper2(text2, boldAndUpperTexts2)}</Text>
                    <Text style={styles.loi}>Quên đi bao yêu thương xung quanh</Text>
                    <Text style={styles.loi}>chỉ để chạy theo đống money</Text>
                    <Text style={styles.loi}>Bao nhiêu suy tư, bây giờ, cần đi làm ăn gì</Text>
                    <Text style={styles.loi}>Ta bay theo hương, bay theo hoa</Text>
                    <Text style={styles.loi}>just like a bee for honey</Text>
                    <Text style={styles.loi}>And just like that</Text>
                    <Text style={styles.loi}>Vịt tự nhủ là bản thân không được nhu mì đi</Text>
                    <Text style={styles.loi}>Vịt đánh đổi anh em bè bạn lấy bộ đồ Louis V</Text>
                    <Text style={styles.loi}>Để trở thành người đàn ông tham vọng</Text>
                    <Text style={styles.loi}>Những thứ xung quanh thật ra</Text>
                    <Text style={styles.loi}>đều là không quan trọng</Text>
                </View>
                <View style={styles.group}>
                    <Text>00:00</Text>
                    <Image source={BAR_TIME} style={styles.time} />
                    <Text>05:00</Text>
                </View>
                <Image source={CENTER_BUTTON} style={styles.center} />
            </ScrollView>
        </Background>
    )
}

export default RecordOne

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    gr: {
        marginTop: Dimensions.get('window').height * 0.02,
        textAlign: 'center'

    },
    loi: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        textAlign: 'center',
        color: Colors.WHITE_BORDER2

    },
    group: {
        marginTop: Dimensions.get('window').height * 0.05,
        marginLeft: - Dimensions.get('window').height * 0.01,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    time: {
        marginLeft: Dimensions.get('window').height * 0.01,
        marginRight: Dimensions.get('window').height * 0.01,
    },
    center: {

        resizeMode: 'contain',
        height: Dimensions.get('screen').height * 0.12,
        marginLeft: Dimensions.get('window').height * 0.08,
        marginTop: Dimensions.get('window').height * 0.01,

    },

})