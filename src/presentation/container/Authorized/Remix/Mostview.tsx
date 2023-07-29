import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Background from '../../../component/background/Background'
import Header from '../../../component/header/Header'
import { ICON_HOME, ICON_NOTIFICATION } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
const Mostview = () => {
    const [isPressed, setIsPressed] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const [textColor, setTextColor] = useState('#215EAC');

    const handlePress = () => {
        setIsPressed(!isPressed);
        if (isPressed) {
            setBackgroundColor('#ffffff');
            setTextColor('#215EAC');
        } else {
            setBackgroundColor('#215EAC');
            setTextColor('#ffffff');
        }
    };
    return (
        <Background>
            <Header
                iconLeft={ICON_HOME}
                // leftHeader={goBack}
                centerHeader={"Nhạc thịnh hành"}
                iconRight={ICON_NOTIFICATION}
            // rightHeader={goNotification}
            />
            <View style={styles.btn}>
                <TouchableOpacity
                    style={[styles.btn1, { backgroundColor: backgroundColor }]}
                    onPress={handlePress}>
                    <Text style={[styles.txt1, { color: textColor }]}>Người có lượt tương tác nhiều nhất</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn1, { backgroundColor: backgroundColor }]}
                    onPress={handlePress}>
                    <Text style={[styles.txt1, { color: textColor }]}>Video có lượt tương tác nhiều nhất</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

export default Mostview

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Dimensions.get('window').height * 0.015,
        // backgroundColor:"red",
    },
    btn1: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: Colors.WHITE,
        paddingVertical: Dimensions.get('window').height * 0.015,
        paddingHorizontal: Dimensions.get('window').width * 0.015,
        marginRight: Dimensions.get('window').width * 0.015,
        // backgroundColor: Colors.WHITE
    },
    txt1: {

    },

})