import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import { BACKGROUND_TOOLBAR, BACK, IMG_COVER_2 } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header'
import { BeatListStackScreenProps } from '../../../navigation/Stack/BeatListNavigation'
const AnimationSplash : React.FC<BeatListStackScreenProps<'AnimationSplash'>> = ({ navigation, route }) => {
    return (
        <Background>
            <View style={styles.container}>
                <Header
                    iconLeft={BACK}
                    // leftHeader={hanldeLogin}
                    centerHeader={"Tiền nhiều để làm gì"}
                    centerHeaderMini={"Gducky ft.Lưu Hiền Trinh"}
                />
                <View style={styles.banner}>
                    <Image source={IMG_COVER_2} style={styles.imgCover} />
                    <Text style={styles.textCover}>Bạn có muốn tạo video animation không?</Text>
                </View>
                <View style={styles.boxButton}>
                    <Button
                        containerStyle={styles.buttonTao}
                        title='Tạo Animation'
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

export default AnimationSplash

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        marginHorizontal: Dimensions.get("window").width * 0.055,
        marginTop: Dimensions.get('window').height * 0.03,
        marginBottom: Dimensions.get('window').height * 0.05,
    },
    imgCover: {
        marginBottom: Dimensions.get('window').height * 0.015,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.WHITE_BORDER,
        height: Dimensions.get('window').height * 0.6,

    },
    textCover: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        color: Colors.WHITE,
        textAlign: 'center',
    },
    boxButton: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        marginTop: -Dimensions.get('window').height * 0.13,
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