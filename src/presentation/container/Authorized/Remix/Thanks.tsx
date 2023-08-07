import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import { TALENT } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { MainStackScreenProps } from '../../../navigation/Stack/LoginNavigation'

const Thanks = () => {
    return (
        <Background>
            <View style={styles.container}>
                <View style={{flexDirection:'column', justifyContent:'flex-start'}}>
                    <Text style={styles.text}>CHÚC MỪNG BẠN</Text>
                    <Text style={styles.text1}>ĐÃ HOÀN THÀNH</Text>
                    <Text style={styles.text1}>BẢN THU !</Text>
                </View>

                <View style={styles.main}>
                    <Image source={TALENT} style={styles.imageTalen} />
                </View>
                <View style={styles.boxButton}>
                    <Button
                        containerStyle={styles.buttonXem}
                        title='Xem bản thu'
                    />
                    <Button
                        containerStyle={styles.buttonPass}
                        title='Bỏ qua'
                        //  onPress={SignUpScreen}
                        titleStyle={styles.title} />
                </View>
            </View>
        </Background>
    )
}

export default Thanks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        color: Colors.WHITE,
        fontFamily: 'Montserrat',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: '900',
        letterSpacing: -0.209,
        marginTop: '25%',

    },
    text1: {
        color: Colors.WHITE,
        fontFamily: 'Montserrat',
        fontSize: 26,
        fontStyle: 'italic',
        fontWeight: '900',
        letterSpacing: -0.209,
    },
    main: {
        marginTop: - Dimensions.get('window').height * 0.3,
        alignItems: 'center',
    },
    imageTalen: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
    },
    boxButton: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        marginTop: -Dimensions.get('window').height * 0.6,
        alignItems: 'center'
    },
    imageButton: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 0.8 / 2.3,
    },
    textButton: {
        color: Colors.WHITE,
        padding: 10,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '700',
    },
    buttonXem: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.075,
    },
    buttonPass: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.075,
        backgroundColor: Colors.BACKGROUND_FORM,
        marginTop: Dimensions.get('window').height * 0.2,
        marginLeft: -Dimensions.get('window').width * 0.8,
    },
    title: {
        color: Colors.WHITE,
    },


})