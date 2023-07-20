import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import { BACKGROUND_TOOLBAR, BACK, IMG_COVER_2 } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header'
const AnimationSplash = () => {
    const centerHeader = () => {
    return (
        <View style={styles.header_1}>
            <Text style={styles.textHeader}>Tiền nhiều để làm gì</Text>
            <Text style={styles.rule2}>Gducky ft.Lưu Hiền Trinh</Text>
        </View>
    )
}
return (
    <Background>
        <View style={styles.container}>
            <Header
                iconLeft={BACK}
                // leftHeader={hanldeLogin}
                centerHeader={centerHeader()}
            />
                <View style={styles.banner}>
                    <Image source={IMG_COVER_2} style={styles.imgCover}/>
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
        marginLeft: Dimensions.get('window').width * 0.08,
    },
    rule2:{
        marginLeft: Dimensions.get('window').width * 0.08,
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.BLUE_2_BLUE,
    },
    banner:{
        marginHorizontal:Dimensions.get("window").width * 0.055,
        marginTop:Dimensions.get('window').height *0.03,
        marginBottom:Dimensions.get('window').height *0.05,
    },
    imgCover:{
        marginBottom:Dimensions.get('window').height *0.015,
        borderRadius:12,
        borderWidth:2,
        borderColor:Colors.WHITE_BORDER,
        height: Dimensions.get('window').height * 0.6,

    },
    textCover:{
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 24,
        color: Colors.WHITE,
        textAlign:'center',
    },
    boxButton: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        marginTop: -Dimensions.get('window').height * 0.13,
        alignItems: 'center',
        marginHorizontal:Dimensions.get("window").width * 0.055,
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