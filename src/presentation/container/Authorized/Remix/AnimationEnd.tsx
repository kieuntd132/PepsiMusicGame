import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import { BACKGROUND_TOOLBAR, BACK, IMG_COVER_2, BAR_TIME_RED, PEN, IMG_SHARE } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import Button from '../../../component/button/Button'
import Header from '../../../component/header/Header'
import { BeatListStackScreenProps } from '../../../navigation/Stack/BeatListNavigation'
const AnimationEnd: React.FC<BeatListStackScreenProps<'AnimationEnd'>> = ({ navigation, route }) => {
    return (
        <Background>
            <View style={styles.container}>
                <Header
                    iconLeft={BACK}
                    // leftHeader={hanldeLogin}
                    centerHeader={"Tạo bài đăng"}
                />
                <View style={styles.gr}>
                    <Image source={IMG_COVER_2} style={styles.img} />
                    <Image source={BAR_TIME_RED} style={styles.imgTime} />
                    <View style={styles.grbottom}>
                        <View style={styles.leftgr}>
                            <View style={styles.grMini}>
                                <Text style={styles.textTitle}>Tiền nhiều để làm gì</Text>
                                <Text style={styles.textMini}>Gducky ft.Lưu Hiền Trinh</Text>
                            </View>
                            <TouchableOpacity>
                                <Image source={PEN} style={styles.imgPen} />
                            </TouchableOpacity>
                        </View>
                        <Image source={IMG_SHARE} style={styles.share} />
                    </View>
                </View>
                <View style={styles.boxButton}>
                    <Button
                        containerStyle={styles.buttonTao}
                        title='Xong'
                    />
                    <Button
                        containerStyle={styles.buttonBo}
                        title='Hủy Bỏ'
                        //  onPress={SignUpScreen}
                        titleStyle={styles.title} />
                </View>
            </View>
        </Background>

    )
}

export default AnimationEnd

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gr: {
        height: Dimensions.get('window').height * 0.63,
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: '#0054A16E',
        borderWidth: 2,
        borderRadius: 12,
        borderColor: Colors.BLUE_2_BLUE,
        marginTop: Dimensions.get('window').height * 0.02,
        marginHorizontal: Dimensions.get('window').width * 0.05,
    },
    img: {
        height: Dimensions.get('window').height * 0.52,
        width: Dimensions.get('window').width * 0.89,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    imgTime: {
        alignSelf: 'center',
        marginTop: Dimensions.get('window').height * 0.01,
    },
    grbottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: Dimensions.get('window').height * 0.01,
    },
    leftgr: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: -Dimensions.get('window').width * 0.15,
    },
    grMini: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    imgPen: {
        marginTop: Dimensions.get('window').height * 0.005,
        marginLeft: Dimensions.get('window').width * 0.02,
    },
    textTitle: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    textMini: {
        fontFamily: 'Montserrat',
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.WHITE,
    },
    share: {
        marginRight: -Dimensions.get('window').width * 0.15,

    },
    boxButton: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        marginTop: -Dimensions.get('window').height * 0.05,
        alignItems: 'center',
        marginHorizontal: Dimensions.get("window").width * 0.055,
    },
    buttonTao: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.07,
    },
    buttonBo: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.07,
        backgroundColor: Colors.BACKGROUND_FORM,
        marginTop: Dimensions.get('window').height * 0.18,
        marginLeft: -Dimensions.get('window').width * 0.7,
    },
    title: {
        color: Colors.WHITE,
    },

})