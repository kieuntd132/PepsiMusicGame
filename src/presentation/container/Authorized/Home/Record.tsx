import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import { HEADLINE_2, LEFT_BUTTON_HOME, RIGHT_BUTTON_HOME, TALENT } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { MainStackScreenProps } from '../../../navigation/LoginNavigation'
import { JumpingTransition } from 'react-native-reanimated'

const Record = () => {

    const onClick = () => {
        // navigation.navigate('LogIn');
    }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.headline}>
                    <Image source={HEADLINE_2} style={styles.image} />
                </View>
                <View style={styles.main}>
                    <Image source={TALENT} style={styles.imageTalen} />
                    <View style={styles.boxButton}>
                        <TouchableOpacity style={styles.btn}>
                            <ImageBackground source={LEFT_BUTTON_HOME} style={styles.imageButton}>
                                <Text style={styles.textButton}>THỂ LỆ</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <View style = {{width: Dimensions.get('screen').width * 0.37}}/>
                        <TouchableOpacity style={styles.btn}>
                            <ImageBackground source={RIGHT_BUTTON_HOME} style={styles.imageButton}>
                                <Text style={styles.textButton}>HƯỚNG DẪN</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    )
}

export default Record

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height * 1.08,
    },
    headline: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('window').height * 0.04,
    },
    main: {
        marginTop: - Dimensions.get('window').height * 0.35,
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 0.6,
    },
    imageTalen: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
    },
    boxButton: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        marginTop: -Dimensions.get('window').height * 0.53 ,
    },
    btn: {
        width: Dimensions.get('screen').width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageButton: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: Colors.WHITE,
        padding: 15,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '700',
    },

})