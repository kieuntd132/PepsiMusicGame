import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import { BACKGROUND_TOOLBAR, BACK, IMG_COVER_1, OLD_SCHOOL, MODERN, PREESTYLE } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header'
const AnimationNext = () => {
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
                    <Image source={IMG_COVER_1} style={styles.imgCover}/>
                </View>
                <View style={styles.grbox}>
                    <View style={styles.box}>
                        <Image source={OLD_SCHOOL} style={styles.round}/>
                        <Text style={styles.text_round}>Old School</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={MODERN}/>
                        <Text style={styles.text_round}>Modern</Text>
                    </View>
                    <View style={styles.box}>
                        <Image source={PREESTYLE}/>
                        <Text style={styles.text_round}>Free Style</Text>
                    </View>
                </View>
                <View style={styles.boxButton}>
                    <Button
                        containerStyle={styles.buttonTao}
                        title='Bỏ qua'
                        titleStyle={styles.title}
                    />
                    <Button
                        containerStyle={styles.buttonBo}
                        title='Xác nhận'
                        //  onPress={SignUpScreen}
                        titleStyle={styles.title1} />
                </View>
            </View>
        </Background>

    )
}

export default AnimationNext

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
    grbox:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:-Dimensions.get('window').height *0.05,
        marginHorizontal: -Dimensions.get('window').width *0.1,
    },
    box:{
        alignItems:'center',
    },
    round:{
        borderRadius:50,
        borderWidth:2,
        borderColor:Colors.WHITE,
    },
    text_round:{
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18,
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
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.07,
        marginTop: Dimensions.get('window').height * 0.15,
        backgroundColor: Colors.BACKGROUND_FORM,

    },
    buttonBo: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.07,
        marginTop: Dimensions.get('window').height * 0.15,
        marginLeft: Dimensions.get('window').width * 0.05,
    },
    title: {
        color: Colors.WHITE,
    },
    title1: {
        color: Colors.BLUE_PEPSI,
    },
   
})