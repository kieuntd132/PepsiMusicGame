import { StyleSheet, Switch, Text, View, ImageBackground, Pressable, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import {BACK, ICON_PERFORM, ICON_PLAY, ICON_VOLUMN } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header'
import { BeatListStackScreenProps } from '../../../navigation/StackNavigationBeatList'


const Remix : React.FC<BeatListStackScreenProps<'Remix'>> = ({ navigation, route }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Background>

            <Header
                iconLeft={BACK}
                // leftHeader={hanldeLogin}
                centerHeader={"Tiền nhiều để làm gì"}
                centerHeaderMini={"Gducky ft.Lưu Hiền Trinh"}
            />

            <View style={styles.group}>
                <View style={styles.group1}>
                    <View style={styles.Volume}>
                        <Image source={ICON_VOLUMN} style={styles.ImgVolume} />
                        <Pressable style={styles.button}>
                            <Text style={styles.text}>Auto Tune</Text>
                        </Pressable>
                    </View>
                    <View style={styles.Volume}>
                        <Image source={ICON_VOLUMN} style={styles.ImgVolume} />
                        <Pressable style={styles.button1}>
                            <Text style={styles.text}>Fast</Text>
                            <Text style={styles.text}>Flow</Text>
                        </Pressable>
                    </View>
                    <View style={styles.Volume}>
                        <Image source={ICON_VOLUMN} style={styles.ImgVolume} />
                        <Pressable style={styles.button1}>
                            <Text style={styles.text}>Voice Pitch</Text>
                        </Pressable>
                    </View>


                </View>
                <View style={styles.group2}>
                    <Text style={styles.textVoice}>Voice Remix (Manual)</Text>
                    <Switch
                        style={styles.on}
                        trackColor={{ false: '#373737', true: '#66C3E9' }}
                        thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <Image source={ICON_PERFORM} style={styles.Perform} />
                <Image source={ICON_PLAY} style={styles.Play} />


            </View>



            <View style={styles.boxButton}>
                <Button
                    containerStyle={styles.buttonXem}
                    title='Tiếp theo'
                />
                <Button
                    containerStyle={styles.buttonPass}
                    title='Hủy Bỏ'
                    titleStyle={styles.title} />
            </View>
        </Background>
    )
}

export default Remix

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    beat: {

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    baihat: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 21,
        color: Colors.WHITE,
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').height * 0.03,
    },
    casi: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.BLUE_2_BLUE,
        marginLeft: Dimensions.get('window').height * 0.03,

    },
    group: {
        borderWidth: 1,
        borderColor: Colors.WHITE,
        borderRadius: 12,
        backgroundColor: Colors.BLUE,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.6,
        alignItems: 'center',
        marginTop: Dimensions.get('window').height * 0.02,
        marginHorizontal: Dimensions.get('window').height * 0.025,

    },

    group1: {
        marginTop: Dimensions.get('window').height * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    Volume: {
        borderWidth: 1,
        borderColor: Colors.WHITE,
        borderRadius: 12,
        backgroundColor: Colors.BLUE,
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').height * 0.44,
        alignItems: 'center',
        marginTop: Dimensions.get('window').height * 0.02,
        marginHorizontal: Dimensions.get('window').height * 0.025,
    },
    ImgVolume: {
        // height: Dimensions.get('window').height * 0.35,
        marginTop: Dimensions.get('window').height * 0.02,
    },
    button: {
        backgroundColor: Colors.RED,
        width: Dimensions.get('window').width * 0.142,
        height: Dimensions.get('window').height * 0.05,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderWidth: 1,
        borderColor: Colors.RED,
        alignItems: 'center',
        marginTop: Dimensions.get('window').height * 0.01,
    },
    button1: {
        backgroundColor: Colors.BLUE,
        width: Dimensions.get('window').width * 0.142,
        height: Dimensions.get('window').height * 0.05,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderWidth: 1,
        borderColor: Colors.BLUE,
        alignItems: 'center',

        marginTop: Dimensions.get('window').height * 0.005,
    },
    text: {
        fontSize: 12,
        color: Colors.WHITE,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 17.5,
        textAlign: 'center',


    },
    group2: {
        marginTop: Dimensions.get('window').height * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    textVoice: {
        fontSize: 16,
        color: Colors.WHITE,
        fontFamily: 'Montserrat',
        fontWeight: '900',
        lineHeight: 21,
        textAlign: 'center',
        marginLeft: - Dimensions.get('window').width * 0.01,
        marginTop: Dimensions.get('window').height * 0.005,
    },
    on: {
        marginLeft: Dimensions.get('window').width * 0.1,
        width:Dimensions.get('window').width * 0.2,
        // marginTop: -Dimensions.get('window').height * 0.0,

    },
    Perform: {
        marginTop: Dimensions.get('window').height * 0.002,
    },
    Play: {
        marginTop: -Dimensions.get('window').height * 0.005,
    },


    boxButton: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        justifyContent: 'center',
        marginTop: -Dimensions.get('window').height * 0.05,
        alignItems: 'center',
        marginHorizontal: Dimensions.get('window').height * 0.025,
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