import { Image, ImageSourcePropType, Dimensions, StyleProp, StyleSheet, TextProps, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'

export interface HeaderProps extends TextProps {
    //
    iconLeft?: ImageSourcePropType,
    leftHeader?: () => void,
    //
    centerHeader?: React.ReactNode,
    //
    iconRight?: ImageSourcePropType,
    rightHeader?: () => void,

    containerStyle?: StyleProp<ViewStyle>

}

const Header: React.FC<HeaderProps> = (props) => {
    const { iconLeft, iconRight, leftHeader, rightHeader, centerHeader, containerStyle } = props;

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
                {centerHeader}
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
})