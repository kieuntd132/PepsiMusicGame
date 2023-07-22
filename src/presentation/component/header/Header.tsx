import { Image, ImageSourcePropType, Dimensions, StyleProp, StyleSheet, TextProps, TouchableOpacity, View, ViewStyle, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../resource/value/Colors'

export interface HeaderProps extends TextProps {
    //
    iconLeft?: ImageSourcePropType,
    leftHeader?: () => void,
    //
    centerHeader?: React.ReactNode,
    centerHeaderMini?: React.ReactNode,
    // centerHeader?: () => void,
    //
    iconRight?: ImageSourcePropType,
    rightHeader?: () => void,

    containerStyle?: StyleProp<ViewStyle>

}

const Header: React.FC<HeaderProps> = (props) => {
    const { iconLeft, iconRight, leftHeader, rightHeader, centerHeader, centerHeaderMini, containerStyle } = props;

    const EventLeft = () => {
        if (iconLeft) {
            return (
                <TouchableOpacity style= {styles.button} onPress={leftHeader}>
                    <Image source={iconLeft} style={styles.icon} />
                </TouchableOpacity>
            );
        }
        return null;
    };
    const TextcenterHeader = () => {
        return (
            <View style={styles.header_1}>
                <Text style={styles.textHeader}>{centerHeader}</Text>
                <Text style={styles.textHeader2}>{centerHeaderMini}</Text>
            </View>
        )
    }
    const EventRight = () => {
        if (iconRight) {
            return (
                <TouchableOpacity style= {styles.button} onPress={rightHeader}>
                    <Image source={iconRight} style={styles.icon} />
                </TouchableOpacity>
            );
        }
        return null;
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <View style={styles.boxLeft}>
                {EventLeft()}
            </View>
            <View style={styles.boxCenter}>
                {TextcenterHeader()}
            </View>
            <View style={styles.boxRight}>
                {EventRight()}
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: '13%',
        // backgroundColor:'red'
    },
    icon: {
        resizeMode: 'contain',
        height: '40%',
        marginTop: Dimensions.get('window').height * 0.04,
    },
    button: {
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxLeft: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxCenter: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxRight: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_1: {
        marginTop: Dimensions.get('window').height * 0.04,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontFamily:'Montserrat',
        fontWeight: '700',
        fontSize: 18,
        color: Colors.WHITE,
        textAlign: 'center',
    },
    textHeader2: {
        fontFamily:'Montserrat',
        fontWeight: '400',
        fontSize: 12,
        color: Colors.BLUE_2_BLUE,
        textAlign: 'center',
    },
})