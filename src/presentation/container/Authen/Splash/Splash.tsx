import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import { HEADLINE_2, TALEN } from '../../../../../assets'

const SplashScreen = () => {
    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.headline}>
                    <Image source={HEADLINE_2} style={styles.image} />
                </View>
                <View style={styles.main}>
                    <ImageBackground source={TALEN} style={styles.imageTalen}>
                        <View style={styles.group}>
                            <View>
                                <Text style={styles.text}>BUNG NGAY GIỌNG CHẤT</Text>
                                <View style={styles.bg}>
                                    <Text style={styles.text1}>SĂN QUÀ HẤP DẪN</Text>
                                </View>
                            </View>
                            <View style = {[{flexDirection: 'row'},{justifyContent:'center'} ,{marginTop:10}]}>
                            <View style = {[{flexDirection: 'column'},{justifyContent:'center'},]}>
                            <Text style={styles.text2}>QUAY LẠI</Text>
                            <Text style={styles.text2}>VÀO NGÀY</Text>
                            </View>
                            <Text style={styles.text3}>20.3.2020</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>


            </View>
        </Background>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headline: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('window').height * 0.1,
    },
    main: {

        marginTop: - Dimensions.get('window').height * 0.01,
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 0.6,
    },
    imageTalen: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 0.6,
    },
    group: {

    },

    text: {
        textAlign: 'center',
        color: '#06F',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 0,
        marginTop: Dimensions.get('window').height * 0.45,
        fontFamily: 'Montserrat',
        fontStyle: 'italic',
        fontSize: 22,
        fontWeight: 'bold',

    },
    bg: {

        backgroundColor: '#fff',
        width: Dimensions.get('window').width * 0.67,
        alignItems: 'center',
        marginHorizontal: '16%',
    },
    text1: {
        textAlign: 'center',
        color: '#06F',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 0,
        marginTop: Dimensions.get('window').height * 0.002,
        fontFamily: 'Montserrat',
        fontStyle: 'italic',
        fontSize: 15,
        fontWeight: '600',

    },
    text2:{
        textAlign: 'center',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4.973383903503418 },
        textShadowRadius: 0,
        marginTop: Dimensions.get('window').height * 0.002,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: '500',
    },
    text3:{
        textAlign: 'center',
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 5 },
        textShadowRadius: 0,
        marginTop: Dimensions.get('window').height * 0.002,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontSize: 40,
        fontWeight: '900',
    },

})